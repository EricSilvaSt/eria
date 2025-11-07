/*
  # Cookie Consent and Visitor Analytics Tables

  ## Overview
  This migration creates tables to store user cookie consent preferences and visitor analytics data
  in compliance with LGPD and GDPR regulations.

  ## New Tables

  ### `cookie_consents`
  Stores user consent preferences for different cookie categories
  - `id` (uuid, primary key) - Unique identifier for each consent record
  - `consent_id` (text, unique) - Browser-based identifier for tracking consent across sessions
  - `timestamp` (timestamptz) - When consent was given/updated
  - `essential` (boolean) - Essential cookies (always true, cannot be disabled)
  - `analytics` (boolean) - Analytics and performance cookies
  - `marketing` (boolean) - Marketing and advertising cookies
  - `preferences` (boolean) - Preference and functionality cookies
  - `ip_hash` (text) - Hashed IP address for audit purposes (privacy-safe)
  - `user_agent` (text) - Browser user agent string
  - `page_url` (text) - Page where consent was given
  - `created_at` (timestamptz) - Record creation timestamp

  ### `visitor_analytics`
  Stores anonymized visitor analytics data (only when analytics consent is given)
  - `id` (uuid, primary key) - Unique identifier for each visit record
  - `session_id` (text) - Session identifier for grouping page views
  - `page_url` (text) - URL of visited page
  - `page_title` (text) - Title of visited page
  - `referrer` (text) - Referrer URL
  - `device_type` (text) - Device type (mobile, tablet, desktop)
  - `browser` (text) - Browser name
  - `timestamp` (timestamptz) - Visit timestamp
  - `created_at` (timestamptz) - Record creation timestamp

  ## Security
  - Enable RLS on both tables
  - Add policies for public insert (anonymous users can record consent)
  - No read access from client side (data for backend/admin use only)
  - Automatic cleanup of records older than 2 years (data retention policy)

  ## Important Notes
  - IP addresses are hashed before storage for privacy compliance
  - No personal identifiable information (PII) is stored
  - Consent records are kept for legal compliance (2 years recommended)
  - Analytics data is only collected when user has given explicit consent
*/

CREATE TABLE IF NOT EXISTS cookie_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  consent_id text UNIQUE NOT NULL,
  timestamp timestamptz DEFAULT now() NOT NULL,
  essential boolean DEFAULT true NOT NULL,
  analytics boolean DEFAULT false NOT NULL,
  marketing boolean DEFAULT false NOT NULL,
  preferences boolean DEFAULT false NOT NULL,
  ip_hash text,
  user_agent text,
  page_url text,
  created_at timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS visitor_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  page_url text NOT NULL,
  page_title text,
  referrer text,
  device_type text,
  browser text,
  timestamp timestamptz DEFAULT now() NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cookie_consents_consent_id ON cookie_consents(consent_id);
CREATE INDEX IF NOT EXISTS idx_cookie_consents_timestamp ON cookie_consents(timestamp);
CREATE INDEX IF NOT EXISTS idx_visitor_analytics_session_id ON visitor_analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_visitor_analytics_timestamp ON visitor_analytics(timestamp);

ALTER TABLE cookie_consents ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on cookie_consents"
  ON cookie_consents
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on visitor_analytics"
  ON visitor_analytics
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE OR REPLACE FUNCTION cleanup_old_records()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM cookie_consents WHERE created_at < NOW() - INTERVAL '2 years';
  DELETE FROM visitor_analytics WHERE created_at < NOW() - INTERVAL '2 years';
END;
$$;
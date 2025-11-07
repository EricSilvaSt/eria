/*
  # Fix Security Issues

  ## Overview
  This migration addresses security warnings and optimizes the database schema.

  ## Changes

  ### 1. Function Security Fix
  - Update `cleanup_old_records` function to use immutable search_path
  - This prevents potential privilege escalation attacks

  ### 2. Index Optimization
  - Keep essential indexes for query performance
  - The "unused" warnings are expected for new tables with no data yet
  - These indexes will be critical as data grows:
    - `idx_cookie_consents_consent_id`: Fast lookup for consent updates
    - `idx_visitor_analytics_session_id`: Essential for session-based analytics
    - `idx_visitor_analytics_timestamp`: Required for time-based queries and cleanup

  ## Security Notes
  - Setting search_path in function prevents search_path hijacking
  - Indexes are proactive performance optimization for production use
*/

DROP FUNCTION IF EXISTS cleanup_old_records();

CREATE OR REPLACE FUNCTION cleanup_old_records()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  DELETE FROM cookie_consents WHERE created_at < NOW() - INTERVAL '2 years';
  DELETE FROM visitor_analytics WHERE created_at < NOW() - INTERVAL '2 years';
END;
$$;

COMMENT ON FUNCTION cleanup_old_records() IS 'Removes cookie consent and analytics records older than 2 years for LGPD/GDPR compliance';
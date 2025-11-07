export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface CookieConsent {
  consentId: string;
  timestamp: string;
  preferences: CookiePreferences;
  version: string;
}

export interface VisitorData {
  sessionId: string;
  pageUrl: string;
  pageTitle: string;
  referrer: string;
  deviceType: string;
  browser: string;
}

export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'preferences';

export interface CookieCategoryInfo {
  name: string;
  description: string;
  required: boolean;
  examples: string[];
}

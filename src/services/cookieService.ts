import { supabase } from '../lib/supabase';
import { CookiePreferences, VisitorData } from '../types/cookie.types';
import { hashString } from '../lib/cookieUtils';

export const saveConsentToDatabase = async (
  consentId: string,
  preferences: CookiePreferences
): Promise<void> => {
  if (!supabase) return;

  try {
    const ipHash = await getIpHash();

    const { error } = await supabase
      .from('cookie_consents')
      .insert({
        consent_id: consentId,
        timestamp: new Date().toISOString(),
        essential: preferences.essential,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        preferences: preferences.preferences,
        ip_hash: ipHash,
        user_agent: navigator.userAgent,
        page_url: window.location.href,
      });

    if (error) {
      console.error('Error saving consent to database:', error);
    }
  } catch (error) {
    console.error('Error in saveConsentToDatabase:', error);
  }
};

export const trackPageView = async (visitorData: VisitorData): Promise<void> => {
  if (!supabase) return;

  try {
    const { error } = await supabase
      .from('visitor_analytics')
      .insert({
        session_id: visitorData.sessionId,
        page_url: visitorData.pageUrl,
        page_title: visitorData.pageTitle,
        referrer: visitorData.referrer,
        device_type: visitorData.deviceType,
        browser: visitorData.browser,
        timestamp: new Date().toISOString(),
      });

    if (error) {
      console.error('Error tracking page view:', error);
    }
  } catch (error) {
    console.error('Error in trackPageView:', error);
  }
};

const getIpHash = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;
    return await hashString(ipAddress);
  } catch {
    return await hashString('unknown');
  }
};

export const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('visitor_session_id');

  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    sessionStorage.setItem('visitor_session_id', sessionId);
  }

  return sessionId;
};

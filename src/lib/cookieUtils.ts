import Cookies from 'js-cookie';
import { CookiePreferences, CookieConsent } from '../types/cookie.types';

const COOKIE_CONSENT_NAME = 'cookie_consent';
const COOKIE_CONSENT_VERSION = '1.0';
const COOKIE_EXPIRY_DAYS = 365;

export const generateConsentId = (): string => {
  return `consent_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

export const getStoredConsent = (): CookieConsent | null => {
  const consentString = Cookies.get(COOKIE_CONSENT_NAME);
  if (!consentString) return null;

  try {
    return JSON.parse(consentString) as CookieConsent;
  } catch {
    return null;
  }
};

export const saveConsent = (preferences: CookiePreferences): CookieConsent => {
  const consent: CookieConsent = {
    consentId: generateConsentId(),
    timestamp: new Date().toISOString(),
    preferences,
    version: COOKIE_CONSENT_VERSION,
  };

  Cookies.set(COOKIE_CONSENT_NAME, JSON.stringify(consent), {
    expires: COOKIE_EXPIRY_DAYS,
    sameSite: 'lax',
    secure: true,
  });

  return consent;
};

export const removeConsent = (): void => {
  Cookies.remove(COOKIE_CONSENT_NAME);
};

export const hasConsented = (): boolean => {
  return getStoredConsent() !== null;
};

export const getDefaultPreferences = (): CookiePreferences => {
  return {
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  };
};

export const getAllAcceptedPreferences = (): CookiePreferences => {
  return {
    essential: true,
    analytics: true,
    marketing: true,
    preferences: true,
  };
};

export const shouldLoadAnalytics = (): boolean => {
  const consent = getStoredConsent();
  return consent?.preferences.analytics ?? false;
};

export const shouldLoadMarketing = (): boolean => {
  const consent = getStoredConsent();
  return consent?.preferences.marketing ?? false;
};

export const getDeviceType = (): string => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

export const getBrowserName = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Unknown';
};

export const hashString = async (str: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookiePreferences } from '../types/cookie.types';
import {
  getStoredConsent,
  saveConsent,
  hasConsented,
  getDefaultPreferences,
  getAllAcceptedPreferences,
  getDeviceType,
  getBrowserName,
} from '../lib/cookieUtils';
import { saveConsentToDatabase, trackPageView, getSessionId } from '../services/cookieService';

interface CookieConsentContextType {
  preferences: CookiePreferences;
  hasUserConsented: boolean;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  closeSettings: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider = ({ children }: CookieConsentProviderProps) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(getDefaultPreferences());
  const [hasUserConsented, setHasUserConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const existingConsent = getStoredConsent();

    if (existingConsent) {
      setPreferences(existingConsent.preferences);
      setHasUserConsented(true);
      setShowBanner(false);

      if (existingConsent.preferences.analytics) {
        trackVisit();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const trackVisit = async () => {
    const sessionId = getSessionId();
    await trackPageView({
      sessionId,
      pageUrl: window.location.href,
      pageTitle: document.title,
      referrer: document.referrer,
      deviceType: getDeviceType(),
      browser: getBrowserName(),
    });
  };

  const acceptAll = () => {
    const allAccepted = getAllAcceptedPreferences();
    const consent = saveConsent(allAccepted);

    setPreferences(allAccepted);
    setHasUserConsented(true);
    setShowBanner(false);
    setShowSettings(false);

    saveConsentToDatabase(consent.consentId, allAccepted).catch(() => {});
    trackVisit().catch(() => {});
  };

  const rejectAll = () => {
    const defaultPrefs = getDefaultPreferences();
    const consent = saveConsent(defaultPrefs);

    setPreferences(defaultPrefs);
    setHasUserConsented(true);
    setShowBanner(false);
    setShowSettings(false);

    saveConsentToDatabase(consent.consentId, defaultPrefs).catch(() => {});
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const consent = saveConsent(prefs);

    setPreferences(prefs);
    setHasUserConsented(true);
    setShowBanner(false);
    setShowSettings(false);

    saveConsentToDatabase(consent.consentId, prefs).catch(() => {});

    if (prefs.analytics) {
      trackVisit().catch(() => {});
    }
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasUserConsented,
        showBanner,
        showSettings,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings,
        closeSettings,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

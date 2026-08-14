import { Cookie, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent();
  if (!showBanner) return null;

  return (
    <aside className="cookie-banner animate-slide-up" aria-label="Preferências de cookies">
      <div className="cookie-heading"><span><Cookie size={18} /></span><div><p>PRIVACIDADE</p><h2>Você decide o que fica.</h2></div></div>
      <p className="cookie-copy">Usamos cookies essenciais para o site funcionar. Análises e personalização só são ativadas com sua escolha. Consulte nossa <Link to="/politica-cookies">Política de Cookies</Link>.</p>
      <div className="cookie-actions">
        <button type="button" onClick={acceptAll} className="button button-primary">Aceitar todos</button>
        <button type="button" onClick={rejectAll} className="cookie-secondary">Somente essenciais</button>
        <button type="button" onClick={openSettings} className="cookie-settings"><Settings size={16} /> Personalizar</button>
      </div>
    </aside>
  );
}

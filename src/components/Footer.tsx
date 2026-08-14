import { ArrowUpRight, Cookie, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../contexts/CookieConsentContext';

const products = [
  ['ER.IA Hub', 'https://hub.eria.tec.br'],
  ['ER.IA Sign', '/ecossistema#eria-sign'],
  ['GeraDoc', '/ecossistema#geradoc'],
  ['Helpy', '/ecossistema#helpy'],
  ['ER.IA Flow', '/ecossistema#eria-flow'],
] as const;

export default function Footer() {
  const { openSettings } = useCookieConsent();

  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-lead">
          <div>
            <p className="eyebrow light">COMECE PELO PROBLEMA. A GENTE CONECTA O RESTO.</p>
            <h2>Tecnologia que conversa com o seu negócio.</h2>
          </div>
          <a
            className="button button-light"
            href="https://wa.me/5571981526218"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Falar com a ER.IA
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-crop footer-logo" aria-hidden="true">
              <img src="/eria_logo.jpeg" alt="" />
            </span>
            <p>Produtos digitais e soluções sob medida para vender, operar e crescer melhor.</p>
            <a href="mailto:adm@eria.tec.br"><Mail size={15} /> adm@eria.tec.br</a>
          </div>

          <div>
            <h3>Ecossistema</h3>
            <ul>
              {products.map(([label, href]) => (
                <li key={label}>
                  {href.startsWith('http') ? <a href={href}>{label}</a> : <Link to={href}>{label}</Link>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Empresa</h3>
            <ul>
              <li><Link to="/sobre">Sobre a ER.IA</Link></li>
              <li><Link to="/sites">Sites e e-commerce</Link></li>
              <li><Link to="/sistemas">Sistemas sob medida</Link></li>
              <li><Link to="/agentes-ia">Agentes de IA</Link></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/politica-privacidade">Privacidade</Link></li>
              <li><Link to="/politica-cookies">Cookies</Link></li>
              <li><button type="button" onClick={openSettings}><Cookie size={14} /> Preferências</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ER.IA Tecnologia.</span>
          <span>Salvador, Bahia <ArrowUpRight size={13} /></span>
        </div>
      </div>
    </footer>
  );
}

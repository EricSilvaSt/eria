import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { path: '/', label: 'Início' },
  { path: '/ecossistema', label: 'Ecossistema' },
  { path: '/sites', label: 'Sites' },
  { path: '/sistemas', label: 'Sistemas' },
  { path: '/sobre', label: 'Sobre' },
];

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link to="/" className="brand" aria-label="ER.IA - página inicial">
          <span className="brand-crop" aria-hidden="true">
            <img src="/eria_logo.jpeg" alt="" />
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="header-login" href="https://hub.eria.tec.br">
            Acessar ER.IA Hub <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            className="icon-button mobile-trigger"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel">
          <div className="site-shell mobile-nav-inner">
            {navigation.map((item, index) => (
              <Link key={item.path} to={item.path} className="mobile-nav-link" onClick={() => setOpen(false)}>
                <span>0{index + 1}</span> {item.label}
              </Link>
            ))}
            <a href="https://hub.eria.tec.br" className="button button-primary mobile-nav-cta">
              Acessar ER.IA Hub <ArrowUpRight size={17} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

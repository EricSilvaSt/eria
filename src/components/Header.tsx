import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/sites', label: 'Sites & E-commerce' },
    { path: '/sistemas', label: 'Sistemas' },
    { path: '/agentes-ia', label: 'Agentes de IA' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 z-50" onClick={closeMobileMenu}>
            <img
              src="/eria_logo.jpeg"
              alt="ER.IA Logo"
              className="h-20 w-20 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300" />
              )}
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-green-500 hover:bg-green-600 text-white px-4 lg:px-6 py-2 rounded-full font-semibold transition-colors duration-200 items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="text-sm lg:text-base">Falar Agora</span>
            </a>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden z-50 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-24">
          <nav className="flex flex-col px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

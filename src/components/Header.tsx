import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sites', label: 'Sites & E-commerce' },
    { path: '/sistemas', label: 'Sistemas' },
    { path: '/agentes-ia', label: 'Agentes de IA' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/WhatsApp Image 2025-10-24 at 14.07.43.jpeg"
              alt="ER.IA Logo"
              className="h-40 w-40 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 flex items-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Falar Agora</span>
          </a>
        </div>
      </div>
    </header>
  );
}

import { Phone, MessageCircle, Globe, Settings, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/eria_logo.jpeg"
                alt="ER.IA Logo"
                className="h-40 w-40 object-contain mix-blend-screen"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Soluções completas em tecnologia. Sites, sistemas e agentes de IA para transformar seu negócio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/sites" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Sites & E-commerce</span>
                </Link>
              </li>
              <li>
                <Link to="/sistemas" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Sistemas</span>
                </Link>
              </li>
              <li>
                <Link to="/agentes-ia" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <span>Agentes de IA</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{whatsappNumber}</span>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 inline-flex items-center space-x-2 mt-4"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ER.IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

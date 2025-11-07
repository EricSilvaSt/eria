import { Cookie, Settings, X } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto animate-slide-up">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Cookie className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Usamos Cookies
                </h3>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo
              e analisar nosso tráfego. Ao clicar em "Aceitar Todos", você concorda com o uso de
              todos os cookies. Você pode gerenciar suas preferências ou saber mais em nossa{' '}
              <Link to="/politica-cookies" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                Política de Cookies
              </Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Aceitar Todos</span>
              </button>

              <button
                onClick={rejectAll}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                Rejeitar Não-Essenciais
              </button>

              <button
                onClick={openSettings}
                className="sm:w-auto bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Settings className="h-5 w-5" />
                <span>Personalizar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

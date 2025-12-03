import { X, Shield, BarChart, Megaphone, Sliders } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import { CookiePreferences, CookieCategoryInfo } from '../types/cookie.types';

const cookieCategories: Record<string, CookieCategoryInfo> = {
  essential: {
    name: 'Cookies Essenciais',
    description: 'Necessários para o funcionamento básico do site. Não podem ser desativados.',
    required: true,
    examples: ['Gerenciamento de sessão', 'Preferências de cookies', 'Segurança'],
  },
  analytics: {
    name: 'Cookies de Análise',
    description: 'Coletam informações sobre como você usa nosso site para nos ajudar a melhorá-lo.',
    required: false,
    examples: ['Google Analytics', 'Contagem de visitantes', 'Páginas mais visitadas'],
  },
  marketing: {
    name: 'Cookies de Marketing',
    description: 'Usados para personalizar anúncios e medir a eficácia de campanhas publicitárias.',
    required: false,
    examples: ['Facebook Pixel', 'Google Ads', 'Retargeting'],
  },
  preferences: {
    name: 'Cookies de Preferências',
    description: 'Lembram suas escolhas e personalizações para melhorar sua experiência.',
    required: false,
    examples: ['Idioma', 'Região', 'Configurações de interface'],
  },
};

export default function CookieSettings() {
  const { showSettings, closeSettings, savePreferences, preferences: contextPreferences } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(contextPreferences);

  useEffect(() => {
    setLocalPreferences(contextPreferences);
  }, [contextPreferences]);

  if (!showSettings) return null;

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'essential') return;
    setLocalPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    savePreferences(localPreferences);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setLocalPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const icons = {
    essential: Shield,
    analytics: BarChart,
    marketing: Megaphone,
    preferences: Sliders,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col transition-colors duration-200">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Configurações de Cookies</h2>
          <button
            onClick={closeSettings}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Personalize suas preferências de cookies. Você pode ativar ou desativar categorias
            específicas de cookies de acordo com suas necessidades. Os cookies essenciais são
            sempre necessários para o funcionamento do site.
          </p>

          <div className="space-y-4">
            {Object.entries(cookieCategories).map(([key, category]) => {
              const Icon = icons[key as keyof typeof icons];
              const isEnabled = localPreferences[key as keyof CookiePreferences];

              return (
                <div
                  key={key}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5 border-2 border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`p-2 rounded-lg ${isEnabled ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-200 dark:bg-gray-600'}`}>
                        <Icon className={`h-5 w-5 ${isEnabled ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                          {category.name}
                          {category.required && (
                            <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full font-semibold">
                              Obrigatório
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggle(key as keyof CookiePreferences)}
                      disabled={category.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        isEnabled ? 'bg-blue-600' : 'bg-gray-300'
                      } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="mt-3 pl-10">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-1">Exemplos:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-200 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-500"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Aceitar Todos
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Salvar Preferências
            </button>
            <button
              onClick={closeSettings}
              className="sm:w-auto bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-600 transition-colors duration-200"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

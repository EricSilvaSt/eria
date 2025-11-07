import { Cookie, Shield, BarChart, Megaphone, Sliders, Clock, FileText, Mail } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export default function CookiePolicy() {
  const { openSettings } = useCookieConsent();

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <Cookie className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Política de Cookies
          </h1>
          <p className="text-xl text-gray-600">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Resumo Rápido</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, personalizar
            conteúdo e analisar o tráfego do nosso site. Você tem controle total sobre quais cookies
            aceitar.
          </p>
          <button
            onClick={openSettings}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Shield className="h-5 w-5" />
            <span>Gerenciar Preferências</span>
          </button>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <span>O que são Cookies?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando
              você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de
              forma mais eficiente e fornecer informações aos proprietários do site.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Os cookies podem ser "persistentes" ou de "sessão". Cookies persistentes permanecem no
              seu dispositivo mesmo depois de fechar o navegador, enquanto cookies de sessão são
              deletados quando você fecha o navegador.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. Cookies Essenciais (Obrigatórios)
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Estes cookies são necessários para o funcionamento básico do site e não podem
                      ser desativados. Eles são geralmente definidos apenas em resposta a ações
                      realizadas por você, como definir suas preferências de privacidade.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Exemplos:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cookie de consentimento de cookies (cookie_consent)</li>
                        <li>• Cookies de segurança e autenticação</li>
                        <li>• Cookies de balanceamento de carga</li>
                      </ul>
                      <div className="flex items-center space-x-2 mt-3 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Duração: 12 meses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <BarChart className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      2. Cookies de Análise (Opcionais)
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos
                      medir e melhorar o desempenho do nosso site. Todos os dados coletados são
                      agregados e anônimos.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Exemplos:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Google Analytics (_ga, _gid, _gat)</li>
                        <li>• Contadores de visitantes</li>
                        <li>• Mapas de calor e gravações de sessão</li>
                      </ul>
                      <div className="flex items-center space-x-2 mt-3 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Duração: 2 anos (variável por cookie)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Megaphone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. Cookies de Marketing (Opcionais)
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Estes cookies são usados para personalizar anúncios e medir a eficácia das
                      nossas campanhas publicitárias. Podem ser definidos por nossos parceiros de
                      publicidade através do nosso site.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Exemplos:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Facebook Pixel (_fbp, _fbc)</li>
                        <li>• Google Ads (IDE, test_cookie)</li>
                        <li>• Cookies de retargeting</li>
                      </ul>
                      <div className="flex items-center space-x-2 mt-3 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Duração: 90 dias (variável por cookie)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Sliders className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Cookies de Preferências (Opcionais)
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Estes cookies permitem que o site lembre escolhas que você faz e forneça
                      recursos aprimorados e mais personalizados, como idioma ou região.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Exemplos:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Preferência de idioma</li>
                        <li>• Configurações de região</li>
                        <li>• Preferências de interface do usuário</li>
                      </ul>
                      <div className="flex items-center space-x-2 mt-3 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Duração: 12 meses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seus Direitos (LGPD/GDPR)</h2>
            <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Regulamento Geral de
                Proteção de Dados (GDPR), você tem os seguintes direitos:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>Direito de Acesso:</strong> Você pode solicitar informações sobre quais
                    dados pessoais temos sobre você.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>Direito de Retificação:</strong> Você pode solicitar a correção de dados
                    incorretos ou incompletos.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>Direito de Exclusão:</strong> Você pode solicitar a exclusão de seus
                    dados pessoais.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    <strong>Direito de Retirar Consentimento:</strong> Você pode alterar suas
                    preferências de cookies a qualquer momento.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Gerenciar Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Você pode gerenciar suas preferências de cookies de várias formas:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-100">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span>
                    <strong>Através do nosso site:</strong> Use o botão abaixo para ajustar suas
                    preferências de cookies.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span>
                    <strong>Através do seu navegador:</strong> A maioria dos navegadores permite que
                    você recuse ou aceite cookies. As instruções variam de navegador para navegador.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span>
                    <strong>Ferramentas de terceiros:</strong> Você pode optar por não participar de
                    cookies de publicidade através de sites como{' '}
                    <a
                      href="https://optout.aboutads.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Digital Advertising Alliance
                    </a>.
                  </span>
                </li>
              </ol>
              <div className="mt-6">
                <button
                  onClick={openSettings}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <Shield className="h-5 w-5" />
                  <span>Gerenciar Minhas Preferências</span>
                </button>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Atualizações desta Política</h2>
            <p className="text-gray-600 leading-relaxed">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em
              nossas práticas ou por outras razões operacionais, legais ou regulatórias. Recomendamos
              que você revise esta página periodicamente para se manter informado sobre como usamos
              cookies.
            </p>
          </section>

          <section className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Dúvidas?</h2>
                <p className="text-gray-700 mb-4">
                  Se você tiver alguma dúvida sobre nossa Política de Cookies ou como tratamos seus
                  dados, entre em contato conosco:
                </p>
                <a
                  href="https://wa.me/71981526218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Entrar em Contato</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

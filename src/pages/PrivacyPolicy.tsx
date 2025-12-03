import SEO from '../components/SEO';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <SEO
        title="Política de Privacidade | ER.IA - Proteção de Dados"
        description="Política de Privacidade da ER.IA. Conheça como coletamos, usamos e protegemos seus dados pessoais de acordo com a LGPD."
        keywords="política de privacidade, LGPD, proteção de dados, privacidade"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Política de Privacidade</h1>
          </div>

          <p className="text-gray-600 mb-8">
            <strong>Última atualização:</strong> 02 de dezembro de 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                A ER.IA ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e os dados
                pessoais de seus usuários, clientes e visitantes do site. Esta Política de Privacidade descreve
                como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com
                a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dados que Coletamos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1. Dados Fornecidos por Você</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Nome completo e nome da empresa</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone/WhatsApp</li>
                <li>CNPJ (quando aplicável)</li>
                <li>Informações fornecidas em formulários de contato e solicitação de serviços</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">2.2. Dados Coletados Automaticamente</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de navegação</li>
                <li>Origem de acesso (referrer)</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Usamos Seus Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornecer e gerenciar nossos serviços</li>
                <li>Responder às suas solicitações e dúvidas</li>
                <li>Enviar orçamentos e propostas comerciais</li>
                <li>Melhorar nosso site e experiência do usuário</li>
                <li>Enviar comunicações relevantes sobre nossos serviços (com seu consentimento)</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.
                Podemos compartilhar seus dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Prestadores de Serviços:</strong> Com empresas que nos auxiliam na operação do site e prestação de serviços (hospedagem, analytics, etc.)</li>
                <li><strong>Obrigações Legais:</strong> Quando exigido por lei ou ordem judicial</li>
                <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
                <li><strong>Seu Consentimento:</strong> Com sua autorização expressa para finalidades específicas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Você pode
                gerenciar suas preferências de cookies através do banner de cookies exibido na primeira visita.
                Para mais informações, consulte nossa <a href="/politica-cookies" className="text-blue-600 hover:underline">Política de Cookies</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Segurança dos Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                <li>Criptografia de dados em trânsito (SSL/TLS)</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Backups regulares</li>
                <li>Treinamento de equipe em proteção de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas
                nesta política, salvo quando a lei exigir um período maior de retenção. Após esse período, os
                dados serão excluídos ou anonimizados de forma segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Seus Direitos (LGPD)</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização ou Exclusão:</strong> Solicitar a anonimização ou eliminação de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor</li>
                <li><strong>Revogação:</strong> Revogar o consentimento dado anteriormente</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em determinadas situações</li>
                <li><strong>Informação:</strong> Obter informações sobre o compartilhamento de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dados de Menores</h2>
              <p className="text-gray-700 leading-relaxed">
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados
                pessoais de menores sem o consentimento dos pais ou responsáveis legais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Alterações nesta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações
                significativas por meio de aviso em nosso site ou por e-mail. Recomendamos que você revise esta
                política regularmente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para exercer seus direitos, esclarecer dúvidas ou fazer reclamações sobre esta Política de
                Privacidade, entre em contato conosco:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <p className="flex items-center text-gray-800 mb-2">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <strong>E-mail:</strong>&nbsp;
                  <a href="mailto:contato@eria.tec.br" className="text-blue-600 hover:underline">
                    contato@eria.tec.br
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Responsável pela Proteção de Dados:</strong> ER.IA
                </p>
                <p className="text-gray-700">
                  <strong>Endereço:</strong> Salvador, Bahia, Brasil
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed">
                Esta Política de Privacidade é regida pelas leis brasileiras, incluindo a Lei Geral de Proteção
                de Dados (LGPD - Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

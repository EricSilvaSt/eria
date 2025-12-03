import { Bot, Zap, TrendingUp, Users, CheckCircle, MessageCircle, ArrowRight, Clock, Target, Brain, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function AgentesIA() {
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const features = [
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Seus leads são atendidos instantaneamente, a qualquer hora do dia ou da noite, sem necessidade de equipe de plantão.'
    },
    {
      icon: Target,
      title: 'Qualificação Inteligente',
      description: 'O agente identifica automaticamente leads qualificados e prioriza os mais propensos a converter.'
    },
    {
      icon: Brain,
      title: 'Aprendizado Contínuo',
      description: 'A IA aprende com cada interação e melhora continuamente as respostas e estratégias de conversão.'
    },
    {
      icon: Users,
      title: 'Personalização Total',
      description: 'Cada cliente recebe um atendimento único, baseado em seu perfil, histórico e comportamento.'
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Conversões',
      description: 'Acompanhamento inteligente e follow-ups automáticos aumentam suas taxas de conversão em até 300%.'
    },
    {
      icon: ShieldCheck,
      title: 'Confiável e Seguro',
      description: 'Todas as conversas são armazenadas com segurança e você tem controle total sobre o agente.'
    }
  ];

  const useCases = [
    {
      title: 'Imobiliárias',
      description: 'Qualificação de interessados em imóveis',
      scenarios: [
        'Atendimento automático de leads de portais',
        'Coleta de informações sobre preferências',
        'Agendamento de visitas',
        'Envio de catálogo personalizado',
        'Follow-up automático pós-visita'
      ]
    },
    {
      title: 'E-commerce',
      description: 'Vendas e suporte ao cliente',
      scenarios: [
        'Recomendação de produtos',
        'Resposta sobre disponibilidade e prazos',
        'Acompanhamento de pedidos',
        'Recuperação de carrinhos abandonados',
        'Coleta de feedbacks pós-compra'
      ]
    },
    {
      title: 'Serviços',
      description: 'Captação e agendamento de clientes',
      scenarios: [
        'Qualificação de interessados',
        'Explicação de serviços e pacotes',
        'Agendamento de consultas',
        'Envio de orçamentos',
        'Lembretes de agendamentos'
      ]
    },
    {
      title: 'Escolas e Cursos',
      description: 'Captação e matrícula de alunos',
      scenarios: [
        'Informações sobre cursos e valores',
        'Agendamento de aulas experimentais',
        'Processo de matrícula automatizado',
        'Lembretes de pagamento',
        'Acompanhamento do interesse'
      ]
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Configuração Personalizada',
      description: 'Configuramos o agente com informações do seu negócio, produtos/serviços, tom de voz e estratégias de conversão.'
    },
    {
      step: '2',
      title: 'Integração com WhatsApp',
      description: 'Conectamos o agente ao seu WhatsApp Business oficial através da API, mantendo sua identidade e número.'
    },
    {
      step: '3',
      title: 'Treinamento da IA',
      description: 'Treinamos o modelo com suas perguntas frequentes, objeções comuns e melhores práticas de vendas.'
    },
    {
      step: '4',
      title: 'Testes e Ajustes',
      description: 'Testamos diversos cenários e refinamos as respostas para garantir conversas naturais e eficazes.'
    },
    {
      step: '5',
      title: 'Ativação e Monitoramento',
      description: 'Colocamos o agente em produção e monitoramos continuamente para otimizar performance e conversões.'
    }
  ];

  const results = [
    { value: '300%', label: 'Aumento em conversões' },
    { value: '24/7', label: 'Atendimento contínuo' },
    { value: '95%', label: 'Taxa de satisfação' },
    { value: '2min', label: 'Tempo de resposta' },
    { value: '70%', label: 'Redução de custos' },
    { value: '10x', label: 'Mais leads atendidos' }
  ];

  const capabilities = [
    'Responder perguntas sobre produtos e serviços',
    'Coletar informações de contato e preferências',
    'Qualificar leads com base em critérios definidos',
    'Agendar reuniões e visitas automaticamente',
    'Enviar catálogos, imagens e documentos',
    'Realizar follow-ups em momentos estratégicos',
    'Identificar objeções e lidar com elas',
    'Transferir para humano quando necessário',
    'Registrar tudo em seu CRM automaticamente',
    'Gerar relatórios de performance e insights'
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Agentes de IA para WhatsApp em Salvador | ER.IA - Automação de Vendas"
        description="Agentes de IA para WhatsApp que automatizam atendimento e vendas 24/7 em Salvador. Qualificação de leads, follow-up inteligente e aumento de 300% nas conversões. Chatbot personalizado para seu negócio."
        keywords="agentes de IA Salvador, chatbot WhatsApp, automação de vendas, IA conversacional Bahia, atendimento automatizado, bot WhatsApp Business"
      />
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-orange-100 dark:bg-orange-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="h-10 w-10 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Agentes de IA para
              <span className="text-orange-600 dark:text-orange-400"> WhatsApp</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
              Automatize suas vendas com Agentes de IA inteligentes. Atendimento 24/7,
              conversão otimizada e acompanhamento personalizado de cada lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Começar Agora</span>
              </a>
              <a
                href="#casos"
                className="border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200"
              >
                Ver Casos de Uso
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Por que escolher nossos Agentes de IA?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transforme sua operação de vendas com tecnologia de ponta
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-500 transition-all duration-300">
                  <div className="bg-orange-100 dark:bg-orange-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              O que o Agente Pode Fazer?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Funcionalidades poderosas para automatizar todo o processo de vendas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300 text-lg">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="py-20 bg-orange-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Casos de Uso por Segmento
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Soluções personalizadas para cada tipo de negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 border-2 border-orange-100 dark:border-orange-900 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.scenarios.map((scenario, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Processo simples em 5 etapas
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Veja o impacto em números reais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">{result.value}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Automatizar suas Vendas?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Configure seu Agente de IA para WhatsApp hoje mesmo e veja seus resultados dispararem.
              Atendimento 24/7, mais conversões e menos trabalho manual.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Começar Agora</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

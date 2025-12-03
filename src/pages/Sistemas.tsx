import { Settings, Database, Cloud, Lock, BarChart3, Workflow, CheckCircle, MessageCircle, ArrowRight, Zap, Gauge } from 'lucide-react';
import SEO from '../components/SEO';

export default function Sistemas() {
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const features = [
    {
      icon: Database,
      title: 'Banco de Dados Robusto',
      description: 'Estrutura de dados escalável e segura para gerenciar todas as informações do seu negócio.'
    },
    {
      icon: Cloud,
      title: 'Cloud Ready',
      description: 'Sistemas preparados para a nuvem, garantindo disponibilidade e performance em qualquer lugar.'
    },
    {
      icon: Lock,
      title: 'Segurança Avançada',
      description: 'Proteção de dados com criptografia, autenticação e controle de acesso por perfis.'
    },
    {
      icon: BarChart3,
      title: 'Dashboards Inteligentes',
      description: 'Visualize métricas e KPIs em tempo real com relatórios personalizados e exportáveis.'
    },
    {
      icon: Workflow,
      title: 'Automação de Processos',
      description: 'Automatize tarefas repetitivas e integre diferentes setores da sua empresa.'
    },
    {
      icon: Gauge,
      title: 'Alta Performance',
      description: 'Sistemas otimizados para processar grandes volumes de dados rapidamente.'
    }
  ];

  const systemTypes = [
    {
      title: 'ERP - Enterprise Resource Planning',
      description: 'Sistema completo de gestão empresarial',
      modules: [
        'Gestão Financeira e Contábil',
        'Controle de Estoque e Compras',
        'Vendas e Faturamento',
        'Recursos Humanos',
        'Produção e Logística',
        'Relatórios Gerenciais'
      ],
      color: 'blue'
    },
    {
      title: 'CRM - Customer Relationship',
      description: 'Gestão completa do relacionamento com clientes',
      modules: [
        'Cadastro de Leads e Clientes',
        'Pipeline de Vendas',
        'Histórico de Interações',
        'Automação de Marketing',
        'Relatórios de Performance',
        'Integração com WhatsApp/E-mail'
      ],
      color: 'green'
    },
    {
      title: 'Sistema de Gestão Customizado',
      description: 'Solução sob medida para suas necessidades',
      modules: [
        'Funcionalidades personalizadas',
        'Integração com sistemas existentes',
        'API para terceiros',
        'Módulos específicos do seu negócio',
        'Workflows customizados',
        'Relatórios personalizados'
      ],
      color: 'orange'
    }
  ];

  const benefits = [
    {
      title: 'Aumento de Produtividade',
      description: 'Automatize tarefas manuais e libere sua equipe para focar no que realmente importa.',
      percentage: '60%'
    },
    {
      title: 'Redução de Custos',
      description: 'Elimine retrabalho, reduza erros e otimize recursos operacionais.',
      percentage: '40%'
    },
    {
      title: 'Melhor Tomada de Decisão',
      description: 'Dados em tempo real e relatórios precisos para decisões estratégicas.',
      percentage: '80%'
    },
    {
      title: 'Crescimento Escalável',
      description: 'Sistemas que crescem junto com seu negócio sem perder performance.',
      percentage: '100%'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Análise Detalhada',
      description: 'Mapeamos todos os processos atuais e identificamos pontos de melhoria e automação.'
    },
    {
      step: '2',
      title: 'Planejamento',
      description: 'Definimos arquitetura, funcionalidades, integrações e cronograma de desenvolvimento.'
    },
    {
      step: '3',
      title: 'Desenvolvimento',
      description: 'Construímos o sistema em sprints, com entregas parciais para validação contínua.'
    },
    {
      step: '4',
      title: 'Testes e Validação',
      description: 'Testamos exaustivamente todas as funcionalidades e corrigimos possíveis falhas.'
    },
    {
      step: '5',
      title: 'Implantação',
      description: 'Colocamos o sistema em produção e treinamos sua equipe para utilização plena.'
    },
    {
      step: '6',
      title: 'Suporte Contínuo',
      description: 'Oferecemos manutenção, atualizações e suporte técnico especializado.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Desenvolvimento de Sistemas Personalizados em Salvador | ER.IA - ERP, CRM"
        description="Desenvolvimento de sistemas personalizados, ERP, CRM e automação de processos em Salvador, Bahia. Soluções sob medida para otimizar sua operação, integrar setores e aumentar produtividade."
        keywords="desenvolvimento de sistemas Salvador, ERP Salvador, CRM Bahia, software personalizado, automação de processos, sistema de gestão Salvador"
      />
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Sistemas
              <span className="text-green-600 dark:text-green-400"> Personalizados</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
              Desenvolvemos sistemas sob medida para automatizar processos, integrar setores e
              impulsionar a eficiência do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Solicitar Consultoria</span>
              </a>
              <a
                href="#tipos"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200"
              >
                Ver Tipos de Sistemas
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Características dos Nossos Sistemas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologia e segurança para transformar sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-2xl p-8 hover:shadow-xl hover:border-green-200 dark:hover:border-green-500 transition-all duration-300">
                  <div className="bg-green-100 dark:bg-green-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tipos" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tipos de Sistemas que Desenvolvemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para cada necessidade do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => {
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200'
              };

              return (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${colorClasses[system.color as keyof typeof colorClasses].split(' ')[2]}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClasses[system.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')}`}>
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{system.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{system.description}</p>
                  <ul className="space-y-3">
                    {system.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Benefícios Mensuráveis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados comprovados em diversos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">{benefit.percentage}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Metodologia ágil para garantir qualidade e resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforme sua Operação com um Sistema Personalizado
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos automatizar e otimizar
              os processos do seu negócio.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Agendar Consultoria</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

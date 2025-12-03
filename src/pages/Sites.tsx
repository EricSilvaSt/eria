import { Globe, Smartphone, Search, ShoppingCart, Palette, Code, CheckCircle, MessageCircle, ArrowRight, Zap } from 'lucide-react';
import SEO from '../components/SEO';

export default function Sites() {
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const features = [
    {
      icon: Palette,
      title: 'Design Personalizado',
      description: 'Layouts únicos e modernos que refletem a identidade da sua marca e encantam seus visitantes.'
    },
    {
      icon: Smartphone,
      title: 'Responsivo',
      description: 'Perfeito em todos os dispositivos - desktop, tablet e smartphone. Experiência otimizada em qualquer tela.'
    },
    {
      icon: Search,
      title: 'SEO Otimizado',
      description: 'Estruturado para ranquear bem no Google. Mais visibilidade, mais tráfego, mais clientes.'
    },
    {
      icon: Zap,
      title: 'Alta Performance',
      description: 'Carregamento ultrarrápido que mantém seus visitantes engajados e melhora suas conversões.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Completo',
      description: 'Loja virtual com carrinho, pagamentos, gestão de produtos e integração com principais gateways.'
    },
    {
      icon: Code,
      title: 'Tecnologia Moderna',
      description: 'Desenvolvido com as melhores e mais atuais tecnologias do mercado web.'
    }
  ];

  const types = [
    {
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em capturar leads e gerar vendas',
      benefits: [
        'Design focado em conversão',
        'Formulários otimizados',
        'Integração com ferramentas de marketing',
        'Testes A/B para maximizar resultados'
      ]
    },
    {
      title: 'Sites Institucionais',
      description: 'Presença digital profissional para sua empresa',
      benefits: [
        'Apresentação completa da empresa',
        'Portfólio de produtos/serviços',
        'Blog integrado para conteúdo',
        'Formulários de contato e localização'
      ]
    },
    {
      title: 'E-commerce',
      description: 'Loja virtual completa para vender online',
      benefits: [
        'Catálogo de produtos ilimitado',
        'Carrinho e checkout otimizados',
        'Integração com meios de pagamento',
        'Painel administrativo completo'
      ]
    },
    {
      title: 'Portfólios',
      description: 'Showcase profissional do seu trabalho',
      benefits: [
        'Galeria de projetos elegante',
        'Apresentação visual impactante',
        'Depoimentos de clientes',
        'Formulário de orçamento'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Briefing',
      description: 'Entendemos sua marca, objetivos e público-alvo para criar a estratégia perfeita.'
    },
    {
      step: '2',
      title: 'Design',
      description: 'Criamos protótipos visuais para você aprovar antes de iniciar o desenvolvimento.'
    },
    {
      step: '3',
      title: 'Desenvolvimento',
      description: 'Codificamos seu site com as melhores práticas e tecnologias do mercado.'
    },
    {
      step: '4',
      title: 'Testes',
      description: 'Testamos em diversos dispositivos e navegadores para garantir qualidade.'
    },
    {
      step: '5',
      title: 'Lançamento',
      description: 'Colocamos seu site no ar e treinamos você para gerenciar o conteúdo.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Criação de Sites e E-commerce em Salvador | ER.IA - Sites Profissionais"
        description="Desenvolvimento de sites profissionais, landing pages de alta conversão e e-commerce completo em Salvador, Bahia. Design moderno, SEO otimizado e responsivo. Transforme sua presença digital."
        keywords="criação de sites Salvador, desenvolvimento web Bahia, e-commerce Salvador, landing page, site profissional, loja virtual, web design Salvador"
      />
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Sites & E-commerce
              <span className="text-blue-600 dark:text-blue-400"> Profissionais</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
              Criamos sites modernos, responsivos e otimizados que convertem visitantes em clientes.
              Do design à entrega, cuidamos de tudo para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Solicitar Orçamento</span>
              </a>
              <a
                href="#tipos"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200"
              >
                Ver Tipos de Sites
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Características dos Nossos Sites
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cada projeto é desenvolvido com atenção aos mínimos detalhes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300">
                  <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-blue-600 dark:text-blue-400" />
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
              Tipos de Sites que Desenvolvemos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções personalizadas para cada tipo de negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para entregar sites de alta qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para ter um Site Profissional?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba uma proposta personalizada para o seu projeto.
              Transforme sua presença digital!
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

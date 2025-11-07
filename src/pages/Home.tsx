import { Zap, Shield, Rocket, MessageCircle, ArrowRight, Globe, Settings, Bot, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const services = [
    {
      title: 'Sites & E-commerce',
      icon: Globe,
      description: 'Criação de sites profissionais, landing pages de alta conversão e e-commerce completo com integração de pagamentos.',
      link: '/sites',
      color: 'blue'
    },
    {
      title: 'Sistemas',
      icon: Settings,
      description: 'Desenvolvimento de sistemas personalizados, automação de processos e integração com suas ferramentas atuais.',
      link: '/sistemas',
      color: 'green'
    },
    {
      title: 'Agentes de IA',
      icon: Bot,
      description: 'Agentes inteligentes para WhatsApp que automatizam atendimento, qualificam leads e aumentam suas conversões.',
      link: '/agentes-ia',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Transforme seu Negócio
              <span className="text-blue-600"> com Tecnologia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Soluções completas em desenvolvimento web, sistemas personalizados e automação com inteligência artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Fale com Especialista</span>
              </a>
              <a
                href="#servicos"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas para levar seu negócio ao próximo nível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                orange: 'bg-orange-100 text-orange-600'
              };

              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a ER.IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diferenciais que fazem toda a diferença
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrega Rápida</h3>
              <p className="text-gray-600">
                Processos ágeis e eficientes para entregar seu projeto no prazo sem comprometer a qualidade.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança Total</h3>
              <p className="text-gray-600">
                Todas as soluções seguem as melhores práticas de segurança e proteção de dados.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Utilizamos as tecnologias mais modernas e eficientes do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Processo Transparente e Eficiente
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Do planejamento à entrega, você acompanha cada etapa do desenvolvimento do seu projeto.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Análise e Planejamento</h3>
                    <p className="text-gray-600">Entendemos suas necessidades e criamos a melhor estratégia.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Desenvolvimento</h3>
                    <p className="text-gray-600">Criamos sua solução com as melhores tecnologias do mercado.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Entrega e Suporte</h3>
                    <p className="text-gray-600">Lançamos seu projeto e oferecemos suporte contínuo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 text-center">
              <img
                src="/eria_logo.jpeg"
                alt="Ilustração"
                className="w-full h-auto rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para começar?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato e receba uma proposta personalizada para seu projeto.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Transformar seu Negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Converse com nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Começar Agora</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

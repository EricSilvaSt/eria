import { MessageCircle, Target, Eye, Heart, CheckCircle, Zap, ExternalLink, Shield } from 'lucide-react';
import SEO from '../components/SEO';

export default function Sobre() {
  const whatsappNumber = "71981526218";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const fundadores = [
    {
      nome: 'Eric Silva',
      cargo: 'CEO & CTO',
      subtitulo: 'Founder',
      descricao: 'Especialista em tecnologia, automação e ferramentas de Inteligência Artificial, lidera a direção estratégica e técnica da ER.IA.',
      link: 'https://eric.eria.tec.br',
      foto: '/eric.png'
    },
    {
      nome: 'Iago Silva',
      cargo: 'CRO',
      subtitulo: 'Founder',
      descricao: 'Especialista em crescimento e relacionamento com clientes, impulsiona a expansão da empresa.',
      link: 'https://iago.eria.tec.br',
      foto: '/iago.jpg'
    }
  ];

  const valores = [
    {
      icon: Zap,
      titulo: 'Inovação Prática',
      descricao: 'Tecnologia que resolve problemas reais do dia a dia das empresas.'
    },
    {
      icon: Heart,
      titulo: 'Personalização',
      descricao: 'Cada solução é criada sob medida para as necessidades específicas do cliente.'
    },
    {
      icon: CheckCircle,
      titulo: 'Simplicidade com Qualidade',
      descricao: 'Processos claros, eficientes e muito bem executados.'
    },
    {
      icon: Target,
      titulo: 'Parceria e Confiança',
      descricao: 'Crescemos junto com nossos clientes, lado a lado.'
    },
    {
      icon: Eye,
      titulo: 'Resultados Reais',
      descricao: 'Foco total em impacto, performance e evolução mensurável.'
    },
    {
      icon: Shield,
      titulo: 'Liberdade com Responsabilidade',
      descricao: 'Autonomia para inovar com compromisso e integridade em todas as ações.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre a ER.IA - Automatize Seu Futuro | Salvador, Bahia"
        description="Conheça a ER.IA: missão, visão e valores. Ajudamos pequenos e médios negócios a crescerem através de tecnologia, IA e automação em Salvador."
        keywords="sobre ER.IA, empresa de tecnologia Salvador, automação inteligente, missão visão valores"
      />

      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Sobre a <span className="text-blue-600 dark:text-blue-400">ER.IA</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto font-semibold">
              Automatize seu futuro
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              A ER.IA nasceu com um propósito claro: ajudar pequenos e médios negócios a crescerem através da tecnologia.
              Acreditamos que toda empresa, independentemente do tamanho, merece acesso a ferramentas inteligentes,
              automação real e experiências digitais que geram resultados concretos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/eria_logo.jpeg"
                alt="ER.IA Logo"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Quem Somos</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Com o lema <span className="font-semibold text-blue-600 dark:text-blue-400">"Automatize seu futuro"</span>,
                desenvolvemos soluções que unem inteligência artificial, design estratégico e engenharia de software.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Criamos <span className="font-semibold">Agentes de IA personalizados</span>,
                <span className="font-semibold"> sites profissionais</span>,
                <span className="font-semibold"> landing pages de alta conversão</span> e
                <span className="font-semibold"> sistemas completos sob medida</span>, sempre alinhados
                com as necessidades, a identidade e o momento de cada cliente.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nosso foco é <span className="font-semibold">simplificar processos</span>,
                <span className="font-semibold"> aumentar eficiência</span> e
                <span className="font-semibold"> transformar a operação</span> de empresas que querem
                modernizar seus serviços, automatizar atendimentos e elevar sua presença digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossa Missão</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Oferecer soluções inteligentes que automatizam processos, otimizam operações e potencializam
                o crescimento de pequenos e médios negócios por meio da Inteligência Artificial e de ferramentas
                digitais de alta performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nossa Visão</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Ser referência no Brasil em automação e soluções digitais personalizadas, contribuindo para
                que empresas de todos os setores tenham acesso à tecnologia de ponta de forma simples,
                acessível e estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Princípios que guiam cada projeto e relacionamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => {
              const IconComponent = valor.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{valor.titulo}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{valor.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Fundadores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Conheça quem está por trás da ER.IA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {fundadores.map((fundador, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-600 to-green-600 h-64 flex items-center justify-center p-8">
                  <img
                    src={fundador.foto}
                    alt={fundador.nome}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{fundador.nome}</h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{fundador.cargo}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{fundador.subtitulo}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{fundador.descricao}</p>
                  <a
                    href={fundador.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                  >
                    <span>Ver perfil completo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              O que nos Move
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Acreditamos que o futuro pertence às empresas que conseguem unir <span className="font-semibold">inteligência</span>,
              <span className="font-semibold"> automação</span> e <span className="font-semibold">presença digital</span>.
              Por isso, trabalhamos para que nossos clientes não apenas acompanhem essa transformação, mas <span className="font-semibold">liderem</span>.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Na ER.IA, cada projeto é construído com <span className="font-semibold">cuidado</span>,
              <span className="font-semibold"> estratégia</span> e <span className="font-semibold">tecnologia de ponta</span> para
              entregar mais produtividade, mais conversão, mais autoridade digital e mais tempo para que o empreendedor
              foque no que realmente importa: <span className="font-semibold text-blue-600 dark:text-blue-400">crescer</span>.
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Estamos preparados para ajudar você a automatizar seu futuro hoje.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-700 dark:to-green-700 transition-colors duration-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Entre em contato e descubra como podemos transformar seu negócio com tecnologia inteligente.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  AudioLines,
  BellRing,
  BookOpen,
  BrainCircuit,
  Check,
  CircleDollarSign,
  FileText,
  GraduationCap,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';
import SEO from '../components/SEO';
import './pitchDeck.css';

const slideLabels = [
  'Apresentação',
  'Desafio do mercado',
  'Nossa proposta',
  'ER.IA Echo',
  'Sistemas proprietários',
  'Tração e validação',
  'Arquitetura de marca',
  'Monetização',
  'Oportunidade de mercado',
  'ER.IA Teacher',
  'Planejamento',
  'Diferenciais',
  'Próximos passos',
];

const ecosystemProducts = [
  { name: 'ER.IA Hub', description: 'CRM, mensageria e automação omnichannel.', logo: '/eriahub-logo.png' },
  { name: 'GeraDoc', description: 'Propostas e contratos gerados com IA.', logo: '/geradoc-logo.png' },
  { name: 'ER.IA Sign', description: 'Assinatura eletrônica e validade jurídica.', logo: '/eriasign-logo.png' },
  { name: 'ER.IA Leads', description: 'Inteligência para prospecção B2B.', logo: '/erialeads-logo.png' },
  { name: 'Helpy', description: 'Tickets e atendimento em um só lugar.', logo: '/helpy-logo.png' },
];

const revenueStreams = [
  {
    number: '01',
    title: 'Assinatura SaaS',
    description: 'Cobrança mensal por plano e módulos ativos na Conta ER.IA.',
    icon: CircleDollarSign,
    tag: 'RECORRÊNCIA',
  },
  {
    number: '02',
    title: 'Setup & Custom Labs',
    description: 'Desenvolvimento e licenciamento inicial de sistemas sob medida.',
    icon: Layers3,
    tag: 'PROJETOS',
  },
  {
    number: '03',
    title: 'Manutenção & sustentação',
    description: 'Suporte contínuo, evolução de código e SLA para grandes contas.',
    icon: Workflow,
    tag: 'CONTINUIDADE',
  },
];

const growthPhases = [
  {
    phase: 'FASE 01',
    title: 'Maturação do ecossistema',
    description: 'Consolidar a Conta ER.IA e ampliar a eficiência entre os cinco módulos SaaS.',
  },
  {
    phase: 'FASE 02',
    title: 'Tração Go-to-Market',
    description: 'Expandir a operação comercial B2B e estruturar canais de distribuição SaaS.',
  },
  {
    phase: 'FASE 03',
    title: 'Escala de Custom Labs',
    description: 'Criar uma célula dedicada a grandes contas e novas verticais.',
  },
];

function SlideHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="pitch-heading">
      <p className="pitch-eyebrow"><span />{label}</p>
      <h2>{title}</h2>
      {description && <p className="pitch-description">{description}</p>}
    </div>
  );
}

function PitchDeck() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showStartHint, setShowStartHint] = useState(false);
  const totalSlides = slideLabels.length;

  useEffect(() => {
    document.body.classList.add('pitch-deck-active');
    return () => document.body.classList.remove('pitch-deck-active');
  }, []);

  useEffect(() => {
    if (activeSlide !== 0) return;

    const timer = window.setTimeout(() => setShowStartHint(true), 2400);
    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target instanceof HTMLElement && event.target.isContentEditable) return;

      if (['ArrowRight', 'ArrowDown', ' '].includes(event.key)) {
        event.preventDefault();
        setShowStartHint(false);
        setActiveSlide((current) => Math.min(current + 1, totalSlides - 1));
      } else if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        setShowStartHint(false);
        setActiveSlide((current) => Math.max(current - 1, 0));
      } else if (event.key === 'Home') {
        setShowStartHint(false);
        setActiveSlide(0);
      } else if (event.key === 'End') {
        setShowStartHint(false);
        setActiveSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setShowStartHint(false);
    setActiveSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  };

  return (
    <main className="pitch-deck" aria-label="Pitch deck institucional ER.IA">
      <SEO
        title="Pitch deck | ER.IA"
        description="Conheça a ER.IA: ecossistema SaaS integrado, engenharia de software sob medida e oportunidade no mercado B2B."
      />

      <header className="pitch-topbar">
        <a className="pitch-brand" href="/" aria-label="ER.IA — página inicial">
          <span className="pitch-brand-crop"><img src="/eria_logo.jpeg" alt="" /></span>
        </a>
        <div className="pitch-topbar-center">
          <span className="pitch-live-dot" />
          <span>APRESENTAÇÃO INSTITUCIONAL</span>
        </div>
        <span className="pitch-topbar-index">{String(activeSlide + 1).padStart(2, '0')} <i>/</i> {String(totalSlides).padStart(2, '0')}</span>
      </header>

      <div className="pitch-progress" aria-hidden="true">
        <span style={{ width: `${((activeSlide + 1) / totalSlides) * 100}%` }} />
      </div>

      <section
        key={activeSlide}
        className={`pitch-slide pitch-slide-${activeSlide + 1}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${activeSlide + 1} de ${totalSlides}: ${slideLabels[activeSlide]}`}
        aria-live="polite"
      >
        {activeSlide === 0 && (
          <div className="pitch-cover pitch-content">
            <div className="pitch-cover-copy">
              <p className="pitch-eyebrow"><span /> PITCH DECK INSTITUCIONAL</p>
              <h1>Inteligência que <em>transforma</em> negócios.</h1>
              <p className="pitch-cover-subtitle">Ecossistema de tecnologia, SaaS integrado e soluções sob medida.</p>
              <button className="pitch-cta" type="button" onClick={() => goToSlide(1)}>
                Conheça a ER.IA <ArrowRight size={17} />
              </button>
              {showStartHint && activeSlide === 0 && (
                <span className="pitch-start-hint">
                  <ArrowUpLeft size={23} />
                  Clique para começar
                </span>
              )}
            </div>
            <div className="pitch-cover-art" aria-hidden="true">
              <div className="pitch-cover-orbit orbit-outer" />
              <div className="pitch-cover-orbit orbit-inner" />
              <div className="pitch-cover-core"><span>ER<span>.</span>IA</span><small>INTELIGÊNCIA CONECTADA</small></div>
              <span className="pitch-orbit-node node-one"><Network size={16} /> ECOSSISTEMA</span>
              <span className="pitch-orbit-node node-two"><Sparkles size={16} /> INTELIGÊNCIA</span>
              <span className="pitch-orbit-node node-three"><Workflow size={16} /> ENGENHARIA</span>
              <span className="pitch-orbit-spark spark-one" />
              <span className="pitch-orbit-spark spark-two" />
            </div>
            <span className="pitch-cover-caption">TECNOLOGIA CONSTRUÍDA PARA AVANÇAR</span>
          </div>
        )}

        {activeSlide === 1 && (
          <div className="pitch-content pitch-market-problem">
            <SlideHeading
              label="DESAFIO DO MERCADO"
              title={<>Crescer com ferramentas desconectadas <em>custa caro.</em></>}
              description="Empresas enfrentam travas de crescimento em duas frentes fundamentais."
            />
            <div className="pitch-problem-grid">
              <article className="pitch-problem-card">
                <span className="pitch-card-index">01 / FRAGMENTAÇÃO</span>
                <div className="pitch-fragment-visual" aria-hidden="true">
                  <span><MessageSquareText /></span><span><FileText /></span><span><Workflow /></span><i />
                </div>
                <h3>Ferramentas fragmentadas</h3>
                <p>Vendas, documentos, contratos, suporte e prospecção em softwares isolados geram retrabalho e perda de dados.</p>
              </article>
              <article className="pitch-problem-card pitch-problem-card-accent">
                <span className="pitch-card-index">02 / RIGIDEZ</span>
                <div className="pitch-rigid-visual" aria-hidden="true">
                  <span /><span /><span /><span /><span />
                </div>
                <h3>Software de prateleira rígido</h3>
                <p>Sistemas engessados não acompanham processos específicos que exigem arquitetura de engenharia sob medida.</p>
              </article>
            </div>
          </div>
        )}

        {activeSlide === 2 && (
          <div className="pitch-content">
            <SlideHeading
              label="NOSSA PROPOSTA"
              title={<>Duas alavancas. <em>Uma operação mais inteligente.</em></>}
              description="Atendemos demandas padrão e projetos complexos, combinando escala e profundidade técnica."
            />
            <div className="pitch-proposal-grid">
              <article className="pitch-proposal-card">
                <span className="pitch-proposal-icon"><Network /></span>
                <p className="pitch-card-index">01 / ECOSSISTEMA SAAS</p>
                <h3>ER.IA Echo</h3>
                <p>Suíte de produtividade integrada em um só ambiente. A Conta ER.IA conecta a operação B2B com acesso único.</p>
                <div className="pitch-card-tags"><span>Conta ER.IA</span><span>SSO</span><span>Receita recorrente</span></div>
              </article>
              <article className="pitch-proposal-card pitch-proposal-card-custom">
                <span className="pitch-proposal-icon"><Sparkles /></span>
                <p className="pitch-card-index">02 / DESENVOLVIMENTO CUSTOM</p>
                <h3>Projetos &amp; Custom Labs</h3>
                <p>Engenharia de software e modelos proprietários criados para resolver desafios específicos de alta complexidade.</p>
                <div className="pitch-card-tags"><span>Nasabot</span><span>Prumo</span><span>Ágape</span></div>
              </article>
            </div>
            <div className="pitch-proposal-footer"><Check size={16} /> Do produto escalável à solução exclusiva, a tecnologia acompanha o negócio.</div>
          </div>
        )}

        {activeSlide === 3 && (
          <div className="pitch-content">
            <SlideHeading
              label="SAAS INTEGRADO"
              title={<>ER.IA Echo: soluções conectadas pela <em>Conta ER.IA.</em></>}
              description="Uma plataforma unificada para conectar as etapas da operação empresarial."
            />
            <div className="pitch-echo-map">
              <div className="pitch-echo-account">
                <span className="pitch-echo-lock"><LockKeyhole size={21} /></span>
                <div><small>IDENTIDADE ÚNICA · SSO</small><strong>Conta ER.IA</strong></div>
                <span className="pitch-echo-sync"><span /> DADOS SINCRONIZADOS</span>
              </div>
              <div className="pitch-echo-products">
                {ecosystemProducts.map(({ name, description, logo }, index) => (
                  <article className="pitch-echo-product" key={name}>
                    <span className="pitch-echo-product-index">0{index + 1}</span>
                    <span className="pitch-echo-product-logo"><img src={logo} alt={`${name} logo`} /></span>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
              <div className="pitch-echo-connector" aria-hidden="true" />
            </div>
          </div>
        )}

        {activeSlide === 4 && (
          <div className="pitch-content">
            <SlideHeading
              label="ENGENHARIA SOB MEDIDA"
              title={<>Sistemas proprietários para <em>desafios únicos.</em></>}
              description="Plataformas complexas, desenvolvidas sob encomenda para verticais exclusivas."
            />
            <div className="pitch-custom-grid">
              <article className="pitch-custom-card">
                <span className="pitch-custom-index">01</span><span className="pitch-custom-logo"><img src="/nasabot-logo.png" alt="Nasabot" /></span>
                <p>SAÚDE · SISTEMA PROPRIETÁRIO</p><h3>Nasabot</h3>
                <p className="pitch-custom-description">Avaliação pré-anestésica com triagem de risco e gestão médica de pacientes.</p>
                <span className="pitch-custom-line" />
              </article>
              <article className="pitch-custom-card">
                <span className="pitch-custom-index">02</span><span className="pitch-custom-logo"><img src="/prumo-logo.png" alt="Prumo" /></span>
                <p>OPERAÇÃO · PLATAFORMA CORPORATIVA</p><h3>Prumo</h3>
                <p className="pitch-custom-description">Plataforma desenhada exclusivamente para regras de negócio e controle operacional.</p>
                <span className="pitch-custom-line" />
              </article>
              <article className="pitch-custom-card">
                <span className="pitch-custom-index">03</span><span className="pitch-custom-logo"><img src="/agape-logo.png" alt="Ágape" /></span>
                <p>INTELIGÊNCIA · BY ER.IA</p><h3>Ágape</h3>
                <p className="pitch-custom-description">Inteligência e automação customizadas com endosso ER.IA para nichos específicos.</p>
                <span className="pitch-custom-line" />
              </article>
            </div>
          </div>
        )}

        {activeSlide === 5 && (
          <div className="pitch-content pitch-traction">
            <div className="pitch-traction-intro">
              <SlideHeading
                label="TRAÇÃO & VALIDAÇÃO"
                title={<>Construído, testado e validado no <em>mundo real.</em></>}
                description="Validação técnica e comercial na prática B2B."
              />
              <div className="pitch-traction-seal"><span><ShieldCheck size={34} /></span><small>TECNOLOGIA<br />EM OPERAÇÃO</small></div>
            </div>
            <div className="pitch-traction-grid">
              <article><span className="pitch-traction-number">01</span><h3>Módulos reais operando</h3><p>Ferramentas do ecossistema processando requisições e interações em clientes ativos.</p><span className="pitch-traction-status"><i /> EM AMBIENTES REAIS</span></article>
              <article><span className="pitch-traction-number">02</span><h3>Aprovação por lideranças</h3><p>Apresentado e validado diretamente por empreendedores experientes do ecossistema.</p><span className="pitch-traction-status"><i /> VALIDAÇÃO B2B</span></article>
              <article className="pitch-traction-revenue"><span className="pitch-traction-number">03</span><h3>Duas fontes de caixa</h3><p>Receita recorrente de SaaS combinada a projetos customizados de alta margem.</p><div className="pitch-revenue-duo"><span>SAAS</span><b>+</b><span>CUSTOM</span></div></article>
            </div>
          </div>
        )}

        {activeSlide === 6 && (
          <div className="pitch-content">
            <SlideHeading
              label="ARQUITETURA DE MARCA"
              title={<>Uma holding. <em>Várias formas de inovar.</em></>}
              description="Posicionamento claro para preservar a autoridade corporativa e dar autonomia aos produtos."
            />
            <div className="pitch-brand-architecture">
              <div className="pitch-brand-level pitch-brand-holding">
                <span className="pitch-brand-level-icon"><Network /></span>
                <div><small>MARCA MÃE &amp; HOLDING TECNOLÓGICA</small><strong>ER.IA</strong><p>Governança, autoridade em IA e engenharia corporativa.</p></div>
                <span className="pitch-brand-level-tag">ESTRATÉGIA</span>
              </div>
              <div className="pitch-brand-branch" aria-hidden="true"><i /><i /><i /></div>
              <div className="pitch-brand-level pitch-brand-echo">
                <span className="pitch-brand-level-icon"><Layers3 /></span>
                <div><small>ECOSSISTEMA SAAS DE PRODUTIVIDADE</small><strong>ER.IA Echo <em>by ER.IA</em></strong><p>Produtos comerciais conectados, com o padrão de qualidade ER.IA.</p></div>
                <span className="pitch-brand-level-tag">ECOSSISTEMA</span>
              </div>
              <div className="pitch-brand-level pitch-brand-projects">
                <span className="pitch-brand-level-icon"><Sparkles /></span>
                <div><small>MARCAS AUTÔNOMAS &amp; ENTERPRISE</small><strong>Projetos exclusivos</strong><p>Marcas como Nasabot operam com identidade própria para atender verticais específicas.</p></div>
                <span className="pitch-brand-level-tag">CUSTOM LABS</span>
              </div>
            </div>
          </div>
        )}

        {activeSlide === 7 && (
          <div className="pitch-content">
            <SlideHeading
              label="MONETIZAÇÃO"
              title={<>Receita diversificada para crescer com <em>consistência.</em></>}
              description="Uma estrutura financeira equilibrada entre recorrência, implantação e evolução contínua."
            />
            <div className="pitch-revenue-grid">
              {revenueStreams.map(({ number, title, description, icon: Icon, tag }) => (
                <article key={number} className="pitch-revenue-card">
                  <div className="pitch-revenue-card-top"><span>{number}</span><Icon size={22} /></div>
                  <p>{tag}</p><h3>{title}</h3><span className="pitch-revenue-divider" /><p className="pitch-revenue-description">{description}</p>
                  <div className="pitch-revenue-track"><i style={{ width: `${100 - (Number(number) - 1) * 16}%` }} /></div>
                </article>
              ))}
            </div>
            <p className="pitch-revenue-note"><CircleDollarSign size={17} /> Modelos complementares para sustentar crescimento e relacionamento de longo prazo.</p>
          </div>
        )}

        {activeSlide === 8 && (
          <div className="pitch-content pitch-opportunity">
            <div className="pitch-opportunity-copy">
              <SlideHeading
                label="OPORTUNIDADE"
                title={<>Tecnologia B2B: um mercado amplo e em <em>transformação.</em></>}
                description="Oportunidade de expansão no ecossistema corporativo brasileiro."
              />
              <div className="pitch-opportunity-note"><Target size={18} /><span>Foco em software de gestão, CRM, automação e inteligência artificial.</span></div>
            </div>
            <div className="pitch-market-sizing">
              <article className="pitch-market-tam"><div><span>TAM</span><small>MERCADO TOTAL</small></div><strong>R$ 25B<span>+</span></strong><p>Gasto anual em software de gestão, CRM e inteligência artificial no Brasil.</p><i /></article>
              <article className="pitch-market-sam"><div><span>SAM</span><small>ENDEREÇÁVEL</small></div><strong>R$ 3,5B</strong><p>PMEs e empresas B2B buscando automação de documentos, conversas e vendas.</p><i /></article>
              <article className="pitch-market-som"><div><span>SOM</span><small>META EM 3 ANOS</small></div><strong>R$ 15M</strong><p>Participação pretendida com a suíte ER.IA Echo e projetos sob medida.</p><i /></article>
            </div>
          </div>
        )}

        {activeSlide === 9 && (
          <div className="pitch-content pitch-teacher">
            <div className="pitch-teacher-intro">
              <div>
                <SlideHeading
                  label="TECNOLOGIA COM IMPACTO SOCIAL"
                  title={<>Aprender inglês pode abrir <em>novos caminhos.</em></>}
                  description="Um projeto futuro da ER.IA para levar ensino de inglês a crianças de periferias e comunidades e a adultos em situação de vulnerabilidade."
                />
              </div>
              <div className="pitch-teacher-brand">
                <span className="pitch-teacher-mark"><GraduationCap size={34} /></span>
                <strong>ER.IA <em>Teacher</em></strong>
                <small>INGLÊS PARA NOVOS CAMINHOS</small>
              </div>
            </div>
            <div className="pitch-teacher-flow">
              <div className="pitch-teacher-channels">
                <span className="pitch-teacher-flow-label">UMA JORNADA, MAIS DE UM CANAL</span>
                <article><span><BookOpen size={21} /></span><div><strong>Plataforma web</strong><small>Provas, testes e progresso</small></div></article>
                <article><span><AudioLines size={21} /></span><div><strong>WhatsApp</strong><small>Conversas por áudio e texto</small></div></article>
              </div>
              <div className="pitch-teacher-pillar-grid">
                <article><BookOpen size={20} /><span>01 / MÉTODO</span><h3>Método validado</h3><p>Ensino estruturado em métodos que já demonstraram seu valor na prática.</p></article>
                <article><MessageSquareText size={20} /><span>02 / INTERAÇÃO</span><h3>Interação omnichannel</h3><p>Web, áudio e texto conectam aulas, exercícios e conversas com os alunos.</p></article>
                <article><BellRing size={20} /><span>03 / ACOMPANHAMENTO</span><h3>Mentoria persistente</h3><p>Lembretes e incentivo ativo ajudam cada aluno a manter o ritmo e seguir aprendendo.</p></article>
                <article><BrainCircuit size={20} /><span>04 / ADAPTAÇÃO</span><h3>Aprendizagem adaptativa</h3><p>O ensino evolui conforme o sistema aprende sobre o progresso e o perfil de cada aluno.</p></article>
              </div>
            </div>
            <p className="pitch-teacher-footnote"><Sparkles size={15} /> Tecnologia para ampliar o acesso e apoiar a jornada de cada estudante.</p>
          </div>
        )}

        {activeSlide === 10 && (
          <div className="pitch-content">
            <SlideHeading
              label="PLANEJAMENTO"
              title={<>Crescimento em três movimentos <em>contínuos.</em></>}
              description="Fases estruturadas para consolidar o produto, acelerar a distribuição e ampliar a capacidade de entrega."
            />
            <div className="pitch-roadmap">
              <div className="pitch-roadmap-line" aria-hidden="true"><span /><span /><span /></div>
              {growthPhases.map(({ phase, title, description }, index) => (
                <article key={phase} className={`pitch-roadmap-phase phase-${index + 1}`}>
                  <span className="pitch-roadmap-dot">{String(index + 1).padStart(2, '0')}</span>
                  <p>{phase}</p><h3>{title}</h3><span className="pitch-roadmap-marker"><ArrowDown size={16} /></span>
                  <p className="pitch-roadmap-description">{description}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeSlide === 11 && (
          <div className="pitch-content pitch-differentiators">
            <div className="pitch-differentiator-intro">
              <SlideHeading
                label="DIFERENCIAIS"
                title={<>Não é só software. É capacidade de <em>evoluir junto.</em></>}
                description="Arquitetura conectada e flexibilidade para resolver o que importa."
              />
            </div>
            <div className="pitch-differentiator-list">
              <article><span>01</span><div><h3>Conta única</h3><p>Leads, CRM, documentos, contratos e atendimento conectados em um só login.</p></div><LockKeyhole /></article>
              <article><span>02</span><div><h3>Flexibilidade de entrega</h3><p>Demandas prontas em SaaS ou código criado do zero, sob medida.</p></div><Layers3 /></article>
              <article><span>03</span><div><h3>Foco em eficiência</h3><p>Menos tempo em tarefas operacionais B2B. Mais espaço para o negócio avançar.</p></div><Rocket /></article>
            </div>
          </div>
        )}

        {activeSlide === 12 && (
          <div className="pitch-finale pitch-content">
            <div className="pitch-finale-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="pitch-finale-copy">
              <p className="pitch-eyebrow"><span /> PRÓXIMOS PASSOS</p>
              <h2>O futuro dos negócios se constrói <em>em conjunto.</em></h2>
              <p>ER.IA — avançando na consolidação de tecnologia, tração B2B e expansão do ecossistema.</p>
              <a className="pitch-cta" href="mailto:contato@eria.tec.br">
                Vamos conversar <ArrowUpRight size={17} />
              </a>
              <a className="pitch-contact" href="mailto:contato@eria.tec.br">contato@eria.tec.br</a>
            </div>
            <div className="pitch-finale-footer"><span className="pitch-brand-crop"><img src="/eria_logo.jpeg" alt="ER.IA" /></span><button type="button" onClick={() => goToSlide(0)}>REVER APRESENTAÇÃO <ArrowLeft size={14} /></button></div>
          </div>
        )}
      </section>

      <footer className="pitch-controls">
        <button className="pitch-control-button pitch-previous" type="button" onClick={() => goToSlide(activeSlide - 1)} disabled={activeSlide === 0} aria-label="Slide anterior">
          <ArrowLeft size={17} /><span>ANTERIOR</span>
        </button>
        <nav className="pitch-slide-nav" aria-label="Navegar pelos slides">
          {slideLabels.map((label, index) => (
            <button
              className={index === activeSlide ? 'pitch-slide-dot active' : 'pitch-slide-dot'}
              key={label}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}: ${label}`}
              aria-current={index === activeSlide ? 'step' : undefined}
            />
          ))}
        </nav>
        <div className="pitch-control-right">
          <span className="pitch-key-hint">USE AS SETAS DO TECLADO</span>
          <button className="pitch-control-button pitch-next" type="button" onClick={() => goToSlide(activeSlide + 1)} disabled={activeSlide === totalSlides - 1} aria-label="Próximo slide">
            <span>PRÓXIMO</span><ArrowRight size={17} />
          </button>
        </div>
      </footer>
    </main>
  );
}

export default PitchDeck;

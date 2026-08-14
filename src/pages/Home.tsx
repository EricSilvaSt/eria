import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  FileSignature,
  FileText,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  PanelsTopLeft,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const products = [
  {
    name: 'ER.IA Hub',
    label: 'ATENDIMENTO E VENDAS',
    description: 'WhatsApp, IA, CRM, agenda e follow-up trabalhando como uma única operação comercial.',
    icon: LayoutDashboard,
    href: 'https://hub.eria.tec.br',
    status: 'Disponível',
    live: true,
  },
  {
    name: 'ER.IA Sign',
    label: 'ASSINATURAS DIGITAIS',
    description: 'Documentos enviados, acompanhados e assinados com simplicidade e segurança.',
    icon: FileSignature,
    href: '/ecossistema#eria-sign',
    status: 'Em desenvolvimento',
  },
  {
    name: 'GeraDoc',
    label: 'DOCUMENTOS INTELIGENTES',
    description: 'Orçamentos, contratos e documentos criados a partir da necessidade real do usuário.',
    icon: FileText,
    href: '/ecossistema#geradoc',
    status: 'Em desenvolvimento',
  },
  {
    name: 'Helpy',
    label: 'SUPORTE ORGANIZADO',
    description: 'Tickets, prioridades, equipes e histórico para uma operação de suporte completa.',
    icon: Headphones,
    href: '/ecossistema#helpy',
    status: 'Em desenvolvimento',
  },
  {
    name: 'ER.IA Flow',
    label: 'TRABALHO EM MOVIMENTO',
    description: 'Projetos, tarefas e subtarefas conectados ao que sua empresa precisa entregar.',
    icon: Workflow,
    href: '/ecossistema#eria-flow',
    status: 'Em desenvolvimento',
  },
] as const;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ER.IA Tecnologia',
  url: 'https://eria.tec.br',
  logo: 'https://eria.tec.br/eria_logo.jpeg',
  description: 'Ecossistema de produtos digitais, inteligência artificial e software sob medida.',
  address: { '@type': 'PostalAddress', addressLocality: 'Salvador', addressRegion: 'BA', addressCountry: 'BR' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+55-71-98152-6218', contactType: 'sales', availableLanguage: 'Portuguese' },
};

export default function Home() {
  return (
    <main>
      <SEO
        title="ER.IA | Tecnologia conectada para negócios que querem crescer"
        description="Conheça o ecossistema ER.IA: atendimento com IA, CRM, documentos, assinaturas, suporte e gestão de tarefas em produtos que trabalham juntos."
        keywords="ER.IA, ER.IA Hub, inteligência artificial, CRM WhatsApp, assinatura digital, documentos, gestão de tarefas, Salvador"
        schema={organizationSchema}
      />

      <section className="hero-section">
        <div className="node-field" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
        </div>
        <div className="site-shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> TECNOLOGIA QUE ECOA POR TODA A OPERAÇÃO</p>
            <h1>Menos ferramentas soltas. <em>Mais negócio acontecendo.</em></h1>
            <p className="hero-description">
              A ER.IA conecta atendimento, vendas, documentos, execução e suporte em produtos
              inteligentes que compartilham contexto e devolvem tempo para sua empresa crescer.
            </p>
            <div className="hero-actions">
              <a href="https://hub.eria.tec.br" className="button button-primary">
                Conhecer o ER.IA Hub <ArrowUpRight size={18} />
              </a>
              <Link to="/ecossistema" className="text-link">
                Explorar o ecossistema <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-proof">
              <span><Check size={14} /> 7 dias para testar o Hub</span>
              <span><Check size={14} /> Implantação orientada</span>
              <span><Check size={14} /> Feito no Brasil</span>
            </div>
          </div>

          <div className="operation-map reveal delay-1" aria-label="Fluxo integrado do ecossistema ER.IA">
            <div className="map-orbit orbit-one" />
            <div className="map-orbit orbit-two" />
            <div className="map-core">
              <img src="/eria.png" alt="Símbolo ER.IA" />
              <span>CONTA ER.IA</span>
              <strong>Um acesso.<br />Todo o contexto.</strong>
            </div>
            <div className="map-node node-chat"><MessageCircle /><span>Atender</span></div>
            <div className="map-node node-doc"><FileText /><span>Documentar</span></div>
            <div className="map-node node-flow"><Workflow /><span>Executar</span></div>
            <div className="map-node node-support"><Headphones /><span>Suportar</span></div>
          </div>
        </div>
      </section>

      <section className="manifest-section">
        <div className="site-shell manifest-grid">
          <div>
            <h2>Seu cliente não enxerga departamentos. Ele enxerga uma empresa.</h2>
            <p>Por isso, seus sistemas também precisam conversar. Uma informação capturada no atendimento pode virar proposta, contrato, tarefa e suporte sem começar tudo de novo.</p>
          </div>
          <div className="manifest-stats">
            <div><strong>1</strong><span>Conta ER.IA</span></div>
            <div><strong>5</strong><span>Produtos conectáveis</span></div>
            <div><strong>∞</strong><span>Contexto reaproveitado</span></div>
          </div>
        </div>
      </section>

      <section className="products-section" id="produtos">
        <div className="site-shell">
          <div className="section-heading">
            <div><p className="eyebrow">PRODUTOS</p><h2>Um ecossistema que cresce com você.</h2></div>
            <p>Comece pelo problema mais urgente. Conecte os outros produtos quando fizer sentido.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => {
              const Icon = product.icon;
              const content = (
                <>
                  <div className="product-top"><span className={product.live ? 'status live' : 'status'}>{product.status}</span></div>
                  <Icon className="product-icon" />
                  <p className="product-label">{product.label}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span className="product-link">{product.live ? 'Acessar produto' : 'Ver visão do produto'} <ArrowUpRight size={16} /></span>
                </>
              );
              return product.href.startsWith('http') ?
                <a className="product-card" href={product.href} key={product.name}>{content}</a> :
                <Link className="product-card" to={product.href} key={product.name}>{content}</Link>;
            })}
          </div>
        </div>
      </section>

      <section className="hub-feature">
        <div className="site-shell hub-feature-grid">
          <div className="hub-panel">
            <div className="hub-panel-head"><span>ER.IA HUB / AO VIVO</span><span className="pulse" /></div>
            <div className="hub-conversation">
              <div className="bubble client">Olá! Vocês têm horário amanhã?</div>
              <div className="typing"><i /><i /><i /></div>
              <div className="bubble agent">Tenho às 10h ou às 15h. Qual funciona melhor para você?</div>
            </div>
            <div className="hub-panel-foot"><Bot size={16} /> IA treinada com as informações da empresa</div>
          </div>
          <div className="hub-copy">
            <p className="eyebrow light">PRIMEIRO PRODUTO DISPONÍVEL</p>
            <h2>Seu WhatsApp trabalhando mesmo quando você não está.</h2>
            <p>Atendimento humanizado, CRM, agenda e follow-up em uma operação que aprende o contexto da empresa e transforma conversa em oportunidade.</p>
            <ul>
              <li><Check /> IA configurada para cada empresa</li>
              <li><Check /> Conversas e leads em tempo real</li>
              <li><Check /> Agendamento direto pelo WhatsApp</li>
              <li><Check /> Gestão comercial em um só lugar</li>
            </ul>
            <a href="https://hub.eria.tec.br" className="button button-light">Testar por 7 dias <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="site-shell">
          <div className="section-heading">
            <div><p className="eyebrow">SOLUÇÕES SOB MEDIDA</p><h2>Quando o produto pronto não basta.</h2></div>
            <p>A ER.IA também desenha tecnologia específica para processos e oportunidades únicas.</p>
          </div>
          <div className="service-list">
            <Link to="/sites"><PanelsTopLeft /><div><strong>Sites e e-commerce</strong><p>Presença digital que comunica, convence e converte.</p></div><ArrowUpRight /></Link>
            <Link to="/sistemas"><Workflow /><div><strong>Sistemas personalizados</strong><p>Software moldado ao fluxo real da operação.</p></div><ArrowUpRight /></Link>
            <Link to="/agentes-ia"><Bot /><div><strong>Agentes de IA</strong><p>Automação com contexto, regras e objetivos claros.</p></div><ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="site-shell final-cta-inner">
          <p className="eyebrow light">VAMOS CONECTAR OS PONTOS?</p>
          <h2>Mostre o gargalo.<br /><em>A gente desenha o próximo movimento.</em></h2>
          <div>
            <a href="https://wa.me/5571981526218" target="_blank" rel="noreferrer" className="button button-light"><MessageCircle size={18} /> Conversar no WhatsApp</a>
            <Link to="/ecossistema" className="text-link light">Conhecer os produtos <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

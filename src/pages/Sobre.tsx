import { ArrowUpRight, Eye, Heart, Target, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const principles = [
  { icon: Target, title: 'Problema antes da ferramenta', text: 'A tecnologia precisa servir à estratégia e à rotina, nunca o contrário.' },
  { icon: Eye, title: 'Clareza radical', text: 'Promessas, limites, decisões e resultados precisam ser compreensíveis.' },
  { icon: Heart, title: 'Cuidado com a experiência', text: 'Software também é relacionamento: deve acolher, orientar e dar confiança.' },
  { icon: Zap, title: 'Evolução prática', text: 'Inovação só importa quando melhora algo real para alguém.' },
];

export default function Sobre() {
  return (
    <main className="about-page">
      <SEO title="Sobre a ER.IA | Tecnologia conectada e feita no Brasil" description="Conheça a ER.IA, empresa de tecnologia de Salvador que desenvolve produtos digitais, inteligência artificial e sistemas sob medida." />
      <section className="inner-hero"><div className="site-shell"><p className="eyebrow"><span /> SOBRE A ER.IA</p><h1>Automatizar o futuro.<br /><em>Sem desumanizar o presente.</em></h1><p>Nascemos em Salvador com uma convicção: pequenas e médias empresas também merecem tecnologia bem pensada, bonita, segura e capaz de gerar resultado concreto.</p></div></section>
      <section className="about-story site-shell"><p className="section-number">NOSSA DIREÇÃO</p><div><h2>Construímos pontes entre o que a empresa faz hoje e o que ela pode se tornar.</h2><p>A ER.IA combina inteligência artificial, design e engenharia de software para reduzir atrito, conectar informações e devolver foco para as pessoas. Criamos produtos próprios e soluções sob medida, sempre começando pela realidade do negócio.</p></div></section>
      <section className="principles-section"><div className="site-shell"><div className="section-heading"><div><p className="eyebrow">PRINCÍPIOS</p><h2>O jeito ER.IA de construir.</h2></div></div><div className="principles-grid">{principles.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="founders-section site-shell"><div className="section-heading"><div><p className="eyebrow">FUNDADORES</p><h2>Estratégia, tecnologia e relacionamento.</h2></div></div><div className="founders-grid"><article><img src="/eric.png" alt="Eric Silva" /><div><p>CEO & CTO</p><h3>Eric Silva</h3><span>Direção estratégica, tecnologia, automação e inteligência artificial.</span><a href="https://eric.eria.tec.br">Conhecer perfil <ArrowUpRight size={15} /></a></div></article><article><img src="/iago.jpg" alt="Iago Silva" /><div><p>CRO</p><h3>Iago Silva</h3><span>Crescimento, relacionamento com clientes e desenvolvimento comercial.</span><a href="https://iago.eria.tec.br">Conhecer perfil <ArrowUpRight size={15} /></a></div></article></div></section>
    </main>
  );
}

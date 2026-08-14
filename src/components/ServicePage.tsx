import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

interface ServicePageProps {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  icon: LucideIcon;
  formPath: string;
  seoTitle: string;
  seoDescription: string;
  outcomes: string[];
  capabilities: Array<{ title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
}

export default function ServicePage({
  eyebrow,
  title,
  highlightedTitle,
  description,
  icon: Icon,
  formPath,
  seoTitle,
  seoDescription,
  outcomes,
  capabilities,
  process,
}: ServicePageProps) {
  return (
    <main className="service-page">
      <SEO title={seoTitle} description={seoDescription} />
      <section className="inner-hero service-hero">
        <div className="site-shell service-hero-grid">
          <div>
            <p className="eyebrow"><span /> {eyebrow}</p>
            <h1>{title}<br /><em>{highlightedTitle}</em></h1>
            <p>{description}</p>
            <div className="hero-actions">
              <Link to={formPath} className="button button-primary">Solicitar diagnóstico <ArrowRight size={17} /></Link>
              <a className="text-link" href="https://wa.me/5571981526218" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Conversar primeiro</a>
            </div>
          </div>
          <div className="service-symbol"><Icon /><span>{eyebrow}</span></div>
        </div>
      </section>

      <section className="service-outcomes">
        <div className="site-shell outcomes-grid">
          <p className="section-number">O QUE MUDA</p>
          {outcomes.map((outcome) => <span key={outcome}><Check /> {outcome}</span>)}
        </div>
      </section>

      <section className="capabilities-section site-shell">
        <div className="section-heading"><div><p className="eyebrow">ENTREGA</p><h2>Tecnologia com intenção.</h2></div><p>Cada decisão precisa responder a uma necessidade do negócio, não apenas preencher uma lista de funcionalidades.</p></div>
        <div className="capabilities-grid">
          {capabilities.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
        </div>
      </section>

      <section className="process-section">
        <div className="site-shell">
          <p className="eyebrow light">COMO TRABALHAMOS</p>
          <h2>Clareza antes do código.</h2>
          <div className="process-grid">
            {process.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
          <Link to={formPath} className="button button-light">Começar meu projeto <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}

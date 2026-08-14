import { ArrowRight, ArrowUpRight, Check, FileSignature, FileText, Headphones, LayoutDashboard, Workflow } from 'lucide-react';
import SEO from '../components/SEO';

const apps = [
  { id: 'eria-hub', name: 'ER.IA Hub', eyebrow: 'ATENDIMENTO E VENDAS', icon: LayoutDashboard, status: 'Disponível', description: 'Atendimento inteligente pelo WhatsApp, CRM, agenda, follow-up e gestão comercial em uma única operação.', allowance: '7 dias gratuitos', href: 'https://hub.eria.tec.br' },
  { id: 'eria-sign', name: 'ER.IA Sign', eyebrow: 'ASSINATURAS DIGITAIS', icon: FileSignature, status: 'Em desenvolvimento', description: 'Envio, acompanhamento e assinatura de documentos com uma experiência simples para empresas e clientes.', allowance: '2 documentos/mês no plano gratuito' },
  { id: 'geradoc', name: 'GeraDoc by ER.IA', eyebrow: 'DOCUMENTOS INTELIGENTES', icon: FileText, status: 'Em desenvolvimento', description: 'Orçamentos, contratos e documentos gerados a partir da necessidade do usuário e dos dados já reunidos.', allowance: '3 documentos/mês no plano gratuito' },
  { id: 'helpy', name: 'Helpy by ER.IA', eyebrow: 'GESTÃO DE SUPORTE', icon: Headphones, status: 'Em desenvolvimento', description: 'Chamados, filas, prioridades, equipes e histórico para transformar suporte em uma operação previsível.', allowance: '15 dias gratuitos' },
  { id: 'eria-flow', name: 'ER.IA Flow', eyebrow: 'GESTÃO DO TRABALHO', icon: Workflow, status: 'Em desenvolvimento', description: 'Projetos, tarefas e subtarefas organizados para que a equipe saiba o que fazer e o cliente acompanhe a entrega.', allowance: 'Modelo gratuito em definição' },
] as const;

export default function Ecossistema() {
  return (
    <main className="ecosystem-page">
      <SEO title="Ecossistema ER.IA | Uma conta, produtos que trabalham juntos" description="Conheça ER.IA Hub, Sign, GeraDoc, Helpy e Flow: produtos conectados por uma identidade única e assinaturas independentes." />
      <section className="inner-hero">
        <div className="site-shell">
          <p className="eyebrow"><span /> ER.IA ECHO</p>
          <h1>Uma conta.<br /><em>Vários movimentos.</em></h1>
          <p>A Conta ER.IA foi pensada para levar identidade, empresa e contexto de um produto para outro, enquanto cada aplicativo mantém seu próprio plano, limite e assinatura.</p>
        </div>
      </section>
      <section className="account-band">
        <div className="site-shell account-band-grid">
          <div><span className="account-mark"><img src="/eria.png" alt="" /></span><strong>Conta ER.IA</strong></div>
          <p>Um cadastro para acessar todo o ecossistema.</p>
          <span><Check /> Identidade compartilhada</span><span><Check /> Limites independentes</span><span><Check /> Contexto conectado</span>
        </div>
      </section>
      <section className="ecosystem-list site-shell">
        {apps.map((app, index) => {
          const Icon = app.icon;
          return (
            <article id={app.id} className="ecosystem-row" key={app.name}>
              <div className="ecosystem-index">0{index + 1}</div>
              <div className="ecosystem-icon"><Icon /></div>
              <div className="ecosystem-copy"><p>{app.eyebrow}</p><h2>{app.name}</h2><span className={app.status === 'Disponível' ? 'status live' : 'status'}>{app.status}</span></div>
              <div className="ecosystem-detail"><p>{app.description}</p><strong>{app.allowance}</strong>{'href' in app && app.href ? <a href={app.href}>Acessar agora <ArrowUpRight size={16} /></a> : <span>Novidades em breve <ArrowRight size={16} /></span>}</div>
            </article>
          );
        })}
      </section>
      <section className="ecosystem-journey">
        <div className="site-shell"><p className="eyebrow light">A VISÃO COMPLETA</p><h2>Atender → propor → assinar → executar → apoiar.</h2><p>É assim que os produtos ER.IA vão transformar informações isoladas em uma jornada contínua.</p></div>
      </section>
    </main>
  );
}

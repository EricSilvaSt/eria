import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <main className="inner-hero">
      <SEO title="Página não encontrada | ER.IA" description="A página solicitada não foi encontrada." noIndex />
      <div className="site-shell">
        <p className="eyebrow"><span /> ERRO 404</p>
        <h1>Este ponto ainda<br /><em>não está conectado.</em></h1>
        <p>O endereço pode ter mudado ou não existir. Volte à página inicial para continuar explorando a ER.IA.</p>
        <Link to="/" className="button button-primary"><ArrowLeft size={17} /> Voltar ao início</Link>
      </div>
    </main>
  );
}

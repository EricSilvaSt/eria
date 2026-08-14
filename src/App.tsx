import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import CookieSettings from './components/CookieSettings';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Sites from './pages/Sites';
import Sistemas from './pages/Sistemas';
import AgentesIA from './pages/AgentesIA';
import CookiePolicy from './pages/CookiePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FormAgentesIA from './pages/FormAgentesIA';
import FormSites from './pages/FormSites';
import FormSistemas from './pages/FormSistemas';
import FormEcommerce from './pages/FormEcommerce';
import Ecossistema from './pages/Ecossistema';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CookieConsentProvider>
          <ScrollToTop />
          <div className="min-h-screen">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/ecossistema" element={<Ecossistema />} />
              <Route path="/sites" element={<Sites />} />
              <Route path="/sistemas" element={<Sistemas />} />
              <Route path="/agentes-ia" element={<AgentesIA />} />
              <Route path="/politica-cookies" element={<CookiePolicy />} />
              <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
              <Route path="/form-agentes-ia" element={<FormAgentesIA />} />
              <Route path="/form-sites-e-lp" element={<FormSites />} />
              <Route path="/form-sistemas-personalizados" element={<FormSistemas />} />
              <Route path="/form-ecommerces" element={<FormEcommerce />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <CookieBanner />
            <CookieSettings />
          </div>
        </CookieConsentProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

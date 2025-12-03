import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <CookieConsentProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/sistemas" element={<Sistemas />} />
            <Route path="/agentes-ia" element={<AgentesIA />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/form-agentes-ia" element={<FormAgentesIA />} />
            <Route path="/form-sites-e-lp" element={<FormSites />} />
          </Routes>
          <Footer />
          <CookieBanner />
          <CookieSettings />
        </div>
      </CookieConsentProvider>
    </Router>
  );
}

export default App;
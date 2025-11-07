import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookieConsentProvider } from './contexts/CookieConsentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import CookieSettings from './components/CookieSettings';
import Home from './pages/Home';
import Sites from './pages/Sites';
import Sistemas from './pages/Sistemas';
import AgentesIA from './pages/AgentesIA';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <Router>
      <CookieConsentProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/sistemas" element={<Sistemas />} />
            <Route path="/agentes-ia" element={<AgentesIA />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
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
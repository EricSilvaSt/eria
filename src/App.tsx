import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sites from './pages/Sites';
import Sistemas from './pages/Sistemas';
import AgentesIA from './pages/AgentesIA';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/sistemas" element={<Sistemas />} />
          <Route path="/agentes-ia" element={<AgentesIA />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
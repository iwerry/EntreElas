import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingPetals } from './components/FloatingPetals';

// Importing Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Reports from './pages/Reports';
import Voices from './pages/Voices';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Direitos from './pages/Direitos';
import Contato from './pages/Contato';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/30 selection:text-primary font-body overflow-x-hidden antialiased">
      <FloatingPetals variant="global" className="fixed inset-0 z-0 pointer-events-none" />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
          {currentPage === 'courses' && <Courses setCurrentPage={setCurrentPage} />}
          {currentPage === 'reportagens' && <Reports setCurrentPage={setCurrentPage} />}
          {currentPage === 'vozes' && <Voices setCurrentPage={setCurrentPage} />}
          {currentPage === 'galeria' && <Gallery setCurrentPage={setCurrentPage} />}
          {currentPage === 'sobre' && <About setCurrentPage={setCurrentPage} />}
          {currentPage === 'direitos' && <Direitos setCurrentPage={setCurrentPage} />}
          {currentPage === 'contato' && <Contato setCurrentPage={setCurrentPage} />}
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;

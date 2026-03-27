import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, Footer } from './components/Navigation';

// Importing Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Reports from './pages/Reports';
import Voices from './pages/Voices';
import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/30 selection:text-primary font-body overflow-x-hidden antialiased">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <Home key="home" setCurrentPage={setCurrentPage} />}
          {currentPage === 'courses' && <Courses key="courses" setCurrentPage={setCurrentPage} />}
          {currentPage === 'reportagens' && <Reports key="reports" setCurrentPage={setCurrentPage} />}
          {currentPage === 'vozes' && <Voices key="voices" setCurrentPage={setCurrentPage} />}
          {currentPage === 'galeria' && <Gallery key="gallery" setCurrentPage={setCurrentPage} />}
          {currentPage === 'sobre' && <About key="sobre" setCurrentPage={setCurrentPage} />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;

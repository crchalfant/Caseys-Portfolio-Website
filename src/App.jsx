import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import AI from './components/AI';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#3b82f6] focus:text-white focus:rounded-md focus:text-sm">
        Skip to main content
      </a>
      <div className="flex flex-col min-h-screen">
      <Nav />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/products" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

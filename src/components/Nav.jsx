import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';

const navLinks = [
  { label: "About Me", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "AI", path: "/ai" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-lg shadow-black/20 bg-[rgba(15,17,23,0.95)] border-b border-[#2a2d37]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm font-semibold text-[#3b82f6] transition-colors">
          {content.nav.name}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm rounded-md transition-all ${
                location.pathname === link.path
                  ? 'text-blue-400 bg-blue-400/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white rounded-md hover:bg-white/5 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-1 bg-[rgba(26,29,39,0.98)] border-t border-[#2a2d37]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 text-sm rounded-md transition-all ${
                location.pathname === link.path
                  ? 'text-blue-400 bg-blue-400/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

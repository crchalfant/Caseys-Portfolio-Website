import { Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-[#2a2d37]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold text-sm">Casey Chalfant</p>
          <p className="text-xs text-[#9ca3af]">Product Leader</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="footer-icon"
            aria-label="Contact Casey Chalfant"
          >
            <Mail size={20} />
          </Link>
          <a
            href="https://www.linkedin.com/in/casey-chalfant/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Visit Casey Chalfant's LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/crchalfant"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Visit Casey Chalfant's GitHub profile"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

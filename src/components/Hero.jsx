import { Link } from 'react-router-dom';
import { Briefcase, Wrench, Bot, Linkedin, Mail, Github } from 'lucide-react';
import { content } from '../data/content';
import LoadingImage from './LoadingImage';
import PageMeta from './PageMeta';

const iconMap = { Briefcase, Wrench, Bot };

export default function Hero() {
  const { hero, about } = content;

  return (
    <div>
      <PageMeta />
      {/* Hero banner */}
      <section className="relative pt-16 pb-6 px-6 text-center overflow-hidden bg-gradient-to-b from-[#1a1d27] to-[#0f1117]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Headshot */}
          <div className="w-48 h-48 md:w-[250px] md:h-[250px] rounded-full overflow-hidden border-4 border-[#2a2d37] mx-auto mb-5 shadow-[0_0_30px_rgba(59,130,246,0.12)] animate-fade-up">
            <LoadingImage
              src="/headshot.jpg"
              alt="Casey Chalfant - Senior Product Manager"
              className="w-full h-full object-cover translate-y-[-5%]"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight animate-fade-up-delay-1">
            {hero.name}
          </h1>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] animate-fade-up-delay-2">
            <span className="w-2 h-2 rounded-full animate-pulse bg-[#10b981]" />
            <span className="font-mono text-xs tracking-wide text-[#10b981]">
              {hero.statusBadge}
            </span>
          </div>

          {/* Descriptor */}
          <p className="text-base md:text-lg mb-6 max-w-md mx-auto text-[#a1a1aa] font-light tracking-wide">
            {hero.tagline}
          </p>
        </div>
      </section>

      {/* About me + nav cards section */}
      <section className="px-6 pt-8 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            About me
          </h2>
          <p className="leading-relaxed mb-10 max-w-2xl mx-auto text-[#e5e7eb]">
            I'm a Product Leader with 12+ years in fintech and digital banking. I've launched digital banks from scratch, saved millions by listening to customer complaints, and I bring full SDLC experience to my role. Want to learn more about me? Check out my full{' '}
            <Link to="/about" className="text-[#3b82f6] hover:underline">
              About Me
            </Link>
          </p>

          {/* Icon nav cards - 3x2 grid centered */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {about.cards.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <Link
                  key={card.title}
                  to={card.href.replace('#', '/')}
                  className="card-interactive group flex flex-col items-center text-center p-6 rounded-xl"
                >
                  <div className="icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    {Icon && <Icon size={24} className="text-[#a1a1aa]" />}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {card.title}
                  </span>
                  <p className="text-xs mt-1 leading-snug text-[#a1a1aa]">
                    {card.description}
                  </p>
                </Link>
              );
            })}

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/casey-chalfant/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn - Let's connect (opens in new tab)"
              className="card-interactive group flex flex-col items-center text-center p-6 rounded-xl"
            >
              <div className="icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <Linkedin size={24} className="text-[#a1a1aa]" />
              </div>
              <span className="text-sm font-medium text-white">LinkedIn</span>
              <p className="text-xs mt-1 leading-snug text-[#a1a1aa]">Let's connect</p>
            </a>

            {/* Email card */}
            <Link
              to="/contact"
              aria-label="Contact - Send me a message"
              className="card-interactive group flex flex-col items-center text-center p-6 rounded-xl"
            >
              <div className="icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <Mail size={24} className="text-[#a1a1aa]" />
              </div>
              <span className="text-sm font-medium text-white">Contact</span>
              <p className="text-xs mt-1 leading-snug text-[#a1a1aa]">Send me a message</p>
            </Link>

            {/* GitHub card */}
            <a
              href="https://github.com/crchalfant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub - See what I'm building (opens in new tab)"
              className="card-interactive group flex flex-col items-center text-center p-6 rounded-xl"
            >
              <div className="icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-3">
                <Github size={24} className="text-[#a1a1aa]" />
              </div>
              <span className="text-sm font-medium text-white">GitHub</span>
              <p className="text-xs mt-1 leading-snug text-[#a1a1aa]">See what I'm building</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

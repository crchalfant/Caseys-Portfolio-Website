import { Link } from 'react-router-dom';
import { Briefcase, Wrench, Linkedin } from 'lucide-react';
import { content } from '../data/content';
import LoadingImage from './LoadingImage';
import PageMeta from './PageMeta';

const iconMap = { Briefcase, Wrench };

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
          <div className="w-56 h-56 md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-[#2a2d37] mx-auto mb-5 shadow-[0_0_30px_rgba(59,130,246,0.12)] animate-fade-up">
            <LoadingImage
              src="/headshot.webp"
              alt="Casey Chalfant - Senior Product Manager"
              className="w-full h-full object-cover translate-y-[-5%]"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight animate-fade-up-delay-1">
            {hero.name}
          </h1>

          {/* Descriptor */}
          <p className="text-base md:text-lg mb-6 max-w-md mx-auto text-[#a1a1aa] font-light tracking-wide">
            {hero.tagline}
          </p>

          {/* Open to badge */}
          <div className="inline-flex items-start gap-2 px-3 py-2 rounded-lg mb-4 bg-[#1a1d27] border border-[#2a2d37] text-left animate-fade-up-delay-2">
            <span className="w-1.5 h-1.5 min-w-[0.375rem] min-h-[0.375rem] rounded-full mt-1 flex-shrink-0 animate-pulse bg-[#10b981]" />
            <div>
              <span className="font-mono text-[10px] block mb-0.5 text-[#10b981]">Currently Open To</span>
              <p className="text-xs text-[#e5e7eb]">{about.openTo}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About me + nav cards section */}
      <section className="px-6 pt-4 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            About Me
          </h2>
          <p className="leading-relaxed mb-10 max-w-2xl mx-auto text-[#e5e7eb]">
            I'm a Product Leader with 12+ years in fintech and digital banking. I've launched digital banks from scratch, saved millions by listening to customer complaints, and I bring full SDLC experience to my role. Want to learn more about me? Check out my full{' '}
            <Link to="/about" className="text-[#3b82f6] hover:underline">
              About Me
            </Link>
          </p>

          {/* Icon nav cards - 3x2 grid centered */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  );
}

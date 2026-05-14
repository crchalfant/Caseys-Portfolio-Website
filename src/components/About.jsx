import { useState, useEffect } from 'react';
import { content } from '../data/content';
import PageMeta from './PageMeta';

const slideshowImages = [
  { src: "/slideshow-1.jpg", alt: "Casey Chalfant photo 1" },
  { src: "/slideshow-2.jpg", alt: "Casey Chalfant photo 2" },
  { src: "/slideshow-3.jpg", alt: "Casey Chalfant photo 3" },
];

export default function About() {
  const { about } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideshowImages.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="px-6 py-20 md:py-28 min-h-screen">
      <PageMeta title="About Me" description="Learn about Casey Chalfant - a Product Leader with 12+ years in fintech and digital banking, from developer to Senior PM." />
      <div className="max-w-5xl mx-auto">
        {/* Mountain banner */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 -mt-8">
          <img src="/mountains.JPEG" alt="" role="presentation" className="w-full h-full object-cover object-[center_50%]" />
          <div className="absolute inset-0 bg-[#0f1117]/20" />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-2xl mb-10">
          {about.headline}
        </h2>

        {/* Content grid: text left, slideshow right */}
        <div className="grid md:grid-cols-[1fr,auto] gap-10 mb-10">
          <div>
            {/* How I got here */}
            <h3 className="text-lg font-semibold text-white mb-3">How I got to where I am today</h3>
            {about.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-[#e5e7eb] mb-5" style={{ maxWidth: '65ch' }}>
                {paragraph}
              </p>
            ))}

            {/* Sections */}
            {about.sections.map((section, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">{section.heading}</h3>
                {section.text && (
                  <p className="leading-relaxed text-[#e5e7eb]" style={{ maxWidth: '65ch' }}>{section.text}</p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
                        <p className="leading-relaxed text-[#e5e7eb]">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Slideshow column */}
          <div className="flex-shrink-0">
          <div
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-[#2a2d37] shadow-[0_8px_30px_rgba(59,130,246,0.1)] relative cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setLightboxImage(slideshowImages[currentSlide])}
          >
            {slideshowImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20 rounded-2xl">
              <span className="text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">Click to enlarge</span>
            </div>
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-[#3b82f6] w-4' : 'bg-[#2a2d37]'
                }`}
                aria-label={`View photo ${index + 1}`}
              />
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="block text-lg font-medium text-white mb-3">My Personality</span>
            <div className="space-y-2">
              <a href="https://www.16personalities.com/entj-personality" target="_blank" rel="noopener noreferrer" className="block text-base text-[#9ca3af] hover:underline">MBTI: ENTJ-T</a>
              <a href="https://www.crystalknows.com/disc/is-personality-type" target="_blank" rel="noopener noreferrer" className="block text-base text-[#9ca3af] hover:underline">DISC: Encourager (IS)</a>
              <a href="https://blog.insights.com/en-us/blog/the-essential-guide-to-insights-discovery-colour-energies-and-how-to-use-them-at-work" target="_blank" rel="noopener noreferrer" className="block text-base text-[#9ca3af] hover:underline">Insights Discovery: Y,B,G</a>
            </div>
          </div>
          </div>
        </div>

        {/* Open to badge */}
        <div className="p-4 rounded-xl max-w-3xl bg-[#1a1d27] border border-[#2a2d37]">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full mt-2 animate-pulse bg-[#10b981]" />
            <div>
              <span className="font-mono text-xs block mb-1 text-[#10b981]">Currently Open To</span>
              <p className="text-sm text-[#e5e7eb]">{about.openTo}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-label="Enlarged image"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
            autoFocus
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

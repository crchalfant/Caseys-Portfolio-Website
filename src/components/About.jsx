import { useState, useEffect, useRef } from 'react';
import { content } from '../data/content';
import PageMeta from './PageMeta';

const slideshowImages = [
  { src: "/slideshow-1.webp", alt: "Casey Chalfant photo 1" },
  { src: "/slideshow-2.webp", alt: "Casey Chalfant photo 2" },
  { src: "/slideshow-3.webp", alt: "Casey Chalfant photo 3" },
];

export default function About() {
  const { about } = content;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideshowImages.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (!lightboxImage) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxImage]);

  return (
    <section className="px-6 py-20 md:py-28 min-h-screen">
      <PageMeta title="About Me" description="Learn about Casey Chalfant - a Product Leader with 12+ years in fintech and digital banking, from developer to Senior PM." />
      <div className="max-w-5xl mx-auto">
        {/* Mountain banner */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12 -mt-8">
          <img src="/mountains.webp" alt="" role="presentation" className="w-full h-full object-cover object-[center_50%]" />
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
            <h3 className="text-lg font-semibold text-white mb-3">{about.bioHeading}</h3>
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
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <div
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-[#2a2d37] shadow-[0_8px_30px_rgba(59,130,246,0.1)] relative cursor-pointer"
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
          <div className="flex justify-center gap-1.5 mt-3 w-72 md:w-80">
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
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            touchStartX.current = null;
            if (Math.abs(diff) < 50) return; // ignore small swipes
            let newIndex;
            if (diff > 0) {
              // swipe left → next
              newIndex = (currentSlide + 1) % slideshowImages.length;
            } else {
              // swipe right → previous
              newIndex = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
            }
            setCurrentSlide(newIndex);
            setLightboxImage(slideshowImages[newIndex]);
          }}
          role="dialog"
          aria-label="Enlarged image"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
            autoFocus
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {/* Previous arrow - hidden on mobile */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              const prevIndex = (currentSlide - 1 + slideshowImages.length) % slideshowImages.length;
              setCurrentSlide(prevIndex);
              setLightboxImage(slideshowImages[prevIndex]);
            }}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          {/* Next arrow - hidden on mobile */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              const nextIndex = (currentSlide + 1) % slideshowImages.length;
              setCurrentSlide(nextIndex);
              setLightboxImage(slideshowImages[nextIndex]);
            }}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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

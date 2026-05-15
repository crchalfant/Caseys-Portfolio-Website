import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X, Building2 } from 'lucide-react';
import { content } from '../data/content';
import LoadingImage from './LoadingImage';
import PageMeta from './PageMeta';

export default function Project() {
  const { project } = content;
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxGallery, setLightboxGallery] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTabs, setActiveTabs] = useState({});
  const touchStartX = useRef(null);

  // Open gallery lightbox with arrows
  const openGallery = (images, startIndex) => {
    setLightboxGallery(images);
    setLightboxIndex(startIndex);
  };

  const closeGallery = () => {
    setLightboxImage(null);
    setLightboxGallery(null);
  };

  // Global key listener for lightbox
  useEffect(() => {
    if (!lightboxImage && !lightboxGallery) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
        setLightboxGallery(null);
      }
      if (e.key === 'Tab') e.preventDefault();
      if (lightboxGallery) {
        if (e.key === 'ArrowRight') setLightboxIndex(prev => (prev + 1) % lightboxGallery.length);
        if (e.key === 'ArrowLeft') setLightboxIndex(prev => (prev - 1 + lightboxGallery.length) % lightboxGallery.length);
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [lightboxImage, lightboxGallery]);

  const getActiveTab = (itemIndex) => activeTabs[itemIndex] || 0;
  const setActiveTab = (itemIndex, tabIndex) => {
    setActiveTabs(prev => ({ ...prev, [itemIndex]: tabIndex }));
  };

  return (
    <section className="px-6 py-20 md:py-28 bg-[rgba(26,29,39,0.3)]">
      <PageMeta title="Products" description="Projects built by Casey Chalfant - Job Search Autopilot, Tailwind economic intelligence, and Jenius Bank authentication experience." />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">
          Products
        </h2>

        <div className="space-y-8">
          {project.items.map((item, i) => (
            <div key={i}>
              {item.type === 'github' ? (
                /* GitHub project card */
                <div className="card-interactive group relative rounded-2xl bg-[#0f1117] overflow-hidden grid md:grid-cols-[1fr,1fr] gap-0">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 bg-[rgba(59,130,246,0.05)]" />
                  <div className="relative z-10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(59,130,246,0.1)]">
                        <Github size={20} className="text-[#3b82f6]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.heading}</h3>
                        <span className="font-mono text-xs tracking-wider text-[#9ca3af]">{item.techLabel}</span>
                        <span className="block font-mono text-xs tracking-wider text-[#9ca3af] mt-0.5">Built with Kiro</span>
                      </div>
                    </div>
                    <p className="leading-relaxed mb-6 text-[#e5e7eb]">{item.description}</p>
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-blue inline-flex items-center gap-2 px-5 py-2.5 font-medium text-sm rounded-lg"
                      aria-label={`View ${item.heading} on GitHub (opens in new tab)`}
                    >
                      <ExternalLink size={14} />
                      {item.link.label}
                    </a>
                  </div>
                  <div className="relative cursor-pointer min-h-[200px] md:min-h-0" onClick={() => setLightboxImage({ image: item.image, imageAlt: item.imageAlt })}>
                    <LoadingImage src={item.image} alt={item.imageAlt} className="w-full h-full object-cover object-left-top md:rounded-r-2xl" wrapperClassName="w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20 md:rounded-r-2xl">
                      <span className="text-white text-xs font-medium bg-black/50 px-3 py-1.5 rounded-full">Click to enlarge</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Career product card with tabbed gallery */
                <div className="card-interactive group rounded-2xl bg-[#0f1117] overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(59,130,246,0.1)]">
                        <Building2 size={20} className="text-[#3b82f6]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.heading}</h3>
                        <span className="font-mono text-xs tracking-wider text-[#9ca3af]">{item.techLabel}</span>
                      </div>
                    </div>
                    <p className="leading-relaxed mb-6 text-[#e5e7eb]">{item.description}</p>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                      {item.tabs.map((tab, tabIndex) => (
                        <button
                          key={tabIndex}
                          onClick={() => setActiveTab(i, tabIndex)}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                            getActiveTab(i) === tabIndex
                              ? 'bg-[#3b82f6] text-white'
                              : 'bg-[#1a1d27] text-[#9ca3af] hover:text-white border border-[#2a2d37]'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Thumbnail grid */}
                    <div
                      key={getActiveTab(i)}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
                      onTouchEnd={(e) => {
                        if (touchStartX.current === null) return;
                        const diff = touchStartX.current - e.changedTouches[0].clientX;
                        touchStartX.current = null;
                        if (Math.abs(diff) < 50) return;
                        const tabCount = item.tabs.length;
                        if (diff > 0) {
                          // swipe left → next tab
                          setActiveTab(i, (getActiveTab(i) + 1) % tabCount);
                        } else {
                          // swipe right → previous tab
                          setActiveTab(i, (getActiveTab(i) - 1 + tabCount) % tabCount);
                        }
                      }}
                    >
                      {item.tabs[getActiveTab(i)].images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative cursor-pointer rounded-lg overflow-hidden border border-[#2a2d37] hover:border-[rgba(59,130,246,0.5)] transition-all"
                          onClick={() => openGallery(item.tabs[getActiveTab(i)].images, imgIndex)}
                        >
                          <LoadingImage src={img.src} alt={img.alt} className={`w-full object-top bg-[#1a1d27] ${item.tabs[getActiveTab(i)].label === 'Mobile Login' ? 'h-52 sm:h-64 object-contain' : 'h-36 sm:h-48 object-cover'}`} wrapperClassName="w-full" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                            <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">Enlarge</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - single image */}
      {lightboxImage && !lightboxGallery && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeGallery}
          role="dialog"
          aria-label="Enlarged image"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={closeGallery}
            aria-label="Close"
            autoFocus
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImage.image}
            alt={lightboxImage.imageAlt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Lightbox - gallery with arrows */}
      {lightboxGallery && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeGallery}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            touchStartX.current = null;
            if (Math.abs(diff) < 50) return;
            if (diff > 0) {
              setLightboxIndex(prev => (prev + 1) % lightboxGallery.length);
            } else {
              setLightboxIndex(prev => (prev - 1 + lightboxGallery.length) % lightboxGallery.length);
            }
          }}
          role="dialog"
          aria-label="Image gallery"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeGallery}
            aria-label="Close"
            autoFocus
          >
            <X size={28} />
          </button>

          {/* Left arrow - hidden on mobile */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2 hidden md:block"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => (prev - 1 + lightboxGallery.length) % lightboxGallery.length); }}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* Image */}
          <img
            src={lightboxGallery[lightboxIndex].src}
            alt={lightboxGallery[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right arrow - hidden on mobile */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2 hidden md:block"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => (prev + 1) % lightboxGallery.length); }}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-white/70 text-sm font-mono">
            {lightboxIndex + 1} / {lightboxGallery.length}
          </div>
        </div>
      )}
    </section>
  );
}

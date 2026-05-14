import { content } from '../data/content';
import PageMeta from './PageMeta';

export default function AI() {
  const { ai } = content;

  return (
    <section className="px-6 py-20 md:py-28 min-h-screen bg-[rgba(26,29,39,0.3)]">
      <PageMeta title="AI" description="How Casey Chalfant uses AI tools like Claude and Copilot as core workflow components in product management." />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            {ai.heading}
          </h2>
          <p className="text-lg max-w-xl text-[#9ca3af]">
            {ai.descriptor}
          </p>
        </div>

        <div className="grid md:grid-cols-[1.2fr,1fr] gap-12">
          <div className="space-y-5">
            {ai.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-[#e5e7eb]">
                {p}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tools I Use</h3>
            <div className="grid grid-cols-3 gap-3">
              {ai.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium text-[#e5e7eb] bg-[#1a1d27] border border-[#2a2d37] rounded-lg text-center"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

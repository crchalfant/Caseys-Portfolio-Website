import { content } from '../data/content';
import { Building2, Calendar, Check, Circle, GraduationCap, TrendingUp } from 'lucide-react';
import PageMeta from './PageMeta';

export default function Resume() {
  const { resume } = content;

  return (
    <section className="px-6 py-20 md:py-28 min-h-screen bg-[rgba(26,29,39,0.3)]">
      <PageMeta title="Resume" description="Casey Chalfant's work experience - 12+ years across Jenius Bank, RBC, First Citizens Bank, and Deutsche Bank in digital banking and fintech." />
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {resume.heading}
          </h2>
          <p className="text-[#9ca3af] max-w-xl">
            {resume.descriptor}
          </p>
        </div>

        {/* Roles */}
        <div className="space-y-6">
          {resume.experience.roles.map((role, i) => (
            <div
              key={i}
              className="card-interactive group p-6 rounded-xl bg-[#0f1117]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {role.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 size={14} className="text-[#3b82f6]" />
                    <span className="text-sm font-medium text-[#3b82f6]">{role.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#9ca3af]">
                  <Calendar size={14} />
                  <span className="font-mono text-xs">{role.period}</span>
                </div>
              </div>
              <div className="space-y-2">
                {role.bullets.map((bullet, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
                    <p className="text-sm leading-relaxed text-[#e5e7eb]">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12 card-interactive group p-6 rounded-xl bg-[#0f1117]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h4 className="text-lg font-semibold text-white">
                {resume.education.heading}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <GraduationCap size={14} className="text-[#3b82f6]" />
                <span className="text-sm font-medium text-[#3b82f6]">{resume.education.school}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#9ca3af]">
              <Calendar size={14} />
              <span className="font-mono text-xs">{resume.education.year}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
              <p className="text-sm leading-relaxed text-[#e5e7eb]">{resume.education.degree}</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
              <p className="text-sm leading-relaxed text-[#e5e7eb]">Association of Information Technology Professionals (AITP) President & Fundraising Chair</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
              <p className="text-sm leading-relaxed text-[#e5e7eb]">First-Generation College Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#e5e7eb] font-medium mt-4">Awards</p>
          <div className="space-y-2 mt-2">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
              <p className="text-sm leading-relaxed text-[#e5e7eb]">Outstanding Student: Association of Information Technology Professionals</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 text-xs flex-shrink-0 text-[#3b82f6]">▸</span>
              <p className="text-sm leading-relaxed text-[#e5e7eb]">Paul E. Wuerzner Memorial Scholarship Recipient</p>
            </div>
          </div>
        </div>

        {/* Skills Assessment */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            {resume.skills.heading}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {resume.skills.columns.map((col, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#0f1117] border border-[#2a2d37]">
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs tracking-widest ${
                    col.label === 'STRONG' ? 'text-[#10b981]' :
                    col.label === 'MODERATE' ? 'text-[#9ca3af]' :
                    'text-[#f59e0b]'
                  }`}>
                    {col.label}
                  </span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    col.label === 'STRONG' ? 'border border-[#10b981] text-[#10b981]' :
                    col.label === 'MODERATE' ? 'border border-[#9ca3af] text-[#9ca3af]' :
                    'border border-[#f59e0b] text-[#f59e0b]'
                  }`}>
                    {col.label === 'STRONG' ? <Check size={12} /> : col.label === 'MODERATE' ? <Circle size={10} /> : <TrendingUp size={12} />}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {col.items.map((item, j) => (
                    <p key={j} className="text-sm text-[#e5e7eb]">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

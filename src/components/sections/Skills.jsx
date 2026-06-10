import { FadeIn }       from '../ui/FadeIn.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'
import { skills, sectionLabel } from '../../content/skills.js'

export function Skills() {
  return (
    <section id="skills" className="section-skills section-border">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel label={sectionLabel} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 60}>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.12em] mb-3">
                  {cat.name}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map(item => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white text-gray-600 border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-[#6FCF97] hover:text-[#064E3B] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

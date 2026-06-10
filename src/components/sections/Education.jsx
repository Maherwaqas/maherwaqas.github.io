import { FadeIn }       from '../ui/FadeIn.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'
import { education, memberships, membershipsLabel, sectionLabel } from '../../content/education.js'

export function Education() {
  return (
    <section id="education" className="section-education section-border">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel label={sectionLabel} />

          <div className="flex flex-col divide-y divide-gray-100 mb-10">
            {education.map((item, i) => (
              <FadeIn key={item.id} delay={i * 60}>
                <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[1fr_auto] sm:gap-6 sm:items-start py-7 first:pt-0 last:pb-0">
                  <div>
                    <h3 className="text-[16px] font-semibold text-gray-900 tracking-tight mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-[14px] text-gray-700 font-medium mb-0.5">{item.institution}</p>
                    <p className="text-[12px] text-gray-400 font-light mb-2.5">{item.location}</p>
                    <p className="text-[13px] text-gray-500 leading-relaxed italic max-w-[480px] font-light">
                      {item.thesis}
                    </p>
                    {item.note && (
                      <p className="font-mono text-[10px] text-primary mt-2.5 tracking-wider uppercase">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <div className="font-mono text-[11px] text-gray-400 sm:text-right sm:pt-1 whitespace-nowrap order-first sm:order-none">
                    {item.period}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Memberships */}
          <FadeIn>
            <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.12em] mb-4">
              {membershipsLabel}
            </p>
            <ul className="flex flex-col gap-2.5">
              {memberships.map(m => (
                <li key={m} className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-primary mt-1">—</span>
                  <span className="text-[14px] text-gray-600 font-light">{m}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  )
}

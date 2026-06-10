import { FadeIn }       from '../ui/FadeIn.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'
import { Tag }          from '../ui/Tag.jsx'
import { Icon }         from '../ui/Icon.jsx'
import { experience, sectionLabel } from '../../content/experience.js'

export function Experience() {
  return (
    <section id="experience" className="section-experience section-border">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel label={sectionLabel} />

          <div className="flex flex-col divide-y divide-gray-100">
            {experience.map((item, i) => (
              <FadeIn key={item.id} delay={i * 60}>
                <div className="flex flex-col gap-1 sm:grid sm:grid-cols-[1fr_auto] sm:gap-6 sm:items-start py-7 first:pt-0 last:pb-0">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[16px] font-semibold text-gray-900 tracking-tight">
                        {item.company}
                      </h3>
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                          aria-label={`Visit ${item.company}`}
                        >
                          <Icon name="external" size={13} />
                        </a>
                      )}
                    </div>
                    <p className="text-[14px] text-gray-700 font-medium mb-0.5">{item.role}</p>
                    <p className="text-[12px] text-gray-400 font-light mb-3">{item.location}</p>
                    <p className="text-[14px] text-gray-600 leading-[1.75] max-w-[520px] font-light">
                      {item.description}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {item.tags.map(tag => <Tag key={tag} label={tag} />)}
                      </div>
                    )}
                  </div>

                  <div className="font-mono text-[11px] text-gray-400 sm:text-right sm:pt-1 whitespace-nowrap order-first sm:order-none">
                    {item.period}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

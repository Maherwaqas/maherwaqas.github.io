import { FadeIn }       from '../ui/FadeIn.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'
import { Icon }         from '../ui/Icon.jsx'
import { publications, sectionLabel, stats } from '../../content/publications.js'

export function Publications() {
  return (
    <section id="publications" className="section-publications section-border">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel label={sectionLabel} />

          {/* Stats row — divider is margin-padded inline, no fragment key issue */}
          <div className="flex mb-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-stretch">
                {i > 0 && <div className="w-px bg-gray-100 self-stretch mx-8 sm:mx-10" />}
                <div>
                  <p className="text-[36px] sm:text-[40px] font-semibold text-gray-900 leading-none tracking-tight">
                    {stat.count}
                  </p>
                  <p className="font-mono text-[10px] text-gray-400 mt-1.5 tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Paper list */}
          <div className="flex flex-col">
            {publications.map((pub, i) => (
              <FadeIn key={pub.id} delay={i * 50}>
                <div className="group flex gap-4 sm:gap-5 items-start py-5 border-b border-gray-100 last:border-0">
                  {/* Year */}
                  <span className="font-mono text-[11px] text-gray-400 pt-px shrink-0 w-9 sm:w-10 text-right tabular-nums">
                    {pub.year}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] text-gray-800 font-medium leading-snug mb-1">
                      {pub.title}
                    </p>
                    <p className="font-mono text-[10px] text-primary tracking-wider uppercase mb-1.5">
                      {pub.journal}
                    </p>
                    <p className="text-[12px] text-gray-400 font-light">{pub.authors}</p>
                  </div>

                  {/* DOI */}
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors shrink-0 mt-0.5"
                      aria-label="View paper"
                    >
                      <Icon name="external" size={13} />
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

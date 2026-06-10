import { FadeIn }       from '../ui/FadeIn.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'
import { Tag }          from '../ui/Tag.jsx'
import { Icon }         from '../ui/Icon.jsx'
import { projects, sectionLabel } from '../../content/projects.js'

const statusStyle = {
  published: 'text-emerald-600',
  active:    'text-teal-500',
  completed: 'text-gray-400',
  wip:       'text-amber-500',
}

export function Projects() {
  return (
    <section id="research" className="section-research section-border">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel label={sectionLabel} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 80}>
                {/* White card pops against the sage background */}
                <div className="group border border-white/80 rounded-2xl p-6 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)] transition-all duration-200 h-full flex flex-col hover:border-[#6FCF97] hover:shadow-[0_4px_20px_rgba(29,158,117,0.10)]">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[15px] font-semibold text-gray-900 leading-snug tracking-tight">
                      {project.name}
                    </h3>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 group-hover:text-primary transition-colors ml-2 shrink-0 mt-0.5"
                        aria-label={`View ${project.name}`}
                      >
                        <Icon name="external" size={14} />
                      </a>
                    )}
                  </div>

                  {project.subtitle && (
                    <p className="font-mono text-[10px] text-primary mb-3 tracking-wider uppercase">
                      {project.subtitle}
                      {project.status && (
                        <span className={`ml-2 ${statusStyle[project.status] ?? 'text-gray-400'}`}>
                          · {project.status}
                        </span>
                      )}
                    </p>
                  )}

                  <p className="text-[14px] text-gray-600 leading-[1.75] flex-1 mb-4 font-light">
                    {project.description}
                  </p>

                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </div>
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

import { FadeIn }       from '../ui/FadeIn.jsx'
import { SectionLabel } from '../ui/SectionLabel.jsx'
import { Icon }         from '../ui/Icon.jsx'
import { contact, sectionLabel } from '../../content/contact.js'

export function Contact() {
  return (
    <section id="contact" className="section-contact section-border">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel label={sectionLabel} />

          <div className="max-w-[500px]">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 tracking-tight mb-3">
              {contact.heading}
            </h2>
            <p className="text-[15px] text-gray-600 leading-[1.75] mb-8 font-light">
              {contact.description}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2.5 text-[14px] text-primary hover:opacity-75 transition-opacity mb-8 font-medium"
            >
              <Icon name="mail" size={15} />
              {contact.email}
            </a>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4">
              {contact.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[14px] text-gray-600 hover:text-primary transition-colors group"
                >
                  <Icon
                    name={link.icon}
                    size={16}
                    className="text-primary transition-transform group-hover:scale-110"
                  />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

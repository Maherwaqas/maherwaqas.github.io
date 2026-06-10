import { FadeIn }   from '../ui/FadeIn.jsx'
import { Icon }     from '../ui/Icon.jsx'
import { LogoMark } from '../ui/LogoMark.jsx'
import { cn }       from '../../utils/cn.js'
import { hero }     from '../../content/hero.js'

export function Hero() {
  return (
    <section id="hero" className="section-hero">
      <div className="section-inner relative z-10 pt-10 pb-10 sm:pt-14 sm:pb-14">
        <FadeIn>
          {/* Avatar + name */}
          <div className="flex items-start gap-4 sm:gap-5 mb-5">
            <div className="shrink-0 mt-0.5">
              <LogoMark size={76} className="w-[60px] h-[60px] sm:w-[76px] sm:h-[76px]" />
            </div>
            <div className="pt-0.5 sm:pt-1 min-w-0">
              <h1 className="text-[26px] sm:text-[38px] font-semibold tracking-tight leading-[1.1] text-gray-900 mb-1.5">
                {hero.name}
              </h1>
              <p className="text-[14px] sm:text-[17px] text-gray-500 font-light tracking-wide">
                {hero.title}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.75] max-w-[540px] mb-7 font-light">
            {hero.tagline}
            <span className="text-gray-800 font-medium">{hero.bio}</span>
          </p>

          {/* Links / CTAs */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {hero.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                {...(link.download ? { download: true } : {})}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cn(
                  'inline-flex items-center gap-2 text-[13px] px-3.5 py-2 sm:px-4 rounded-full border transition-all duration-150 font-medium',
                  link.primary
                    ? 'bg-[#D1F5E6] border-[#6FCF97] text-[#064E3B] hover:bg-[#A7EAD0] shadow-sm'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-[#6FCF97] hover:text-[#064E3B] shadow-sm',
                )}
              >
                <Icon name={link.icon} size={13} />
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

import { useState, useMemo } from 'react'
import { cn } from '../../utils/cn.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import { nav } from '../../content/nav.js'

export function Nav() {
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(() => nav.links.map(l => l.href.replace('#', '')), [])
  const active = useActiveSection(sectionIds)

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <nav
        className="max-w-[720px] mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          onClick={close}
          className="font-mono text-[13px] font-medium text-gray-900 hover:text-primary transition-colors"
        >
          {nav.logo}
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-7 list-none m-0 p-0">
          {nav.links.map(link => {
            const id = link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-[13px] transition-colors',
                    active === id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800',
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 -mr-1 cursor-pointer bg-transparent border-0"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={cn('block h-px w-5 bg-gray-600 origin-center transition-all duration-200', open && 'rotate-45 translate-y-[7px]')} />
          <span className={cn('block h-px w-5 bg-gray-600 transition-all duration-200',               open && 'opacity-0 scale-x-0')} />
          <span className={cn('block h-px w-5 bg-gray-600 origin-center transition-all duration-200', open && '-rotate-45 -translate-y-[7px]')} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
          <ul className="max-w-[720px] mx-auto px-6 py-5 flex flex-col gap-4 list-none m-0 p-0 py-5 px-6">
            {nav.links.map(link => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className={cn(
                      'text-[15px] transition-colors block py-0.5',
                      active === id ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-800',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}

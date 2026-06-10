import { useState, useEffect } from 'react'

/**
 * Tracks which section id is currently scrolled into view.
 * @param {string[]} sectionIds
 * @returns {string} active section id
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sectionIds])

  return active
}

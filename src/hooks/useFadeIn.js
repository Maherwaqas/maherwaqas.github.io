import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a `visible` boolean.
 * Attach the ref to any element; it becomes visible once it enters the viewport.
 * @param {{ threshold?: number, rootMargin?: string }} options
 */
export function useFadeIn({ threshold = 0.08, rootMargin = '0px 0px -30px 0px' } = {}) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}

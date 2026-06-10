import { cn } from '../../utils/cn.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'

/**
 * Wraps children in a fade-up-on-scroll container.
 * @param {{ children: React.ReactNode, delay?: number, className?: string }} props
 */
export function FadeIn({ children, delay = 0, className }) {
  const { ref, visible } = useFadeIn()

  return (
    <div
      ref={ref}
      className={cn('fade-up', visible && 'visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

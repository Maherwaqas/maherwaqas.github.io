import { cn } from '../../utils/cn.js'

/**
 * Monospace technology / skill pill.
 * @param {{ label: string, className?: string }} props
 */
export function Tag({ label, className }) {
  return (
    <span
      className={cn(
        'font-mono text-[10px] px-2 py-0.5 rounded',
        'bg-gray-100 text-gray-600 border border-gray-200',
        className,
      )}
    >
      {label}
    </span>
  )
}

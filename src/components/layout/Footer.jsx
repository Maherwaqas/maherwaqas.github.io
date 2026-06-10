import { site } from '../../config/site.js'

export function Footer() {
  return (
    <footer className="section-border bg-white">
      <div className="max-w-[720px] mx-auto px-6 py-7 flex items-center justify-between">
        <span className="font-mono text-[11px] text-gray-400 tracking-wide">{site.title}</span>
        <span className="font-mono text-[11px] text-gray-300">{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

import { person } from '../../content/person.js'

export function LogoMark({ size = 72, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`${person.name} logo`}
    >
      <defs>
        <radialGradient id="lm-bg" cx="38%" cy="34%" r="68%">
          <stop offset="0%"   stopColor="#1D9E75"/>
          <stop offset="100%" stopColor="#063D2E"/>
        </radialGradient>
        <pattern id="lm-hex" x="0" y="0" width="12.12" height="21" patternUnits="userSpaceOnUse">
          <polygon points="6.06,0 12.12,3.5 12.12,10.5 6.06,14 0,10.5 0,3.5"
                   fill="none" stroke="white" strokeWidth="0.45" opacity="0.11"/>
          <polygon points="6.06,14 12.12,17.5 12.12,24.5 6.06,28 0,24.5 0,17.5"
                   fill="none" stroke="white" strokeWidth="0.45" opacity="0.11"/>
        </pattern>
        <clipPath id="lm-clip">
          <circle cx="50" cy="50" r="47"/>
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="50" cy="50" r="50" fill="url(#lm-bg)"/>
      <rect width="100" height="100" fill="url(#lm-hex)" clipPath="url(#lm-clip)"/>
      <circle cx="50" cy="50" r="47" stroke="rgba(255,255,255,0.13)" strokeWidth="1.2"/>

      {/* Fibre stack — composite cross-section metaphor */}
      <line x1="24" y1="80" x2="76" y2="80" stroke="rgba(255,255,255,0.20)" strokeWidth="1.0" strokeLinecap="round"/>
      <line x1="30" y1="84" x2="70" y2="84" stroke="rgba(255,255,255,0.13)" strokeWidth="0.7"  strokeLinecap="round"/>
      <line x1="37" y1="87.5" x2="63" y2="87.5" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" strokeLinecap="round"/>

      {/* "DR." label */}
      <text
        x="50" y="31"
        textAnchor="middle"
        fontFamily="'DM Mono', 'Courier New', monospace"
        fontSize="8"
        fontWeight="400"
        fill="rgba(255,255,255,0.72)"
        letterSpacing="4"
      >
        DR.
      </text>

      {/* W — bond lines */}
      <path
        d="M17 30 L28 71 L50 46 L72 71 L83 30"
        stroke="white"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Atom nodes */}
      <circle cx="17" cy="30" r="3.8" fill="white"/>
      <circle cx="50" cy="46" r="3.8" fill="white"/>
      <circle cx="83" cy="30" r="3.8" fill="white"/>
      <circle cx="28" cy="71" r="3.2" fill="#9FE1CB"/>
      <circle cx="72" cy="71" r="3.2" fill="#9FE1CB"/>
    </svg>
  )
}

import { person } from './person.js'

export const sectionLabel = '// contact'

export const contact = {
  heading:     "Let's collaborate",
  description: `Open to research collaborations, industry R&D partnerships, and consultant roles in polymer science, materials characterisation, and sustainable manufacturing. Based in ${person.location} on a Graduate Work Visa.`,
  email:       person.email,
  links: [
    { label: 'LinkedIn',     href: person.linkedin,     icon: 'linkedin'     },
    { label: 'ResearchGate', href: person.researchGate, icon: 'researchgate' },
  ],
}

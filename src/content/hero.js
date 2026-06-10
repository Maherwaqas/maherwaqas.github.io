import { site }   from '../config/site.js'
import { person } from './person.js'

export const hero = {
  name:    person.name,
  title:   person.jobTitle,
  tagline: person.tagline,
  bio:     person.bio,
  links: [
    { label: 'Download CV',  href: site.cvPath,                            icon: 'download',     primary: true,  download: true  },
    { label: 'LinkedIn',     href: person.linkedin,                        icon: 'linkedin',     primary: false, download: false },
    { label: 'ResearchGate', href: person.researchGate,                    icon: 'researchgate', primary: false, download: false },
    { label: 'Email',        href: `mailto:${person.email}`,               icon: 'mail',         primary: false, download: false },
  ],
}

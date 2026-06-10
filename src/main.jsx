import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { site } from './config/site.js'

document.title = site.title
document.querySelector('meta[name="description"]')
  ?.setAttribute('content', site.description)

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

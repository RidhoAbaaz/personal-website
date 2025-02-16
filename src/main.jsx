import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import PortofolioPage from './pages/PortofolioPage'
import ContactPage from './pages/ContactPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
    <AboutPage />
    <SkillsPage />
    <PortofolioPage />
    <ContactPage />
  </StrictMode>,
)

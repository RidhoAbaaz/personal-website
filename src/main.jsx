import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import PersonalWebsite from './pages/PersonalWebsite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalWebsite />
  </StrictMode>
)

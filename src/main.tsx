import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lesson1 from './pages/One.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Envolve o aplicativo com BrowserRouter */}
      <Routes> {/* Define as rotas */}
        <Route path="/tech-portfolio/" element={<App />} /> {/* Rota para a Home (App.tsx) */}
        <Route path="/tech-portfolio/one" element={<Lesson1 />} /> {/* Rota para a Lição 1 */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

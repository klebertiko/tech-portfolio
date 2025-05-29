import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lesson1 from './pages/one.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* Envolve o aplicativo com BrowserRouter */}
      <Routes> {/* Define as rotas */}
        <Route path="/" element={<App />} /> {/* Rota para a Home (App.tsx) */}
        <Route path="/one" element={<Lesson1 />} /> {/* Rota para a Lição 1 */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

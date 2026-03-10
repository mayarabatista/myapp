import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import App from './Pages/App.jsx'
import Home from './Pages/Home.jsx'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import MainLayout from './layouts/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>

        <Route path='/app' element={<App />} />

        <Route element={<MainLayout />} />
        <Route index element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

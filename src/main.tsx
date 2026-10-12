import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/tokens.css'
import './styles/global.css'

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// in produzione l'HTML è prerenderizzato (scripts/prerender.js); in sviluppo il root è vuoto
if (root.firstElementChild) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)

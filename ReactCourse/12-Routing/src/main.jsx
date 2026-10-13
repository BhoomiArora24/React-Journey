import { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* now i can perdorm routing */}
    <App />
  </BrowserRouter>,
)

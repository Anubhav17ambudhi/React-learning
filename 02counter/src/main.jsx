import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//createRoot also creates a DOM
//compares this and the actual DOM and then updates the things that actually gets
//updated in the UI 
//when browser Reloads the new DOM 
//virtual dom tracks the changed elements and updates them only

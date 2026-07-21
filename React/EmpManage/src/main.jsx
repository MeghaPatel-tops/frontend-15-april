import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './feature/UserContext.js'
import ThemeProvider from './feature/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <ThemeProvider>
             <App />
      </ThemeProvider>
          
       
   </BrowserRouter>
   
  </StrictMode>,
)

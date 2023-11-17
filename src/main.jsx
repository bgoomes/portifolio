import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme.js'
import GlobalStyles from './style/global.js'

import App from './page/App.jsx'
import { Footer } from './components/footer/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles />
       <App />
    </ThemeProvider>
   
  </React.StrictMode>,
)

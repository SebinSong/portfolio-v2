import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/main.scss'

// components
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

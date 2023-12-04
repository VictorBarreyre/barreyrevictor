import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WindowProvider } from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowProvider> 
    <App />
    </WindowProvider>
  </React.StrictMode>,
)

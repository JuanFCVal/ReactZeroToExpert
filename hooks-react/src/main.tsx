import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HooksApp from './components/HooksApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <HooksApp></HooksApp>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import './styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <App />
  </BrowserRouter>,
)

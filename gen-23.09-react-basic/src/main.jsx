import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import BannerImage from './components/BannerImage.jsx'
import Footer from './components/Footer.jsx'
import FilterAndSort from './components/FilterAndSort.jsx'
import BannerService from './components/BannerService.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <BannerImage/>
    <FilterAndSort/>
    <App />
    <BannerService />
    <Footer/>
  </React.StrictMode>,
)

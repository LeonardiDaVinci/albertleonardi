import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
import Work from './components/work/Work'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Toggle from './components/toggle/Toggle'
import { useTheme } from './context/ThemeContext'

const App = () => {
  const { theme } = useTheme();
  
  return (
    <div data-theme={theme} id="theme-wrapper"> {}
      <Toggle />
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App

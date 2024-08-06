import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Projects from './components/Projects'

const App = () => {
  return <>
    <Header />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
  </>
}

export default App
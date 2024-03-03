import React from 'react'
import Contact from './components/Contact'
import Custom_Navbar from './components/Custom_Navbar'
import Footer from './components/Footer'
import Hero_Section from './components/Hero_Section'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'


function App() {
  return (
    <div className='App'>
      <Custom_Navbar />
      <Hero_Section />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Porfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: blue
`

function App() {
  return (
    <div className='App'>
      <Intro />
      <StyledH1>hello</StyledH1>
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

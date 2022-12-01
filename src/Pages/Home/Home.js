import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Portfolio from '../Projects/Portfolio'
import Skills from '../Projects/Skills'
import Services from '../Services/Services'
import Banner from './Banner'

const Home = () => {
  return (
   <>
    <Banner></Banner>
    <About></About>
    <Skills></Skills>
    <Services></Services>
    <Portfolio></Portfolio>
    <Contact></Contact>

 </>
  )
}

export default Home
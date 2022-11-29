import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
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
    <Contact></Contact>

 </>
  )
}

export default Home
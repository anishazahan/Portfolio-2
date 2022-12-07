import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-black px-20 text-gray-400">
    <div>
      <span className="footer-title">Services</span> 
      <Link to='/services' className="link link-hover">React Application</Link> 
      <Link to='/services' className="link link-hover">Mern Application</Link> 
      <Link to='/services' className="link link-hover">UX Design</Link> 
      <Link to='/services' className="link link-hover">Web Design</Link>
    </div> 
    <div>
      <span className="footer-title">Portfolio</span> 
      <Link to='/about' className="link link-hover">About us</Link> 
      <Link to='/contact' className="link link-hover">Contact</Link> 
      <Link to='/service' className="link link-hover">Services</Link> 
      <Link to='/portfolio' className="link link-hover">Projects</Link> 
      <Link to='/blog' className="link link-hover">Blog</Link>
    </div> 
    <div>
      <span className="footer-title">Social</span> 
      <div className="grid grid-flow-col">
      <a href='https://github.com/anishazahan' target="_blank" className='icon shadow-lg'><FaFacebookSquare></FaFacebookSquare> </a>
                <a href='https://www.linkedin.com/in/anisha-zahan/' target="_blank" className='icon shadow-lg'><FaLinkedin></FaLinkedin> </a>
                <a href='' className='icon shadow-lg'><FaSkype></FaSkype> </a>
                <a href='anishazahan13@gmail.com' className='icon shadow-lg'><FaGooglePlus></FaGooglePlus> </a>
                
      </div>
      <h2 className='text-center'>Copyright By Anisha Zahan  {(new Date().getFullYear())}</h2>
    </div>
  </footer>
  )
}

export default Footer

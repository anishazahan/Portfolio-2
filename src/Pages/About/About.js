import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className='bg-[#1D1D1D] py-20'>

        

        <div className="flex mx-auto max-w-7xl justify-center items-center px-28 relative">

            <div className="h-[550px] relative w-[40%] rounded-sm z-10 overflow-hidden ">
                <img className='h-full w-full object-cover rounded-md absolute hover:scale-125' src={'https://c1.wallpaperflare.com/preview/167/600/43/office-business-laptop-paper.jpg'} alt="" />
                <div className="bg-black/20 w-full h-full absolute hover:scale-125 duration-500"></div>
            </div>
            <div className="w-[50%] bg-black p-10 ml-[-5rem] z-20 text-gray-400 font-medium shadow-2xl rounded-sm">
            <h2 className='about-heading text-xl md:text-3xl text-gray-100 '> DeVeloper</h2>
                <p className='my-7'>I am fronted React Js Developer.I have 2 years work experience.I have fresh knowledge of html,css,bootstrap,tailwind,javascript ES6(comfortable),react.js and familier for express.Js,node Js,Mongodb and other technology.You will get 100% full support of work assured until you are fully satisfied.I have the ability to apply professional and technical knowledge in a challenging environment. Which helps me to improve my skills and experience, to develop efficiency and to constantly learn new things for myself.</p>

              <Link to='/'>
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">About More</span>
                </button></Link>
            </div>

        </div>

    </div>
  )
}

export default About
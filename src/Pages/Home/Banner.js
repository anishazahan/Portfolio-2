import React from 'react'
import './Home.css'
import banner from '../../img/1_YZ2fsT9k1CmlMil-Fda0Zg.png'
import {FaFacebookSquare,FaLinkedin,FaSkype,FaGooglePlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (

    <div className='banner'>
      <div className="flex flex-col lg:flex-row  h-[50vh] lg:h-[90vh] max-w-7xl w-full mx-auto justify-between">
        <div className="content w-full lg:w-[48%] items-center flex flex-col h-full justify-center lg:items-start lg:my-auto lg:ml-10">
               <h2 className='text-amber-50 text-5xl font-bold mb-3'>Hey!!! I'am</h2>
               <div className="flex items-center">
                <span className='text-primary text-3xl md:text-5xl font-bold ml-1'>Anisha Zahan Hashi</span>
               </div>
               <p className='text-amber-50 w-[80%] lg:w-full text-center lg:text-left font-medium my-5'>I am a Fronted developer.I will create Your website
               as your creative choice!</p>
        </div>
        <div className="img-section w-[48%] hidden lg:block ">
            <div className="h-full flex justify-center items-center relative">
                <img className='w-[70%] h-[60%] object-cover absolute' src={banner} alt="" />
                <div class=" w-[70%] h-[60%] relative  before:absolute before:-bottom-4 before:-right-4 before:h-28 before:w-28 before:border-b-4 before:border-r-4 before:border-emerald-600 before:transition-all before:duration-500 before:ease-in-out after:absolute after:-top-4 after:-left-4 after:h-28 after:w-28 after:border-t-4 after:border-l-4 after:border-emerald-600 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"></div>
            </div>
        </div>
        <div className="flex flex-row lg:flex-col justify-center items-center  lg:mx-0 mt-[-7rem] lg:mt-0 mb-16 lg:mb-0">
          <Link to ="/" className='icon shado '><FaFacebookSquare></FaFacebookSquare> </Link>
           <Link to ="/" className='icon shado '><FaLinkedin></FaLinkedin> </Link>
           <Link to ="/" className='icon shado '><FaSkype></FaSkype> </Link>
           <Link to ="/" className='icon shado '><FaGooglePlus></FaGooglePlus> </Link>
            </div>
      </div>



    </div>
  )
}

export default Banner
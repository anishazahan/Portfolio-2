import React, { useState } from 'react'
import logo from '../../img/Capture-removebg-preview.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
        <div className='bg-black '>
               <nav className=" text-white md:flex items-center  justify-between mx-auto max-w-7xl">
                    <div className="">
                        <img src={logo} alt="" />
                         
                         </div>
                    <ul className="hidden md:flex justify-center items-center h-full mx-auto">

                         <h1>menu</h1>

                    </ul>
                    

               </nav>


               <div className="justify-between px-[8%] h-full items-center md:hidden  flex relative  duration-200">
                    <button onClick={() => setNav(!nav)} className='text-white'>
                         
                    </button>
                    <nav
                         className={`flex flex-col bg-[#00a6ff] text-center z-10 left-0 w-full  absolute duration-500 ${nav ? "opacity-100  top-14 visible" : " top-[-270px] opacity-0 invisible"}`}>
                         <ul className={` p-4 w-[50%] mx-auto uppercase`}>
                              
                         </ul>
                    </nav>
                    <div className="text-white">
                        
                    </div>
               </div>




          </div>

    </>
  )
}

export default Navbar
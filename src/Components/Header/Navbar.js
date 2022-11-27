import React, { useState } from 'react'
import {Link} from 'react'
import logo from '../../img/Capture-removebg-preview.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
        <div className='bg-black py-2 '>
               <nav className=" text-emerald-200 md:flex items-center  justify-between mx-auto max-w-7xl">
                    <div className="">
                        <img src={logo} alt="" />
                         
                    </div>
                    <div className="">
                        {/* <Link to='/'>Home</Link> */}
                        <ul className='decoration-0 flex space-x-6 font-medium'>
                            <li className=''>Home</li>
                            <li className=''>About</li>
                            <li className=''>Services</li>
                            <li className=''>Projects</li>
                            <li className=''>Blog</li>
                            <li className=''>Contact</li>
                        </ul>
                    </div>
                    

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
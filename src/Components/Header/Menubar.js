import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/Capture-removebg-preview.png'

const Menubar = () => {
    const [nav, setNav] = useState(false);
    const [navbar, setNavbar] = useState(false);
  return (
    <>
        {/* <div className='bg-[#1D1D1D] py-2 '>
               <nav className=" text-emerald-200 md:flex items-center  justify-between mx-auto max-w-7xl">
                    <div className="">
                        <img src={logo} alt="" />
                         
                    </div>
                    <div className="">
                       
                        <ul className='decoration-0 flex space-x-6 font-medium'>
                            <li className=''> <Link to='/'>Home</Link> </li>
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




          </div> */}




          <nav className="w-full bg-[#1D1D1D] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between md:py-2 md:block">
                        <Link to='/'>
                        <img src={logo} alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-center items-center pl-10 md:pl-0 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center w-full  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="/">About</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link href="/">Services</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="/">Projects</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="/">Blogs</Link>
                            </li>
                            <li className="text-white hover:text-emerald-200 font-medium">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>

                       
                    </div>
                </div>
                <div className="hidden md:block space-x-2 ">
                    <Link
                        href=""
                        className="px-5 py-3 font-semibold duration-500 hover:text-white text-black bg-primary rounded-sm shadow hover:bg-gray-800"
                    >
                        See Resume
                    </Link>
                    
                </div>
            </div>
        </nav>



    </>
  )
}

export default Menubar
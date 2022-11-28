import React from 'react'
import './Home.css'
import banner from '../../img/1_YZ2fsT9k1CmlMil-Fda0Zg.png'

const Banner = () => {
  return (
    <div className='banner'>

      <div className="flex h-[90vh] max-w-7xl">
        <div className="content w-[50%]">
                <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className="img-section w-[50%]">
            <div className="h-full flex justify-center items-center relative">
                <img className='w-[70%] h-[60%] object-cover absolute' src={banner} alt="" />
                <div class=" w-[70%] h-[60%] relative  before:absolute before:-bottom-4 before:-right-4 before:h-28 before:w-28 before:border-b-4 before:border-r-4 before:border-emerald-600 before:transition-all before:duration-500 before:ease-in-out after:absolute after:-top-4 after:-left-4 after:h-28 after:w-28 after:border-t-4 after:border-l-4 after:border-emerald-600 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"></div>
            </div>
       
        </div>
      </div>



    </div>
  )
}

export default Banner
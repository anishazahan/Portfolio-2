import React from 'react'
import './Home.css'
import banner from '../../img/1_YZ2fsT9k1CmlMil-Fda0Zg.png'

const Banner = () => {
  return (
    <>

      <div className="flex h-[90vh]">
        <div className="content w-[65%] bg-[#1D1D1D]">
                <h2>Lorem ipsum dolor sit amet.</h2>
        </div>
        <div className="img-section w-[35%] bg-black">
            <div className="h-full flex justify-start ml-[-13rem] items-center relative">
                <img className='w-[60%] h-[60%] object-cover absolute' src={banner} alt="" />
                <div class=" w-[60%] h-[60%] relative  before:absolute before:-bottom-4 before:-right-4 before:h-28 before:w-28 before:border-b-4 before:border-r-4 before:border-emerald-600 before:transition-all before:duration-500 before:ease-in-out after:absolute after:-top-4 after:-left-4 after:h-28 after:w-28 after:border-t-4 after:border-l-4 after:border-emerald-600 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"></div>
            </div>
       
        </div>
      </div>


      {/* <!-- component --> */}
{/* <div class="flex h-screen w-full items-center justify-center bg-slate-400"> */}
  {/* <!-- Border animation Here --> */}
  {/* <div class="relative h-20 w-20 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"></div>
</div> */}


    </>
  )
}

export default Banner
import React from 'react'

const portfolioDetails = () => {
  return (
    <div className='bg-black py-20'>

        <div className="max-w-7xl mx-auto px-10">
        <div className=" w-full lg:w-[60%] h-auto">
            <img className='w-full h-full' src={'https://i.ibb.co/CV9pjTN/Screenshot-2022-11-30-at-08-19-28-Muslime-Ummah.png'} alt="" />
        </div>

        <h2 className='font-bold text-2xl lg:text-3xl text-white my-5'>Name : Muslime-Ummah</h2>
        <div className=" sm:space-y-4 flex-col md:flex-row md:space-x-6 flex">
        <h2 className='font-semibold underline  text-2xl text-primary my-4'>
            <a href=''>Live Link</a>
        </h2>
        <h2 className='font-semibold underline  text-2xl text-primary my-4'>
            <a href=''>Client Code</a>
        </h2>
        <h2 className='font-semibold underline  text-2xl text-primary my-4'>
            <a href=''>Server Code</a>
        </h2>
        </div>
        <h2 className='font-semibold text-2xl text-white my-3'>
        Use Technology :
        </h2>
            
            <ul className=' text-gray-300 ml-3 flex flex-wrap gap-3 font-medium'>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
            </ul>
        <h2 className='font-semibold text-2xl text-white my-3'>
        Feature :
        </h2>
            
            <ul className=' text-gray-300 ml-3 font-medium space-y-3'>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
            </ul>
        
        </div>

    </div>
  )
}

export default portfolioDetails
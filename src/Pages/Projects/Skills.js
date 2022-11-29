import React from 'react'
import tailwind from '../../img/tailwind.png'
import daisi from '../../img/daisi.jpeg'
// import js from '../../img/js.jpeg'
import react from '../../img/react.png'
import router2 from '../../img/router2.png'
import redux from '../../img/redux.png'

const Skills = () => {

    // const expert = [  Html, CSS, SASS, Bootstrap, Tailwind, DaysiUI, Javascript(es6), React.Js, React-Router, React-
    //     Redux, React-Typescript.]
  return (
    <div className='bg-[#2e3434] py-10 '>
        <h2 className='text-3xl font-bold text-center text-gray-200 my-5'>My Technical Skills</h2>

    <div className="mx-auto text-center">
    <h2 className='text-2xl px-5 mx-auto font-semibold text-gray-200 inline-block border-b-2 border-emerald-500 '>Expertice</h2>
    </div>
    <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-6 my-16 space-x-6 mx-auto max-w-7xl px-10 lg:px-32">

       
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto ">
            <img className='w-full h-full object-cover' src={'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png'} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>CSS3</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={'https://e1.pngegg.com/pngimages/326/868/png-clipart-css3-badge-blue-and-white-css-icon-thumbnail.png'} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>CSS3</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={'https://www.pngfind.com/pngs/m/452-4521456_scss-logo-hd-png-download.png'} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNDaSgakKRGGk_AyydkYaHycuEIbYy8efERw&usqp=CAU'} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={'https://www.rlogical.com/wp-content/uploads/2020/08/icon-botsrap-1.png'} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={tailwind} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={daisi} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={react} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={router2} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>
        <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={redux} alt="" />
            {/* <h2 className='text-xl font-semibold text-gray-200 my-5'>SASS</h2> */}
        </div>

    </div>

    <div className="mx-auto text-center">
    <h2 className='text-2xl px-5 mx-auto font-semibold text-gray-200 inline-block border-b-2 border-emerald-500 '>Comfortable</h2>
    </div>

    <div className="w-32 h-32 bg-black p-4 rounded-sm shadow-lg mx-auto">
            <img className='w-full h-full object-cover' src={redux} alt="" />
           
        </div>


    </div>
  )
}

export default Skills
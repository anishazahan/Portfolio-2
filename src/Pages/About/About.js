import React from 'react'

const About = () => {
  return (
    <div className='bg-[#1D1D1D] py-20'>

        <div className="flex mx-auto max-w-7xl justify-center items-center px-28 relative">

            <div className="h-[550px] relative w-[50%] rounded-md z-10">
                <img className='h-full w-full object-cover rounded-md absolute ' src={'https://c1.wallpaperflare.com/preview/167/600/43/office-business-laptop-paper.jpg'} alt="" />
                <div className="bg-black/25 w-full h-full absolute"></div>
            </div>
            <div className="w-[50%] bg-black p-10 ml-[-5rem] z-20 text-gray-400 font-medium shadow-2xl rounded-sm">
                <h2>I am fronted React Js Developer.I have 2 years work experience.I have fresh knowledge of html,css,bootstrap,tailwind,javascript ES6(comfortable),react.js and familier for express.Js,node Js,Mongodb and other technology.You will get 100% full support of work assured until you are fully satisfied.I have the ability to apply professional and technical knowledge in a challenging environment. Which helps me to improve my skills and experience, to develop efficiency and to constantly learn new things for myself.</h2>
            </div>

        </div>

    </div>
  )
}

export default About
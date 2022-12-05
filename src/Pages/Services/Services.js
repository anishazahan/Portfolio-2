import React from 'react'
import './Services.css'

import responsiveImg from '../../img/responsive.09b5d8c632c66c12f5097bd58913e17a.svg'
import psdToHtml from '../../img/psd-t0-html.3a01686d62467ae549ca72c78cf0d619.svg'
import reactJs from '../../img/react-js.7f0085bc8f0e25f5d589687604cf571d.svg'
import wevDev from '../../img/web_dev.a45b0373053ae1d09da8445bd0f98271.svg'
import webDesign from '../../img/seo.a23bde549aae9337ec68871ccecd4da5.svg'
import userInterface from '../../img/ux.6b4aec0ec6195ec8ba2a20664cb33703.svg'

const Services = () => {



  return (
   
      <div className="bg-black py-10">
          <div className=' px-5 md:px-10 lg:px-20 max-w-7xl mx-auto mt-10 mb-20 '>
        <div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>My  Services</h2>
        </div>
        <p className=' text-center mb-16 text-gray-300'>You will get 100% full service of work assured until you are fully satisfied</p>

        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4 pb-14">
        <div className="box border text-gray-600 border-gray-900 hover:bg-primary hover:text-black duration-500 px-4 pb-5 text-center">
                <img className='img-design' src={responsiveImg} alt="" />
                <h2 className='text-3xl mb-7 service-name'>Responsive design</h2>
                <p className='service-text font-medium'>I will make all responsive designs. I know all clients love responsive design. my all work Responsive Design. As a developer we need to complete Responsive design.  </p>
            </div>
        <div className="box border text-gray-600 border-gray-900 hover:bg-primary hover:text-black duration-500 px-4 pb-5 text-center">
                <img className='img-design' src={webDesign} alt="" />
                <h2 className='text-3xl mb-7 service-name'>UX Design</h2>
                <p className='service-text font-medium'>Have much experience for user interface design andI will create Your beautiful, eye catching and color combination better website. </p>
            </div>
        <div className="box border text-gray-600 border-gray-900 hover:bg-primary hover:text-black duration-500 px-4 pb-5 text-center">
                <img className='img-design' src={psdToHtml} alt="" />
                <h2 className='text-3xl mb-7 service-name'>PSD/Figma To HTML</h2>
                <p className='service-text font-medium'> I will create Your Website PSD to Html,that is raw code of html and css,and that is faster for raw code. </p>
            </div>

        <div className="box border text-gray-600 border-gray-900 hover:bg-primary hover:text-black duration-500 px-4 pb-5 text-center">
                <img className='img-design' src={wevDev} alt="" />
                <h2 className='text-3xl mb-7 service-name'>Mern Application</h2>
                <p className='service-text font-medium'>I have so much experience in Web Development using node js,express.js,mongoose.I will develop full stack web App for your requirement.</p>
            </div>
            <div className="box border text-gray-600 border-gray-900 hover:bg-primary hover:text-black duration-500 px-4 pb-5 text-center">
                <img className='img-design' src={userInterface} alt="" />
                <h2 className='text-3xl mb-7 service-name'> SEO Friendly</h2>
                <p className='service-text font-medium'>I will create your application seo friendly that is faster load and productive using Next.Js react framework. </p>
            </div>
            <div className="box border text-gray-600 border-gray-900 hover:bg-primary hover:text-black duration-500 px-4 pb-5 text-center important-service">
                <img className='img-design' src={reactJs} alt="" />
                <h2 className='text-2xl service-name'>React Application</h2>
                <p className='service-text font-medium'>I will create your website with React.Js.THat is component base Library,for this reason code minimize and faster.I will use,React Router,Custom Hook,UseHook,State,Context API,Usememo,Usereducer and so on. </p>
            </div>
        </div>
    </div>


    <div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>Why you can Chose Me!!!</h2>
        </div>

    {/* <!-- component --> */}
<div class=" max-w-7xl px-10 lg:px-20 mt-20 bg-black mx-auto w-full h-full">
  <div class="relative wrap overflow-hidden p-5 md:p-10 h-full">
    
    {/* <!-- right timeline --> */}
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 hidden md:flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-bold text-lg text-black">1</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-900 text-xl">Web Design and ,React .Js ,Fronted,Junior Mern Stack Developer.</h3>
        
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 hidden md:flex  items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-black font-bold text-lg">2</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-900 text-xl">Cross browser operability,Responsive design for all devices.</h3>
       
      </div>
    </div>
    
    {/* <!-- right timeline --> */}
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 hidden md:flex  items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-bold text-lg text-black">3</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-900 text-xl">Process improvement,workflow optimization.User Requirement Gathering.</h3>
        
      </div>
    </div>
    {/* <!-- left timeline --> */}
    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 hidden md:flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-black font-bold text-lg">4</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-900 text-xl">Fresh, Commentable, Clean Code, Error handling, Debugging, fixing problems.Client Interaction about the project. </h3>
      </div>
    </div>
  </div>
</div>
  


      </div>
    
  )
}

export default Services
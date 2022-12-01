import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { portfolioContext } from '../../App';

const PortfolioDetails = () => {

    

    const { id } = useParams();
    const {portfolio} = useContext(portfolioContext);
    // console.log(portfolio);

    // Get Specific Item With ID
 	const findPortfolio = portfolio.find(item => item.id === id);
     const {name,feature,useTecnology,description,live,code,server,img} = findPortfolio;
     console.log(name)

    // const [portfolioDetail,setPortfolioDetail]= useState([]);
    // useEffect(()=>{
        // const url = `projects.json/${id}`
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>
        //     setPortfolioDetail(data))

    //     axios.get(`projects.json/${id}`)
    //     .then(data=>
    //      {
    //       const findPortfolio =data?.find(portfolio=>portfolio?.id === id)
    //       console.log(findPortfolio);
    //       setPortfolioDetail(findPortfolio);
    //       console.log(data)
    //      }
         
    //      )
    // },[id])
    // // console.log(portfolioDetail);
    

      
  return (
    <div className='bg-black py-20'>

        <div className="max-w-7xl mx-auto px-10">
        <div className=" w-full lg:w-[60%] h-auto">
            <img className='w-full h-full' src={''} alt="" />
        </div>

        <h2 className='font-bold text-2xl lg:text-3xl text-white my-5'>Name : {}</h2>
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

export default PortfolioDetails
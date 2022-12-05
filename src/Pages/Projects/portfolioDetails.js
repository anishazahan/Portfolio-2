import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsCheckLg} from "react-icons/fa";


const PortfolioDetails = () => {

    const {id} = useParams()
    // console.log(id);

    const [portfolioDetail,setPortfolioDetail]= useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/api/project/${id}`
            axios.get(url)
            .then(data =>
                // console.log(data.data)
                setPortfolioDetail(data.data)
               );

           },[id])

      
  return (
    <div className='bg-black py-20'>

        <div className="max-w-7xl mx-auto px-10">
        <div className=" w-full lg:w-[60%] h-auto">
            <img className='w-full h-full' src={portfolioDetail?.img} alt="" />
        </div>

        <h2 className='font-bold text-2xl lg:text-3xl text-white my-5'>Name : { portfolioDetail?.name} </h2>
        <div className=" sm:space-y-4 flex-col md:flex-row md:space-x-6 flex">
        <h2 className='font-semibold underline  text-2xl text-primary my-4'>
            <a href={portfolioDetail.live} target="_blank">Live Link</a>
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
                {/* <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li>
                <li>kjdsf  jkkcajksk  coicuiuiucc</li> */}
                {
                    portfolioDetail.useTecnology?.map(tecnology=> {
                        return <li>{`${tecnology} ,`}</li>
                    } )
                }
            </ul>
        <h2 className='font-semibold text-2xl text-white my-3'>
        Feature :
        </h2>
            
            <ul className=' text-gray-300 ml-3 font-medium space-y-3'>
            {
                    portfolioDetail.description?.map(desc=> {
                        return  <li>{`${desc} `}</li>
                    } )
                }
            </ul>
        
        </div>

    </div>
  )
}

export default PortfolioDetails
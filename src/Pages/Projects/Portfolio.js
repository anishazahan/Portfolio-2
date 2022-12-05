import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SinglePortfolio from './SinglePortfolio';

const Portfolio = () => {
   

    const [portfolios,setPortfolios] = useState([]);

   
    useEffect( ()=>{
        fetch('http://localhost:5000/api/project')
        .then(res => res.json())
        .then(data =>setPortfolios(data));
    }, [])
    // console.log(portfolios)
  

  return (
    <div className='bg-[#1D1D1D] py-20'>
             <div className="service text-center mb-20">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>My  Portfolios</h2>
        </div>

        <div className="max-w-7xl px-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto gap-6">
                {
                    
                    portfolios?.map(portfolio=> <SinglePortfolio key={portfolio._id} portfolio={portfolio}></SinglePortfolio>) 
                }

    
            </div>
            
        </div>


    </div>
  )
}

export default Portfolio
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SinglePortfolio = ({portfolio}) => {

    const {_id} = portfolio;
    console.log(_id);
   const navigate = useNavigate()

  //  const navigatePortfolioDetails =(id)=>{
  //       navigate(`/portfolio/${id}`)
  //  }
  return (
    <div className="border-4 border-primary"  onClick={()=>navigate(`/portfolio/${_id}`)}>
    <div className="relative group">
     <img className='z-10 group-hover:bg-black/50 hover:scale-105 duration-500 overflow-hidden' src={ portfolio?.img} alt="" />
     <div className="absolute w-full h-full z-20"></div>
     </div>
   
        </div>
  )
}

export default SinglePortfolio
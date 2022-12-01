import React from 'react'
import { Link } from 'react-router-dom'

const SinglePortfolio = ({project}) => {
    // console.log(project);
    const {id} = project
    // console.log(id)
  return (
    <div key={project.id} className="border-4 border-primary">
    <Link to={`/portfolio-details/${id}`}>
    <div className="relative group">
     <img className='z-10 group-hover:bg-black/50 hover:scale-105 duration-500 overflow-hidden' src={ project?.img} alt="" />
     <div className="absolute w-full h-full z-20"></div>
     </div>
    </Link>
        </div>
  )
}

export default SinglePortfolio
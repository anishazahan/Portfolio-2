import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    useEffect( ()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data =>setProjects(data));
    }, [])
    console.log(projects)
  return (
    <div className='bg-[#1D1D1D] py-20'>
             <div className="service text-center mb-20">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>My  Portfolios</h2>
        </div>


        <div className="max-w-7xl px-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto gap-6">
                {
                     projects&&projects.map(project=> {
                        return <div key={project.id} className="border-4 border-primary">
                       <Link to='/'>
                       <div className="relative group">
                        <img className='z-10 hover:bg-black/50 cursor-pointer' src={ project?.img} alt="" />
                        <div className="absolute w-full h-full z-20"></div>
                        </div>
                       </Link>
                           </div>
                     } ).slice(0,6)
                }
            </div>
        </div>


    </div>
  )
}

export default Portfolio
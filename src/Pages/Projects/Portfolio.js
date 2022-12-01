import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SinglePortfolio from './SinglePortfolio';

const Portfolio = () => {
    const [allProjects,setAllProjects]=useState(false);

    const [projects, setProjects] = useState([]);

    useEffect( ()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data =>setProjects(data));
    }, [])
    // console.log(projects)
    // const [id,img] = projects;
  return (
    <div className='bg-[#1D1D1D] py-20'>
             <div className="service text-center mb-20">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>My  Portfolios</h2>
        </div>


        <div className="max-w-7xl px-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto gap-6">
                {
                    allProjects ? projects?.map(project=> <SinglePortfolio key={project.id} project={project}></SinglePortfolio>) :
                     projects.slice(0,6).map(project=> <SinglePortfolio key={project.id} project={project}></SinglePortfolio> )
                }

    
            </div>
            <div className="mx-auto w-full my-5 text-right flex justify-end text-secondary font-medium  ">
          <button className='link text-white mr-auto' onClick={()=>{setAllProjects(!allProjects)}}>  {allProjects? 'see less':'See More'}</button>
       </div>
        </div>


    </div>
  )
}

export default Portfolio
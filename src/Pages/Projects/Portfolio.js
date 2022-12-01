import React, { useEffect, useState } from 'react'

const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    useEffect( ()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data =>setProjects(data));
    }, [])
    console.log(projects)
  return (
    <div className='bg-black py-10'>
             <div className="service text-center mb-10">
        <h2 className=' servicing-heading text-3xl md:p-7 text-gray-300'>My  Portfolios</h2>
        </div>


        <div className="max-w-7xl px-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
                {
                        projects.map
                }
            </div>
        </div>


    </div>
  )
}

export default Portfolio
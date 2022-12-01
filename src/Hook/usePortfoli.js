
import { useEffect, useState } from "react";

const usePortfolio = () =>{
    const [portfolio, setPortfolio] = useState([]);
    useEffect(()=>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setPortfolio(data))
    },[])
    return {portfolio,setPortfolio} 
}
export default usePortfolio;
import "./styling/academics.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
export const Acad=()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
    return(
        <>
          
          <h1 className="text-warning text-bolder mars">EDUCATION</h1>   
  
        <img src="edu2.jpg" className="img-fluid shadow-lg mt-5" data-aos="fade-right"/>
        
   
      
        </>

    );
}
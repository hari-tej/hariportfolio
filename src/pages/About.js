import React from 'react';
import "./styling/about.css"
import {useTypewriter,Cursor } from "react-simple-typewriter";
import img from "../images/final.jpg";



export const About=()=>{
    const [text] = useTypewriter({
        words:["Final Year Student","Web Developer","Coder"],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
        
    });

    
    return(
        <div >
      
         
         <div className="image">
         <h1 id="intro" className="text-warning text-bolder  ">ABOUT ME</h1>  
             <img src={img} className="img-fluid" alt=".."/>
           <div className="textarea">
            <br></br>
            <span >
            
            <h1 style={{color:"white",fontSize:"38px"}} >Hello! I'm </h1>
             <div style={{color:"white",fontSize:"34px",fontFamily:"Montserrat",textShadow:"5px 5px 5px purple"}}>  <b>Chegondi Hari Teja </b>
             </div>
            </span>
             
          
             <h3 style={{margin:'50px',color:'white'}}>
            I'm a 
            <span style={{color:"yellow",fontSize:"31px"}}> <b>{text}</b>            
            </span>
            <span><Cursor cursorStyle='|'/></span>
            
            </h3>
            <div className="container-lg">
            <h4><p className='text-light text-bolder text-start'>I am currently pursuing my final year UG program in Computer Science and Engineering 
            from National Institute of Technology Mizoram. I am very much interested in
            web development. I am also proficient in coding in Java programming language.
            I have a good idea about backend.I am a motivated and fast leaner keen of learning new 
            Technologies.</p></h4><br></br>
            </div>
            <div className="cardlo" >
         
            <a className="btn border rounded border-dark border-2 p-4 fs-larger" style={{color:"white",textDecoration:"none"}}  href='Hari-Resume.pdf' download='resume.pdf'><b><h3>Download Resume</h3></b></a>
            </div>
            </div>
        
         </div>   
        
      
          
        </div>
        
        
    );
}
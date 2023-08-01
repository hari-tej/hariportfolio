import {Link} from "react-router-dom";
import './styling/navbar.css';
import {useState} from "react";
export const Navbar=()=>{
   const[colour1,setColour1]=useState("warning");
   const[colour2,setColour2]=useState("light");
   const[colour3,setColour3]=useState("light");
   const[colour4,setColour4]=useState("light");
   const[colour5,setColour5]=useState("light");
   const changecolor1=()=>{
     setColour1("warning");
     setColour2("light");
     setColour3("light");
     setColour4("light");
     setColour5("light");

   }
   const changecolor2=()=>{
   
    setColour1("light");
    setColour2("warning");
    setColour3("light");
    setColour4("light");
    setColour5("light");
       
  }
  const changecolor3=()=>{
    setColour1("light");
     setColour2("light");
     setColour3("warning");
     setColour4("light");
     setColour5("light");
  }
  const changecolor4=()=>{
    setColour1("light");
     setColour2("light");
     setColour3("light");
     setColour4("warning");
     setColour5("light");
  }
  const changecolor5=()=>{
    setColour1("light");
    setColour2("light");
    setColour3("light");
    setColour4("light");
    setColour5("warning");
  }
    return (
      <>
     
      <nav className="navbar navbar-expand-lg navbar-light  ">
         <div className="container-fluid pt-5   pb-2  mt-0  ">
            <h4 className="navbar-brand fw-bolder text-light ">CHEGONDI HARI TEJA</h4>
             <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon my-0"></span>
                
             </button>
         
             <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
             <div class="offcanvas-header">
             <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button> 
             </div>
             <div class="offcanvas-body ">
             <ul className="navbar-nav  ms-auto align-items-center-lg ">
             
             <li className="nav-item">
                  <Link to="/About"> <a className={`nav-link text-${colour1} fw-bold  `} onClick={changecolor1} href="#">About</a></Link> 
                  
               </li>
               
              <li className="nav-item">
                  <Link to="/academics"> <a className={`nav-link text-${colour2} fw-bold`} onClick={changecolor2} href="#">Education</a></Link> 
               </li>
             <li className="nav-item">
                 <Link to="/skills"> <a className={`nav-link text-${colour3} fw-bold`} onClick={changecolor3} href="#">Skills</a> </Link> 
               </li>
               <li className="nav-item">
                 <Link to="/project"><a className={`nav-link text-${colour4} fw-bold`} onClick={changecolor4} href="#">Projects</a></Link>
                  
               </li>
               <li className="nav-item">
                <Link to="/contact"> <a className={`nav-link text-${colour5} fw-bold`} onClick={changecolor5} href="#">Contact</a></Link>
                 
               </li>
               
                         
               
             
           </ul>
           </div>
       </div>
    </div>
</nav>

</>   
    );
}




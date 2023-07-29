import "./styling/projects.css";
import { FaGithub,FaGlobe } from "react-icons/fa";
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
export const Project=()=>{
    useEffect(()=>{
      Aos.init({duration:2000});
    },[])
    return (
      <>
        <div className="container-lg">
        <h1 className="text-warning text-bolder mb-5"> MY PROJECTS</h1>
        <div className="col my-5">
        <div class="card shadow-lg">
        <h2 className="text-center text-primary mt-4  fs-bolder">CS-Mitra</h2>
             <div class="card-body">
             <img src="css.png" className="img-fluid "  alt="..." />
              <img src="first-b.png" className="img-fluid "  alt="..." />
                  
                   <ul className="align-items-center mt-5">
                   <li className="text-start ms-2 "><h5>This is a website that is designed for the needs of the students.</h5></li>
                   <li className="text-start ms-2"><h5>It conatains youtube links and PYQs of all subjects from 2nd, 3rd and 4th years</h5></li>
                   <li className="text-start ms-2"><h5>It also contains a section for placement which contains a number of youtube resources for their preperation</h5></li>
                   <li className="text-start ms-2"><h5>It also contains a section where they can connect to their seniors for their queries.</h5></li>
                   </ul>
                    <h5 className="text-start ms-4 me-2 text-primary">Technologies used: Html,Css-(Bootstrap),React.js,Node.js,MongoDb</h5><br></br>
                   <h5 className="text-start ms-5 ">Frontend: <a href="https://github.com/hari-tej/frontguide.git" target="_blank"> <FaGithub size="50px" color="red"/></a> </h5><br></br>
                   <h5 className="text-start ms-5">Backend:  <a href="https://github.com/hari-tej/backendguide.git" target="_blank"> <FaGithub size="50px" color="black"/></a></h5><br></br> 
                   
                   <h5 className="text-start ms-5 mb-5">Website:  <a href="https://shiny-madeleine-3f7aab.netlify.app/" target="_blank"><FaGlobe size="50px" /></a></h5><br></br>  
              </div>
        </div>
       </div>
       <div className="col">
        <div class="card my-5 shadow-lg">
           <h2 className="text-center text-primary mt-4  fs-bolder">CINEBUZZ</h2>
             <div class="card-body">
             <img src="second.png" className="img-fluid"  alt="..." />
              <img src="second-b.png" className="img-fluid "  alt="..." />
                  
                   <ul className="align-items-center mt-5">
                   <li className="text-start ms-2 "><h5>This is a movie review website.</h5></li>
                   <li className="text-start ms-2"><h5>It contains a list of movies in three langauges-English,Hindi,Telugu</h5></li>
                   <li className="text-start ms-2"><h5>Any one can post his/her review for a particular movie and every post will be displayed.</h5></li>
                   <li className="text-start ms-2"><h5>One can create a post, edit and also delete the post</h5></li>
                   </ul>
                   <h5 className="text-start ms-4 me-2 text-primary">Technologies used: Html,Css-(Bootstrap),React.js,Node.js,MongoDb</h5><br></br>
   
                   <h5 className="text-start ms-5">Frontend: <a href="https://github.com/hari-tej/frontend_review.git" target="_blank" > <FaGithub size="50px" color="red"/></a> </h5><br></br>
                   <h5 className="text-start ms-5">Backend:  <a href="https://github.com/hari-tej/backend_review.git" target="_blank"> <FaGithub size="50px" color="black"/></a></h5> <br></br>
                   
                   <h5 className="text-start ms-5 mb-5">Website:  <a href="https://starlit-caramel-de79dd.netlify.app/" target="_blank"> <FaGlobe size="50px" /> </a></h5><br></br>
                  
             </div>
       </div>
       </div>
     
       </div>
       </>
    );
}


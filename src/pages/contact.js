import './styling/contact.css';
import {FaWhatsapp,FaLinkedin} from "react-icons/fa"
import emailjs from "emailjs-com";
import {SiGmail} from "react-icons/si"
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'



export const Contact=()=>{
 
   
    useEffect(()=>{
       Aos.init({duration:2300});
    },[]);

   
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1ezcdeu','template_5803nbc', e.target,'sUieMFWZtB200oM63')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
      }
    return (
      <>
        <div  className="main">
           
          <h1 className="text-warning text-bolder "> CONTACT ME</h1>
          <div className="container-lg"> 
          <p><h3 className="text-center my-3">Hello! it would be a great opportunity to be working with you. 
          You can reach me out through the following mediums. I really appreciate your time!</h3></p>
          </div>  
         <div className="contact">
         <br></br>
         
         <button id="one"><a href="https://wa.me/917005039663?text=Hello! Hari teja" target="_blank"><FaWhatsapp size="40px" color="white" /></a></button>
         <h4>Whatsapp</h4>
        
         
         <button id="two"><a href="https://www.linkedin.com/in/chegondi-hari-teja-a4573221a" target="_blank"> <FaLinkedin size="40px" color="white" /> </a></button>  
         <h4>Linkedin</h4>
         
         
         <button id="three"><a href="mailto:chegondihariteja@gmail.com" target="_blank"><SiGmail size="40px" color="white" /></a> </button>
         <h4>Email</h4>
         
         </div>
         <br></br>
         <br></br>
         <br></br>

         
         <div className="container-lg">
          
        <div  data-aos="fade-up">
         <div className=" bg-dark py-5 px-0 border rounded border-dark text-center">
                <h2 className="text-warning"><b>CONTACT FORM</b></h2><br></br>
                   <form onSubmit={sendEmail}>
                    <label><h3>Username</h3></label><br></br>
                    <input type="text" name="username" className="px-sm-4"  placeholder="username" /><br></br><br></br>
                     <label><h3>Email</h3></label><br></br>
                    <input type="email" name="email" className="px-sm-4"  placeholder="email" /><br></br><br></br>
                    <label><h3>Message</h3></label><br></br>
                    <textarea  className="px-sm-4" rows="8" cols="20" height="100" width="100" placeholder="message" name="message"></textarea><br></br>
                     <div>
                     <button >Submit</button>
                     </div>
                   </form>
            </div>
            </div>
       </div>
           </div>
          
       </>
    );
}
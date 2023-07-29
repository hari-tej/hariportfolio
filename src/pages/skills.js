import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import './styling/skills.css';


export const Skills=(props)=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    })

    return (
        <div className="house">
      
        <div className="skills">
          <h1 className="text-warning text-bolder">MY SKILLS</h1><br></br>
                                               
             <div className="skills-area">
                <div className="skill">
                    <div className="skill-title"><h2>HTML</h2> </div>
                        <div className="skill-bar"> </div>
                            <div className="html skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                      
                   
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>CSS</h2></div>
                        <div className="skill-bar"> </div>
                            <div className="css skill-fill">
                                <span className="skill-percent">60%</span>
                            </div>
                       

                    

                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>Javascript</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="javascript skill-fill">
                                <span className="skill-percent">50%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>React</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="react skill-fill">
                                <span className="skill-percent">50%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>Node.js</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="node skill-fill">
                                <span className="skill-percent">40%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>MongoDB</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="mongodb skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>MySQL</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="sql skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>Bootstrap</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="bootstrap skill-fill">
                                <span className="skill-percent">53%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>Java</h2></div>
                        <div className="skill-bar"></div>
                            <div className="java skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                        
                  
                </div>
                <br></br>
                <div className="skill">
                    <div className="skill-title"><h2>Python</h2> </div>
                        <div className="skill-bar"></div>
                            <div className="python skill-fill">
                                <span className="skill-percent">60%</span>
                            </div>
                        
                  
                </div>
             </div>

        
        </div>  
        </div> 
        
         
           
   
    );
  

}
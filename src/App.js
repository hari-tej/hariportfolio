import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import {Skills} from "./pages/skills"
import {Project} from "./pages/project"
import {Contact} from "./pages/contact"
import {Error} from "./pages/error"
import {Navbar} from "./pages/navbar"
import { About } from './pages/About';
import { Acad } from './pages/academics';
import { Footer } from './pages/footer';


function App() {
 
  return (
    <div className="App img-fluid">
     
      <Router>
           <Navbar/>
         
        <Routes>
          
          <Route path="/" element={<About />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/academics" element={<Acad />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/project" element={<Project  />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Error/>}/>
          
        </Routes>
          <Footer/>
      </Router>
     
         
    </div>
  );
}

export default App;

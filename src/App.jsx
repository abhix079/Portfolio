import './App.css';
import NoiseCanvasBackground from './components/NoiseCanvasBackground';
import HomePage from './components/HomePage';
import './components/Navbar';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';




function App(){
  return (
    <>
    <NoiseCanvasBackground/>
  <div className="div">
  <Navbar/>
     <HomePage/>
     <Skills/>
     <Projects/>
     <Experience/>
     <Contact/>
    
  </div>
    
    </>
  );
}

export default App;
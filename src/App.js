import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import TaskForce from './Components/Taskforce/Project'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Education/>
      <Skills/>
      <TaskForce/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

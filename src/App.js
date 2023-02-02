import "./Assets/Style/style.css"
import Navbar from './Components/Navbar'
import Herobanner from "./Components/Herobanner";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ContactMe from "./Components/ContactMe"
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Herobanner />
      <Skills />
      <Projects />
      <About />
      <ContactMe />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
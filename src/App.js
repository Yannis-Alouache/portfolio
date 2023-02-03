import "./Assets/Style/style.css"
import 'animate.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home.js";
import ProjectDetail from "./Pages/ProjectDetail.js";
import projects from "./data/projectDetail.json"




function App() {

  let projectDetailAngryLlama = projects[0]

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/angry-llama" element={<ProjectDetail {...projectDetailAngryLlama} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
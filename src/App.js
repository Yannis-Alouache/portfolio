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
  let projectMyCastleVania = projects[1]
  let projectObarbeuc = projects[2]
  let projectPokeManiaque = projects[3]
  let projectDrivetty = projects[4]

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/angry-llama" element={<ProjectDetail {...projectDetailAngryLlama} />} />
          <Route path="/project/my-castlevania" element={<ProjectDetail {...projectMyCastleVania} />} />
          <Route path="/project/obarbeuc" element={<ProjectDetail {...projectObarbeuc} />} />
          <Route path="/project/poke-maniaque" element={<ProjectDetail {...projectPokeManiaque} />} />
          <Route path="/project/drivetty" element={<ProjectDetail {...projectDrivetty} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
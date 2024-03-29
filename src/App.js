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
  let projectPokeManiaque = projects[3]
  let projectDrivetty = projects[4]
  let projectDetailAngryLlama = projects[0]
  let projectETaxi = projects[5]
  let projectFalconMarketing = projects[6]
  let projectMyCarz = projects[7]
  let projectMyCastleVania = projects[1]
  let projectObarbeuc = projects[2]

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/e-taxi" element={<ProjectDetail {...projectETaxi} />} />
          <Route path="/project/angry-llama" element={<ProjectDetail {...projectDetailAngryLlama} />} />
          <Route path="/project/my-castlevania" element={<ProjectDetail {...projectMyCastleVania} />} />
          <Route path="/project/obarbeuc" element={<ProjectDetail {...projectObarbeuc} />} />
          <Route path="/project/poke-maniaque" element={<ProjectDetail {...projectPokeManiaque} />} />
          <Route path="/project/drivetty" element={<ProjectDetail {...projectDrivetty} />} />
          <Route path="/project/falcon-marketing" element={<ProjectDetail {...projectFalconMarketing} />} />
          <Route path="/project/mycarz" element={<ProjectDetail {...projectMyCarz} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
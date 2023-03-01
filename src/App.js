import Line from "./components/Line";
import Footer from "./scenes/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

import ScrollToTop from "./helpers/skrollToTOp";

function App() {
  return (
    <div className="app ">
      <Router>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Home/>} />
            <Route path="/project/:id" element={<Project/>} />
          </Routes>
        <Line/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

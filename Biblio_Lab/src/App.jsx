import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./components/Accueil";
import Bibliothèques from "./components/bibliothèques/Bibliothèques";
import Infos from "./components/Infos"
import PolitiqueDeConfidentialité from "./components/PolitiqueDeConfidentialité";
import Newsletter from "./components/Newsletter";




function App() {
    return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/library" element={<Bibliothèques />} />
              <Route path="/about" element={<Infos />} />
              <Route path="/pdc" element={<PolitiqueDeConfidentialité />} />
              <Route path="/newsletter" element={<Newsletter />} />
            </Routes> <br />
          </div>
          <Footer />
        </div>
      </Router>
    );
  
}

export default App;

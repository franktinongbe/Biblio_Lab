import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./components/Accueil";
import ContactezNous from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Infos from "./components/Infos";
import Bibliothèques from "./components/bibliothèques/Bibliothèques";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import PolitiqueDeConfidentialité from "./components/PolitiqueDeCondifentialité";
import Newsletter from "./components/Newsletter";
import Bibliothèque1 from "./components/bibliothèques/Bibliothèque1";
import Bibliothèque2 from "./components/bibliothèques/Bibliothèque2";
import Bibliothèque3 from "./components/bibliothèques/Bibliothèque3";
import Bibliothèque4 from "./components/bibliothèques/Bibliothèque4";
import Bibliothèque5 from "./components/bibliothèques/Bibliothèque5";
import Bibliothèque6 from "./components/bibliothèques/Bibliothèque6";
import Bibliothèque7 from "./components/bibliothèques/Bibliothèque7";
import Bibliothèque8 from "./components/bibliothèques/Bibliothèque8";
import Home from "./components/Home";
import AdminLivres from "./components/AdminLivres";
import RouteAdmin from "./components/RouteAdmin";

// Layout avec Navbar et Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarPaths = ["/"]; // seule la page d'accueil n'affiche pas la navbar

  return (
    <div className="d-flex flex-column min-vh-100" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <div className="flex-grow-1">{children}</div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil sans Navbar */}
        <Route path="/" element={<Home />} />

        {/* Pages avec Navbar via Layout */}
        <Route path="/Sign in" element={<Layout><Connexion /></Layout>} />
        <Route path="/Contactez-nous" element={<ContactezNous />} />
        <Route path="/Log in" element={<Layout><Inscription /></Layout>} />
        <Route path="/accueil" element={<Layout><Accueil /></Layout>} />
        <Route path="/library" element={<Layout><Bibliothèques /></Layout>} />
        <Route path="/library1" element={<Layout><Bibliothèque1 /></Layout>} />
        <Route path="/library2" element={<Layout><Bibliothèque2 /></Layout>} />
        <Route path="/library3" element={<Layout><Bibliothèque3 /></Layout>} />
        <Route path="/library4" element={<Layout><Bibliothèque4 /></Layout>} />
        <Route path="/library5" element={<Layout><Bibliothèque5 /></Layout>} />
        <Route path="/library6" element={<Layout><Bibliothèque6 /></Layout>} />
        <Route path="/library7" element={<Layout><Bibliothèque7 /></Layout>} />
        <Route path="/library8" element={<Layout><Bibliothèque8 /></Layout>} />
        <Route path="/about" element={<Layout><Infos /></Layout>} />
        <Route path="/pdc" element={<Layout><PolitiqueDeConfidentialité /></Layout>} />
        <Route path="/newsletter" element={<Layout><Newsletter /></Layout>} />
        <Route path="/admin" element={<AdminLivres />} />
      </Routes>
    </Router>
  );
}

export default App;

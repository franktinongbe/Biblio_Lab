import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./components/Accueil";
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
import Home from "./components/Home";
import AdminLivres from "./components/AdminLivres";
import RouteAdmin from "./components/RouteAdmin";


// Fonction pour afficher la Navbar uniquement sur les pages qui ne sont pas "/","/inscription" et "/connexion"
const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarPaths = ["/", "/Log in", "/Sign in"]; // Liste des pages sans Navbar

  return (
    <div className="d-flex flex-column min-vh-100">
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <div className="flex-grow-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/accueil" element={<Layout><Accueil /></Layout>} />
        <Route path="/library" element={<Layout><Bibliothèques /></Layout>} />
        <Route path="/library1" element={<Layout><Bibliothèque1 /></Layout>} />
        <Route path="/library2" element={<Layout><Bibliothèque2 /></Layout>} />
        <Route path="/library3" element={<Layout><Bibliothèque3 /></Layout>} />
        <Route path="/library4" element={<Layout><Bibliothèque4 /></Layout>} />
        <Route path="/about" element={<Layout><Infos /></Layout>} />
        <Route path="/Sign in" element={<Layout><Connexion /></Layout>} />
        <Route path="/Log in" element={<Layout><Inscription /></Layout>} />
        <Route path="/pdc" element={<Layout><PolitiqueDeConfidentialité /></Layout>} />
        <Route path="/newsletter" element={<Layout><Newsletter /></Layout>} />
        <Route path="/admin" element={  <AdminLivres />} />
      </Routes>
    </Router>
  );
}

export default App;

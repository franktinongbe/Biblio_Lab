import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./components/Accueil";
import ContactezNous from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Infos from "./components/Infos";
import Bibliothèques from "./components/bibliothèques/Bibliothèques";
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
import SpotPub from "./components/SpotPub"; 
import Catalogue from './components/Catalogue';
import BookList from './components/BookList';
import FAQ from "./components/Faq";

// Layout avec Navbar et Footer
const Layout = ({ children }) => {
  const location = useLocation();
  // La page d'accueil (Home) n'affiche pas la navbar généralement
  const noNavbarPaths = ["/"]; 

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
        {/* Page d'entrée (Splash screen / Home) */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* --- ROUTES PRINCIPALES --- */}
        <Route path="/accueil" element={<Layout><Accueil /></Layout>} />
        <Route path="/about" element={<Layout><Infos /></Layout>} />
        <Route path="/Contactez-nous" element={<Layout><ContactezNous /></Layout>} />
        
        {/* --- CATALOGUE ET LIVRES --- */}
        <Route path="/catalogue/:biblioId" element={<Layout><Catalogue /></Layout>} />
        <Route path="/books/:category" element={<Layout><BookList /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />

        {/* --- RESEAU BIBLIOTHEQUES --- */}
        <Route path="/library" element={<Layout><Bibliothèques /></Layout>} />
        <Route path="/library1" element={<Layout><Bibliothèque1 /></Layout>} />
        <Route path="/library2" element={<Layout><Bibliothèque2 /></Layout>} />
        <Route path="/library3" element={<Layout><Bibliothèque3 /></Layout>} />
        <Route path="/library4" element={<Layout><Bibliothèque4 /></Layout>} />
        <Route path="/library5" element={<Layout><Bibliothèque5 /></Layout>} />
        <Route path="/library6" element={<Layout><Bibliothèque6 /></Layout>} />
        <Route path="/library7" element={<Layout><Bibliothèque7 /></Layout>} />
        <Route path="/library8" element={<Layout><Bibliothèque8 /></Layout>} />

        {/* --- AUTRES PAGES --- */}
        <Route path="/pdc" element={<Layout><PolitiqueDeConfidentialité /></Layout>} />
        <Route path="/newsletter" element={<Layout><Newsletter /></Layout>} />
        <Route path="/spotpub" element={<Layout><SpotPub /></Layout>} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
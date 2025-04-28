import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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

// Layout avec Navbar et Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarPaths = ["/", "/Sign in", "/Log in"]; // sans Navbar

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
        {/* Pages sans Navbar (pas de Layout) */}
        <Route path="/" element={<Home />} />
        <Route path="/Sign in" element={<Connexion />} />
        <Route path="/Log in" element={<Inscription />} />

        {/* Pages avec Navbar via Layout */}
        <Route path="/accueil" element={<Layout><Accueil /></Layout>} />
        <Route path="/library" element={<Layout><Bibliothèques /></Layout>} />
        <Route path="/library1" element={<Layout><Bibliothèque1 /></Layout>} />
        <Route path="/library2" element={<Layout><Bibliothèque2 /></Layout>} />
        <Route path="/library3" element={<Layout><Bibliothèque3 /></Layout>} />
        <Route path="/library4" element={<Layout><Bibliothèque4 /></Layout>} />
        <Route path="/about" element={<Layout><Infos /></Layout>} />
        <Route path="/pdc" element={<Layout><PolitiqueDeConfidentialité /></Layout>} />
        <Route path="/newsletter" element={<Layout><Newsletter /></Layout>} />
        <Route path="/admin" element={<AdminLivres />} />
      </Routes>
    </Router>
  );
}

export default App;

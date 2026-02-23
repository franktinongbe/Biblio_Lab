import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, ButtonGroup, Container } from 'react-bootstrap';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  // Gestion du scroll pour un effet collant transparent/opaque
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const navLinkStyle = (path) => ({
    fontFamily: "'Montserrat', sans-serif",
    textDecoration: "none",
    fontSize: "1rem",
    color: location.pathname === path ? caebOrange : "white",
    fontWeight: "600",
    padding: "0.5rem 1rem",
    transition: "all 0.3s ease",
    position: "relative"
  });

  return (
    <>
      <header 
        style={{ 
          backgroundColor: scrolled ? caebBlue : "rgba(29, 79, 154, 0.95)",
          height: '90px', 
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1100,
          transition: "all 0.4s ease",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
          backdropFilter: "blur(10px)"
        }}
        className="d-flex align-items-center"
      >
        <Container className="d-flex justify-content-between align-items-center">
          
          {/* LOGO SECTION */}
          <div className="d-flex align-items-center">
            <Link to="/" className="text-decoration-none">
              <div className="logo-container"
                style={{ 
                  backgroundColor: "white", 
                  width: scrolled ? "60px" : "70px", 
                  height: scrolled ? "60px" : "70px", 
                  borderRadius: "50%", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                  padding: "8px"
                }}
              >
                <img src="/images/logoc.png" alt="C.A.E.B." style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </Link>
            {!isMobile && (
              <div className="ms-3 text-white">
                <h5 className="mb-0 fw-bold" style={{ letterSpacing: "1px" }}>CAEB</h5>
                <small style={{ fontSize: "0.7rem", opacity: 0.8 }}>Réseau des Bibliothèques</small>
              </div>
            )}
          </div>

          {/* DESKTOP NAV */}
          {!isMobile ? (
            <nav className="d-flex align-items-center gap-3">
              <Link style={navLinkStyle("/accueil")} to="/accueil" className="nav-hover-effect">Accueil</Link>
              
              <Link style={navLinkStyle("/about")} to="/about">Qui sommes-nous?</Link>

              <Dropdown as={ButtonGroup} className="custom-dropdown">
                <Link to="/library" style={navLinkStyle("/library")}>Bibliothèques</Link>
                <Dropdown.Toggle split variant="transparent" style={{ color: "white", border: "none" }} />
                <Dropdown.Menu className="shadow-lg border-0 mt-3" style={{ borderRadius: "12px", overflow: "hidden" }}>
                  <Dropdown.Item as={Link} to="/library1">Porto-Novo 1</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/library2">Porto-Novo 2</Dropdown.Item>
                  <Dropdown.Item className="border-top" as={Link} to="/library">Toutes les bibliothèques</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              
              <Link 
                to="/newsletter"
                className="btn ms-3 px-4 shadow-sm"
                style={{ 
                  backgroundColor: caebOrange, 
                  color: "white", 
                  fontWeight: "bold", 
                  borderRadius: "30px",
                  transition: "all 0.3s ease",
                  border: "none"
                }}
                onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
                onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
              >
                S'abonner
              </Link>
            </nav>
          ) : (
            <button className="btn text-white p-0" onClick={() => setToggleMenu(true)}>
              <HiOutlineMenuAlt3 size={40} />
            </button>
          )}
        </Container>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          right: toggleMenu ? 0 : "-100%",
          width: "100%",
          height: "100vh",
          backgroundColor: caebBlue,
          zIndex: 2000,
          transition: "0.5s cubic-bezier(0.77,0.2,0.05,1.0)",
          display: "flex",
          flexDirection: "column",
          padding: "40px"
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "50%", width: "60px" }}>
            <img src="/images/logoc.png" alt="logo" className="img-fluid" />
          </div>
          <button className="btn text-white" onClick={() => setToggleMenu(false)}>
            <HiOutlineX size={40} />
          </button>
        </div>
        
        <nav className="d-flex flex-column gap-4">
  {[
    { label: "Accueil", path: "/accueil" },
    { label: "Bibliothèques", path: "/library" },
    { label: "Qui sommes-nous", path: "/about" }, 
    { label: "S'abonner", path: "/newsletter" }     
  ].map((item, idx) => (
    <Link 
      key={idx}
      to={item.path}
      onClick={() => setToggleMenu(false)}
      className="text-white text-decoration-none display-6 fw-bold"
      style={{ 
        transition: "0.3s ease",
        display: "block" 
      }}
      onMouseOver={(e) => {
        e.target.style.paddingLeft = "20px";
        e.target.style.color = "#f2994a"; // Petit bonus : changement de couleur au survol
      }}
      onMouseOut={(e) => {
        e.target.style.paddingLeft = "0";
        e.target.style.color = "white";
      }}
    >
      {item.label}
    </Link>
  ))}
</nav>
      </div>

      {/* Spacer pour ne pas cacher le contenu sous la navbar fixe */}
      <div style={{ height: "90px" }}></div>

      <style>{`
        .nav-hover-effect:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #f2994a;
          transition: width .3s ease;
          -webkit-transition: width .3s ease;
        }
        .nav-hover-effect:hover:after {
          width: 100%;
          left: 0;
          background: #f2994a;
        }
        .custom-dropdown .dropdown-item:hover {
          background-color: #f2994a !important;
          color: white !important;
        }
      `}</style>
    </>
  );
}

export default Navbar;
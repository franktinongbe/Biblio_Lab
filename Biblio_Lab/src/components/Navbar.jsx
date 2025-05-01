import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const linkStyle = {
    fontFamily: "Montserrat",
    backgroundColor: "black",
    textDecoration: "none",
    fontSize: "1.2rem",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem"
  };

  return (
    <>
      {isMobile && (
        <div
          className="sidebar"
          style={{
            position: "fixed",
            top: 0,
            left: toggleMenu ? 0 : "-250px",
            height: "100%",
            width: "250px",
            background: "linear-gradient(to bottom, #f2994a, #2d9cdb)",
            color: "white",
            padding: "2rem 1rem",
            transition: "left 0.3s ease-in-out",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative" }}>
            <h4>Menu</h4>
            <button
              onClick={handleNavbar}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                position: "absolute",
                top: "0",
                right: "0",
                cursor: "pointer"
              }}
            >
              &times;
            </button>
          </div>
          <nav className="d-flex flex-column gap-3 mt-4">
            <Link className="text-white text-decoration-none" to="/accueil">Accueil</Link>
            <Link className="text-white text-decoration-none" to="/library">Bibliothèques</Link>
            <Link className="text-white text-decoration-none" to="/Sign in">Inscription</Link>
            <Link className="text-white text-decoration-none" to="/Log in">Connexion</Link>
            <Link className="text-white text-decoration-none" to="/about">Infos</Link>
          </nav>
        </div>
      )}

      <header className="d-flex justify-content-between align-items-center text-white w-auto px-5" style={{ background: 'linear-gradient(to right, #f2994a, #2d9cdb)', padding: '10px 0' }}>
        {isMobile && (
          <button
            type="button"
            className="navbar-toggler-btn btn"
            onClick={handleNavbar}
            style={{ background: "transparent", border: "none" }}
          >
            <HiOutlineMenuAlt3 size={35} style={{ color: "#fff" }} />
          </button>
        )}

        <img src="images/logo.png" alt="Logo" style={{ maxWidth: "200px", maxHeight: "300px" }} />

        {!isMobile && (
          <nav className="d-flex gap-4 align-items-center">
            <Link style={linkStyle} to="/accueil">Accueil</Link>

            {/* Un seul dropdown pour les bibliothèques */}
            <ButtonGroup>
  <Link to="/library" style={linkStyle}>
    Bibliothèques
  </Link>
  <DropdownButton
    as={ButtonGroup}
    id="dropdown-split"
    variant="dark"
    title="▼"
    style={{ ...linkStyle, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
    menuVariant="dark"
  >
    <Dropdown.Item as={Link} to="/library1">Bibliothèque 1</Dropdown.Item>
    <Dropdown.Item as={Link} to="/library2">Bibliothèque 2</Dropdown.Item>
    <Dropdown.Item as={Link} to="/library3">Bibliothèque 3</Dropdown.Item>
    <Dropdown.Item as={Link} to="/library4">Bibliothèque 4</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>


            <Link style={linkStyle} to="/about">Infos</Link>
            <Link style={linkStyle} to="/Sign in">Connexion</Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;

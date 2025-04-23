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

    // Modern method
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

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
            backgroundColor: "#212529",
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
            <Link className="text-light" style={{ textDecoration: "none" }} to="/">Accueil</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/library">Bibliothèques</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/library1">Bibliothèque 1</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/library2">Bibliothèque 2</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/library3">Bibliothèque 3</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/library4">Bibliothèque 4</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/Sign in">Inscription</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/Log in">Connexion</Link>
            <Link className="text-light" style={{ textDecoration: "none" }} to="/about">Infos</Link>
          </nav>
        </div>
      )}

      <header className="d-flex justify-content-between align-items-center text-light w-auto px-5" style={{ backgroundColor: '#fd7e14' }}>
        {isMobile && (
          <button
            type="button"
            className="navbar-toggler-btn btn"
            onClick={handleNavbar}
            style={{ background: "transparent", border: "none" }}
          >
            <HiOutlineMenuAlt3 size={35} style={{ color: toggleMenu ? "#fff" : "#010101" }} />
          </button>
        )}

        <img src="Bibliolab__1_-removebg-preview.png" alt="Logo" style={{ maxWidth: "200px", maxHeight: "300px" }} />

        {!isMobile && (
          <nav className="d-flex gap-4">
            <Link className="text-light border border-dark rounded px-3 py-1 bg-dark" style={{ fontFamily: "Times New Roman", textDecoration: "none", fontSize: "1.2rem" }} to="/">Accueil</Link>

            <ButtonGroup>
              <Link to="/library" className="btn btn-dark" style={{ fontFamily: "Times New Roman", fontSize: "1.2rem", borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem", padding: "0.5rem 1rem", textDecoration: "none" }}>Bibliothèques</Link>

              <DropdownButton
                as={ButtonGroup}
                id="dropdown-split"
                variant="dark"
                style={{ borderTopRightRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
                menuVariant="dark"
              >
                <Dropdown.Item as={Link} to="/library1">Bibliothèque 1</Dropdown.Item>
                <Dropdown.Item as={Link} to="/library2">Bibliothèque 2</Dropdown.Item>
                <Dropdown.Item as={Link} to="/library3">Bibliothèque 3</Dropdown.Item>
                <Dropdown.Item as={Link} to="/library4">Bibliothèque 4</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>

            <Link className="text-light border border-dark rounded px-3 py-1 bg-dark" style={{ fontFamily: "Times New Roman", textDecoration: "none", fontSize: "1.2rem" }} to="/about">Infos</Link>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;

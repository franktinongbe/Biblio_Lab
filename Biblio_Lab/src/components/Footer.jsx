import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: 'linear-gradient(to right, #f2994a, #2d9cdb)',
        padding: '40px 0',
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start justify-content-between align-items-start">

          {/* Logo + Copyright */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img
              src="images/logo.png"
              alt="Logo"
              style={{ maxWidth: "200px", maxHeight: "300px" }}
            />
            <p style={{ fontFamily: "Times New Roman", margin: 0, paddingTop: '10px', color: '#fff' }}>
              <b>&copy; 2025 - Tous droits réservés</b>
            </p>
          </div>

          {/* Liens de navigation */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="mb-3 fw-bold">Liens</h5>
            {["Accueil", "Bibliothèques", "Infos", "Inscription", "Connexion"].map((text, idx) => (
              <Link
                key={idx}
                to={`/accueil${text === "Accueil" ? "" : text.toLowerCase().replace(" ", "")}`}
                className="text-white mb-2 text-decoration-none"
                style={{ transition: '0.3s ease-in-out' }}
                onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Infos supplémentaires */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start">
            <h5 className="mb-3 fw-bold">Informations Complémentaires</h5>
            <Link
              to="/pdc"
              className="text-white mb-2 text-decoration-none"
              style={{ transition: '0.3s ease-in-out' }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              Politique de Confidentialité
            </Link>
            <Link
              to="/newsletter"
              className="text-white mb-2 text-decoration-none"
              style={{ transition: '0.3s ease-in-out' }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              Newsletter
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

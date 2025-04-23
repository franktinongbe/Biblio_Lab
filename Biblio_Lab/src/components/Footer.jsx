import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-dark" style={{ backgroundColor: '#fd7e14', padding: '20px 0' }}>
      <div className="container">
        <div className="row justify-content-between align-items-start">
        
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <img 
              src="Bibliolab__1_-removebg-preview.png" 
              alt="Logo" 
              style={{ maxWidth: "200px", maxHeight: "300px" }} 
            />
            <p style={{ fontFamily: "Times New Roman", margin: 0, color: 'black', paddingTop: '10px' }}>
              <b>&copy; 2025 - Tous droits réservés</b>
            </p>
          </div>

         
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <h5 style={{ marginBottom: '8px', color: 'black' }}>Liens</h5>
            <Link to="/" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Accueil</Link>
            <Link to="/library" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Bibliothèques</Link>
            <Link to="/about" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Infos</Link>
            <Link to="/Sign in" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Inscription</Link>
            <Link to="/Log in" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Connexion</Link>
          </div>

         
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <h5 style={{ marginBottom: '8px', color: 'black' }}>Informations Complémentaires</h5>
            <Link to="/pdc" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Politique de Confidentialité</Link>
            <Link to="/newsletter" style={{ margin: '4px 0', textDecoration: 'none', color: 'black' }}>Newsletter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

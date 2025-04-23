import React from 'react';
import { Link } from 'react-router-dom'; // On utilise <Link /> ici
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <header
        className="bg-primary text-white py-5"
        style={{
          background: 'linear-gradient(to right,rgb(17, 51, 247),rgb(53, 82, 248))', // Fond dégradé
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 mb-4" style={{ fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Bienvenue dans votre univers documentaire
          </h1>
          <p className="lead mb-4" style={{ fontSize: '1.2rem' }}>
            Découvrez nos produits et services exceptionnels.
          </p>

          <div className="container text-center">
            <h2 className="mb-3" style={{ fontWeight: '600', color: '#f5f5f5' }}>Prêt à commencer ?</h2>
            <p className="lead mb-5" style={{ fontSize: '1.1rem' }}>Connectez-vous dès aujourd'hui pour accéder à toutes les documentations.</p>
            
            {/* Lien vers la page de Connexion */}
            <Link
              to="/Sign in"
              className="btn btn-light btn-lg mb-5"
              style={{
                padding: '12px 30px',
                fontSize: '1.2rem',
                borderRadius: '50px',
                fontWeight: '600',
                transition: 'background-color 0.3s ease-in-out',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f39c12'} // Effet au survol
              onMouseOut={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            >
              Connectez-vous
            </Link>

            <section className="bg-light py-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h3 className="mb-4" style={{ fontWeight: '600', color: '#333' }}>Explorez le monde des bibliothèques</h3>
                    <p className="lead mb-4" style={{ fontSize: '1.1rem' }}>
                      Plongez dans cet univers fascinant avec un documentaire sur les bibliothèques et leur impact dans notre vie quotidienne.
                    </p>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/JtT97H7vZgA"  // Nouvelle vidéo libre d'accès
                      title="Documentaire sur les bibliothèques"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '12px' }} // Coins arrondis pour la vidéo
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </header>
    </>
  );
}

export default Home;

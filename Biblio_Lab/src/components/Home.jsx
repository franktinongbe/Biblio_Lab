import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Ajout dynamique de la police Montserrat
const montserratFont = document.createElement('link');
montserratFont.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';
montserratFont.rel = 'stylesheet';
document.head.appendChild(montserratFont);

function Home() {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <header
        className="text-white py-5"
        style={{
          background: 'linear-gradient(to right, #fd7e14, rgb(53, 82, 248))',
          minHeight: '100vh',
        }}
      >
        <div className="container text-center">
          <h1
            className="display-4 mb-4"
            style={{
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Bienvenue dans votre univers documentaire
          </h1>
          <p className="lead mb-4" style={{ fontSize: '1.2rem' }}>
            Découvrez nos produits et services exceptionnels.
          </p>

          <h2 className="mb-3" style={{ fontWeight: '600', color: '#f5f5f5' }}>
            Prêt à commencer ?
          </h2>
          <p className="lead mb-5" style={{ fontSize: '1.1rem' }}>
            Connectez-vous dès aujourd'hui pour accéder à toutes les documentations.
          </p>

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
            onMouseOver={(e) => (e.target.style.backgroundColor = '#f39c12')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#f8f9fa')}
          >
            Connectez-vous
          </Link>
        </div>
      </header>

      {/* Section d'information */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mx-auto text-center">
              <h3 className="mb-4" style={{ fontWeight: '600', color: '#333' }}>
                Explorez le monde des bibliothèques
              </h3>
              <p className="lead mb-4" style={{ fontSize: '1.1rem' }}>
                Plongez dans cet univers fascinant avec un documentaire sur les bibliothèques et leur impact dans notre vie quotidienne.
              </p>

              <video
                width="100%"
                height="auto"
                loop
                autoPlay
                muted
                controls
                style={{ borderRadius: '12px', maxHeight: '400px' }}
              >
                <source src="https://videos.pexels.com/video-files/31033574/13264164_2560_1440_30fps.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

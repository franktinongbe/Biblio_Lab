import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book } from 'react-bootstrap-icons'; // Assure-toi d'avoir installé react-bootstrap-icons

// Ajout dynamique de la police Montserrat et styles animés
const montserratFont = document.createElement('link');
montserratFont.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap';
montserratFont.rel = 'stylesheet';
document.head.appendChild(montserratFont);

const style = document.createElement('style');
style.innerHTML = `
  @keyframes swing {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    75% { transform: rotate(5deg); }
  }

  @keyframes colorShift {
    0% { color: #ffffff; }
    25% { color: #ffc107; }
    50% { color: #00d1b2; }
    75% { color: #ff6f61; }
    100% { color: #ffffff; }
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .book-icon-animated {
    animation: swing 2.5s ease-in-out infinite, colorShift 5s ease-in-out infinite;
    display: inline-block;
    font-size: 3rem;
    margin-bottom: 15px;
  }

  .connect-btn {
    background: linear-gradient(270deg, #ff6ec4, #7873f5, #4ADEDE, #fddb92);
    background-size: 600% 600%;
    animation: gradientMove 6s ease infinite, pulse 2.5s ease-in-out infinite;
    border: none;
    color: white !important;
    padding: 14px 36px;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 40px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .connect-btn:hover {
    transform: scale(1.15);
    box-shadow: 0 18px 30px rgba(0, 0, 0, 0.35);
  }
`;
document.head.appendChild(style);

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
          <div className="book-icon-animated">
            <Book />
          </div>
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

          <Link to="/Sign in" className="connect-btn mb-5">
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

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineArrowRight, HiOutlineLibrary } from 'react-icons/hi';

const Home = () => {
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  useEffect(() => {
    const font = document.createElement('link');
    font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap';
    font.rel = 'stylesheet';
    document.head.appendChild(font);

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }
      @keyframes bgFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 0 0 rgba(242, 153, 74, 0.4); }
        70% { box-shadow: 0 0 0 20px rgba(242, 153, 74, 0); }
        100% { box-shadow: 0 0 0 0 rgba(242, 153, 74, 0); }
      }
      .glass-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        transition: all 0.4s ease;
      }
      .hero-title {
        font-weight: 800;
        letter-spacing: -1px;
        background: linear-gradient(to right, #ffffff, #f0f0f0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .btn-caeb {
        background: ${caebOrange};
        color: white;
        border: none;
        border-radius: 50px;
        padding: 15px 40px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation: pulse-glow 2s infinite;
      }
      .btn-caeb:hover {
        transform: scale(1.05) translateY(-5px);
        background: #e68a39;
        color: white;
      }
      .logo-container {
        animation: float 6s ease-in-out infinite;
      }
      .video-container {
        position: relative;
        border-radius: 25px;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
      }
      @media (max-width: 768px) {
        .hero-title { font-size: 2.2rem; letter-spacing: 0; }
        .hero-section { padding-top: 100px !important; }
      }
    `;
    document.head.appendChild(style);
  }, [caebOrange]);

  return (
    <div style={{ 
      fontFamily: "'Montserrat', sans-serif",
      background: `linear-gradient(-45deg, #1D4F9A, #2c3e50, #16a085, #1D4F9A)`,
      backgroundSize: '400% 400%',
      animation: 'bgFlow 15s ease infinite',
      minHeight: '100vh',
      color: 'white',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'rgba(242, 153, 74, 0.1)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>

      {/* --- HEADER SECTION --- */}
      <header className="container hero-section py-5 d-flex align-items-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center w-100 g-5">
          
          {/* Côté Gauche : Texte */}
          <div className="col-lg-7 text-center text-lg-start">
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
                <div className="badge" style={{ background: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '20px' }}>
                <HiOutlineLibrary className="me-2" /> ONG CAEB
                </div>
                <div className="badge" style={{ background: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '20px' }}>
                <HiOutlineLibrary className="me-2" /> Fondation Vallet
                </div>
            </div>

            <h1 className="display-2 hero-title mb-4">
              Bienvenue dans l'univers du Réseau <br /> 
              <span style={{ color: caebOrange, WebkitTextFillColor: caebOrange }}>des Bibliothèques CAEB</span> Fondation Vallet.
            </h1>
            <p className="lead mb-5 opacity-75 mx-auto mx-lg-0" style={{ fontSize: '1.2rem', maxWidth: '550px' }}>
              L'avenir de la culture commence ici. Accédez à des milliers de ressources pour nourrir votre esprit.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
              <Link to="/accueil" className="btn btn-caeb d-flex align-items-center justify-content-center gap-2 text-decoration-none">
                Commencer l'exploration <HiOutlineArrowRight />
              </Link>
            </div>
          </div>

          {/* Côté Droit : Logos (Écrin Blanc) */}
          <div className="col-lg-5 d-flex justify-content-center align-items-center">
            <div className="logo-container w-100 d-flex justify-content-center">
              <div className="p-4 p-md-5 text-center shadow-lg" style={{ 
                background: 'rgba(255, 255, 255, 0.98)', 
                borderRadius: '40px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                maxWidth: '400px'
              }}>
                <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
                  <img 
                    src="/images/caeb.png" 
                    alt="Logo CAEB" 
                    style={{ width: '45%', height: 'auto', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))' }} 
                  />
                  <div style={{ width: '1px', height: '60px', background: '#eee' }}></div>
                  <img 
                    src="/images/vallet.png" 
                    alt="Logo Fondation Vallet" 
                    style={{ width: '45%', height: 'auto', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.1))' }} 
                  />
                </div>
                <div className="mt-3 text-dark">
                  <h4 className="fw-bold mb-1" style={{ color: caebBlue, fontSize: '1.2rem' }}>
                    PARTENARIAT ÉDUCATIF
                  </h4>
                  <p className="small mb-0 text-muted px-2" style={{ lineHeight: '1.4' }}>
                    Le Réseau des Bibliothèques du <strong>CAEB</strong> soutenu par la <strong>Fondation Vallet</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECTION VIDEO --- */}
      <section className="py-5" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="glass-card p-4 p-md-5">
                <div className="row align-items-center g-4">
                  <div className="col-md-5 text-center text-md-start">
                    <h2 className="fw-bold mb-3" style={{ color: caebOrange }}>Immersion Totale</h2>
                    <p className="opacity-75">
                      Découvrez comment nos espaces redéfinissent l'accès au savoir au Bénin. Une expérience numérique et physique unique.
                    </p>
                    <hr className="my-4 border-white opacity-25" />
                    <div className="d-flex justify-content-center justify-content-md-start gap-4">
                      <div className="text-center">
                        <h3 className="fw-bold mb-0">+50k</h3>
                        <small className="opacity-50">Ouvrages</small>
                      </div>
                      <div className="text-center">
                        <h3 className="fw-bold mb-0">8H-18H</h3>
                        <small className="opacity-50">Lun - Sam</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="video-container">
                      <video
                        width="100%"
                        loop autoPlay muted playsInline
                        style={{ display: 'block', height: '350px', objectFit: 'cover' }}
                      >
                        <source src="https://videos.pexels.com/video-files/31033574/13264164_2560_1440_30fps.mp4" type="video/mp4" />
                      </video>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center opacity-50">
        <p className="small">© {new Date().getFullYear()} Bibliothèque CAEB - Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
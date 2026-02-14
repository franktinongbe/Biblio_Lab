import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const navigate = useNavigate();
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Montserrat', sans-serif" }}>
      {/* --- HERO SECTION / CAROUSEL --- */}
      <Carousel fade interval={5000} indicators={true} controls={true}>
        {[
          {
            img: "/images/1000262593.jpg",
            title: "Bienvenue chez vous",
            sub: "Pour vos enfants, faites le bon choix",
            text: "Une gamme d'ouvrages adaptés aux besoins de la jeunesse."
          },
          {
            img: "/images/1000262596.jpg",
            title: "Bibliothèque C.A.E.B.",
            sub: "La culture à votre portée",
            text: "Explorez un univers documentaire riche et diversifié."
          },
          {
            img: "/images/1000262599.jpg",
            title: "Espace Numérique",
            sub: "Rejoignez-nous dès maintenant",
            text: "Profitez de nos services de formation et d'outils modernes."
          }
        ].map((slide, index) => (
          <Carousel.Item key={index}>
            <div style={{ position: 'relative', height: '70vh' }}>
              <img 
                className="d-block w-100" 
                src={slide.img} 
                alt={slide.title} 
                style={{ height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                background: 'linear-gradient(rgba(0,0,0,0.2), rgba(29, 79, 154, 0.7))', 
                zIndex: 1 
              }}></div>
              <Carousel.Caption style={{ zIndex: 2, bottom: '20%' }}>
                <h1 className="display-3 fw-bold" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>{slide.title}</h1>
                <h3 className="fw-light mb-4">{slide.sub}</h3>
                <p className="lead d-none d-md-block">{slide.text}</p>
                <button 
                  onClick={() => navigate('/library')} 
                  className="btn btn-lg text-white px-5 rounded-pill shadow"
                  style={{ backgroundColor: caebOrange, border: 'none', fontWeight: 'bold' }}
                >
                  Découvrir le réseau
                </button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* --- SECTION SERVICES / CARDS --- */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: caebBlue }}>Pourquoi nous rejoindre ?</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: caebOrange, margin: '10px auto' }}></div>
        </div>

        <div className="row g-4 text-center">
          {/* Bloc Livres */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 hover-lift">
              <div className="mb-3">
                <i className="bi bi-book fs-1" style={{ color: caebBlue }}></i>
              </div>
              <h4 className="fw-bold">Collections Riches</h4>
              <p className="text-muted">Retrouvez toutes les collections de nos bibliothèques partenaires en un clic.</p>
              <button onClick={() => navigate('/library')} className="btn outline-primary mt-auto" style={{ color: caebBlue, border: `1px solid ${caebBlue}` }}>
                Explorer
              </button>
            </div>
          </div>

          {/* Bloc Inscription */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ backgroundColor: caebBlue, color: 'white' }}>
              <div className="mb-3">
                <i className="bi bi-person-plus fs-1"></i>
              </div>
              <h4 className="fw-bold text-white">Devenir Membre</h4>
              <p className="opacity-75">Le réseau C.A.E.B. regroupe des espaces d’apprentissage et de partage pour tous.</p>
              <button onClick={() => navigate('/Sign in')} className="btn btn-light mt-auto fw-bold" style={{ color: caebBlue }}>
                S'inscrire
              </button>
            </div>
          </div>

          {/* Bloc Contact */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 hover-lift">
              <div className="mb-3">
                <i className="bi bi-geo-alt fs-1" style={{ color: caebOrange }}></i>
              </div>
              <h4 className="fw-bold">Contactez-nous</h4>
              <p className="text-muted">Une équipe dynamique et accueillante est à votre service pour toute information.</p>
              <button onClick={() => navigate('/about')} className="btn outline-warning mt-auto" style={{ color: caebOrange, border: `1px solid ${caebOrange}` }}>
                Nous trouver
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION IMAGE & TEXTE --- */}
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <img 
                  src="/images/pexels-kampus-5940841.jpg" 
                  alt="Étudiants" 
                  className="img-fluid rounded-4 shadow" 
                />
                <div style={{ 
                  position: 'absolute', bottom: '-20px', right: '-20px', 
                  backgroundColor: caebOrange, width: '100px', height: '100px', 
                  borderRadius: '15px', zIndex: -1 
                }}></div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="display-5 fw-bold mb-4" style={{ color: caebBlue }}>Qui sommes-nous ?</h2>
              <p className="lead">Le Réseau C.A.E.B. est passionné par la diffusion du savoir au Bénin.</p>
              <p className="text-muted">
                En ligne et sur place, nous proposons un large choix de documents, d’activités culturelles, 
                et d’espaces de travail modernes adaptés à chaque génération. Notre mission est d'éduquer 
                pour un avenir meilleur.
              </p>
              <button 
                onClick={() => navigate('/about')} 
                className="btn text-white px-4 py-2 mt-3"
                style={{ backgroundColor: caebBlue, borderRadius: '8px' }}
              >
                En savoir plus sur nos valeurs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
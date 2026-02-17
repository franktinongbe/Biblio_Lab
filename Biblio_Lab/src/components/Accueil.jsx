import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import NewsTicker from '../components/NewsTicker'; 

function Accueil() {
  const navigate = useNavigate();
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const savedNews = localStorage.getItem('caeb_news');
    if (savedNews) {
      setAnnouncement(savedNews);
    }
  }, []);

  // Liste des partenaires avec logos officiels
  const partenaires = [

    { 
      nom: "Fondation Vallet", 
      logo: "https://www.fondationdefrance.org/templates/yootheme/cache/91/Logo_00539-91c5c740.jpeg", 
      site: "https://www.fondationvallet.org"
    },
    { 
      nom: "AFD", 
      logo: "https://www.auf.org/wp-content/uploads/2025/03/logo-partenaires-afd-1.jpg",
      site: "https://www.afd.fr"
    },
    { 
      nom: "Secours Populaire Français", 
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf_fkLNSghIdV-e70lRThXBrFVRxTE6BZWw&s",
      site: "https://www.secourspopulaire.fr"
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", fontFamily: "'Montserrat', sans-serif", overflowX: 'hidden' }}>
      
      {announcement && <NewsTicker message={announcement} />}

      {/* --- HERO SECTION --- */}
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
            title: "Bibliothèque CAEB",
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
              <img className="d-block w-100" src={slide.img} alt={slide.title} style={{ height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.2), rgba(29, 79, 154, 0.7))', zIndex: 1 }}></div>
              <Carousel.Caption style={{ zIndex: 2, bottom: '20%' }}>
                <h1 className="display-3 fw-bold">{slide.title}</h1>
                <h3 className="fw-light mb-4">{slide.sub}</h3>
                <button onClick={() => navigate('/library')} className="btn btn-lg text-white px-5 rounded-pill shadow-lg" style={{ backgroundColor: caebOrange, border: 'none', fontWeight: 'bold' }}>
                  Découvrir le réseau
                </button>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* --- SECTION SERVICES --- */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: caebBlue }}>Pourquoi nous rejoindre ?</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: caebOrange, margin: '10px auto' }}></div>
        </div>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
              <i className="bi bi-book fs-1 mb-3" style={{ color: caebBlue }}></i>
              <h4 className="fw-bold">Collections Riches</h4>
              <p className="text-muted">Retrouvez toutes les collections de nos bibliothèques partenaires.</p>
              <button onClick={() => navigate('/library')} className="btn mt-auto rounded-pill" style={{ color: caebBlue, border: `1px solid ${caebBlue}` }}>Explorer</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg p-4" style={{ backgroundColor: caebBlue, color: 'white', borderRadius: '15px', transform: 'scale(1.05)', zIndex: 2 }}>
              <i className="bi bi-person-plus fs-1 mb-3"></i>
              <h4 className="fw-bold">Devenir Membre</h4>
              <p className="opacity-75">Le réseau CAEB regroupe des espaces d’apprentissage pour tous.</p>
              <button onClick={() => navigate('/Sign in')} className="btn btn-light mt-auto fw-bold rounded-pill" style={{ color: caebBlue }}>S'inscrire</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '15px' }}>
              <i className="bi bi-geo-alt fs-1 mb-3" style={{ color: caebOrange }}></i>
              <h4 className="fw-bold">Contactez-nous</h4>
              <p className="text-muted">Une équipe dynamique et accueillante est à votre service.</p>
              <button onClick={() => navigate('/about')} className="btn mt-auto rounded-pill" style={{ color: caebOrange, border: `1px solid ${caebOrange}` }}>Nous trouver</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION QUI SOMMES-NOUS --- */}
      <div className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="position-relative">
                <img src="/images/pexels-kampus-5940841.jpg" alt="Étudiants" className="img-fluid rounded-4 shadow-lg" />
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', backgroundColor: caebOrange, width: '100px', height: '100px', borderRadius: '15px', zIndex: -1 }}></div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="display-5 fw-bold mb-4" style={{ color: caebBlue }}>Qui sommes-nous ?</h2>
              <p className="lead fw-semibold" style={{ color: caebOrange }}>Le Réseau CAEB est passionné par la diffusion du savoir au Bénin.</p>
              <p className="text-muted">Nous proposons un large choix de documents et d’espaces de travail modernes adaptés à chaque génération.</p>
              <button onClick={() => navigate('/about')} className="btn text-white px-4 py-2 mt-3 shadow" style={{ backgroundColor: caebBlue, borderRadius: '8px' }}>En savoir plus</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- NOUVELLE SECTION : NOS PARTENAIRES --- */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold" style={{ color: caebBlue }}>Nos Partenaires Stratégiques</h3>
          <p className="text-muted">Ils nous soutiennent dans notre mission éducative</p>
          <div style={{ width: '50px', height: '3px', backgroundColor: caebOrange, margin: '10px auto' }}></div>
        </div>
        
        <div className="row align-items-center justify-content-center g-5">
          {partenaires.map((p, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <a href={p.site} target="_blank" rel="noopener noreferrer">
                <img 
                  src={p.logo} 
                  alt={p.nom} 
                  style={{ 
                    maxHeight: '80px', 
                    maxWidth: '100%', 
                    filter: 'grayscale(100%) opacity(0.7)',
                    transition: '0.4s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.filter = 'grayscale(0%) opacity(1)';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.filter = 'grayscale(100%) opacity(0.7)';
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Accueil;
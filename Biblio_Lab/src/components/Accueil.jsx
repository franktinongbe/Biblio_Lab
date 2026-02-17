import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HiOutlineArrowRight, HiOutlineLibrary, HiOutlineUserAdd, HiOutlineMailOpen } from 'react-icons/hi';
import NewsTicker from '../components/NewsTicker'; 

function Accueil() {
  const navigate = useNavigate();
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const savedNews = localStorage.getItem('caeb_news');
    if (savedNews) setAnnouncement(savedNews);
  }, []);

  const partenaires = [
    { nom: "Fondation Vallet", logo: "https://www.fondationdefrance.org/templates/yootheme/cache/91/Logo_00539-91c5c740.jpeg", site: "https://www.fondationvallet.org" },
    { nom: "AFD", logo: "https://www.auf.org/wp-content/uploads/2025/03/logo-partenaires-afd-1.jpg", site: "https://www.afd.fr" },
    { nom: "Secours Populaire Français", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCf_fkLNSghIdV-e70lRThXBrFVRxTE6BZWw&s", site: "https://www.secourspopulaire.fr" }
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "'Montserrat', sans-serif", overflowX: 'hidden' }}>
      
      {announcement && <NewsTicker message={announcement} />}

      {/* --- HERO SECTION : FULL SCREEN DYNAMIQUE --- */}
      <Carousel fade interval={6000} indicators={false} controls={true} className="hero-carousel">
        {[
          {
            img: "/images/1000262593.jpg",
            title: "Bâtir l'avenir par le savoir",
            sub: "L'excellence éducative à votre portée",
            btnText: "Explorer le Catalogue"
          },
          {
            img: "/images/1000262596.jpg",
            title: "Un univers de lecture",
            sub: "Plus de 50 000 ouvrages pour tous les âges",
            btnText: "Nos Bibliothèques"
          }
        ].map((slide, index) => (
          <Carousel.Item key={index}>
            <div style={{ 
              position: 'relative', 
              height: '90vh', 
              background: `url(${slide.img}) center/cover no-repeat` 
            }}>
              {/* Overlay dégradé immersif */}
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                background: 'linear-gradient(to right, rgba(13, 42, 82, 0.9) 20%, rgba(13, 42, 82, 0.2) 100%)' 
              }}></div>
              
              <Container className="h-100 d-flex align-items-center" style={{ position: 'relative', zIndex: 3 }}>
                <div className="text-white animate-fade-in-left" style={{ maxWidth: '700px' }}>
                  <span className="text-uppercase fw-bold mb-3 d-block" style={{ color: caebOrange, letterSpacing: '3px' }}>Depuis 1975</span>
                  <h1 className="display-1 fw-bold mb-4">{slide.title}</h1>
                  <p className="lead fs-4 mb-5 opacity-75">{slide.sub}</p>
                  <Button 
                    onClick={() => navigate('/library')} 
                    size="lg" 
                    className="px-5 py-3 border-0 rounded-pill shadow-lg d-inline-flex align-items-center gap-2"
                    style={{ backgroundColor: caebOrange, fontWeight: 'bold', transition: '0.3s' }}
                  >
                    {slide.btnText} <HiOutlineArrowRight />
                  </Button>
                </div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* --- SECTION SERVICES : FLOATING CARDS --- */}
      <Container style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
        <Row className="g-4 justify-content-center">
          {[
            { icon: <HiOutlineLibrary />, title: "Collections", text: "Accédez à un patrimoine documentaire unique.", link: "/library", color: caebBlue },
            { icon: <HiOutlineUserAdd />, title: "S'abonner", text: "Rejoignez notre réseau et profitez d'avantages.", link: "/newsletter", color: caebOrange },
            { icon: <HiOutlineMailOpen />, title: "Contact", text: "Besoin d'aide ? Nos experts vous répondent.", link: "/contact", color: caebBlue }
          ].map((item, i) => (
            <Col md={4} key={i}>
              <div 
                className="p-5 text-center shadow-2xl border-0 h-100 hover-lift bg-white transition-all"
                style={{ borderRadius: '24px', cursor: 'pointer' }}
                onClick={() => navigate(item.link)}
              >
                <div className="mb-4 mx-auto d-flex align-items-center justify-content-center" 
                     style={{ width: '80px', height: '80px', borderRadius: '20px', backgroundColor: `${item.color}15`, color: item.color, fontSize: '2.5rem' }}>
                  {item.icon}
                </div>
                <h4 className="fw-bold mb-3">{item.title}</h4>
                <p className="text-muted">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- SECTION HISTOIRE : SPLIT DESIGN --- */}
      <div className="py-5 my-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="position-relative">
                <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: `${caebOrange}20`, borderRadius: '50%', zIndex: 0 }}></div>
                <img src="/images/pexels-kampus-5940841.jpg" alt="Edu" className="img-fluid rounded-5 shadow-lg position-relative" style={{ zIndex: 1 }} />
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5">
              <h6 className="fw-bold text-uppercase" style={{ color: caebOrange }}>Héritage & Vision</h6>
              <h2 className="display-4 fw-bold mb-4" style={{ color: caebBlue }}>Plus qu'une bibliothèque.</h2>
              <p className="fs-5 text-muted mb-4">
                Le CAEB transforme l'accès au savoir au Bénin en offrant des espaces modernes où la tradition du livre rencontre l'innovation numérique.
              </p>
              <div className="d-flex gap-4">
                <div className="text-center">
                  <h3 className="fw-bold mb-0" style={{ color: caebBlue }}>8</h3>
                  <small className="text-muted">Centres</small>
                </div>
                <div className="vr"></div>
                <div className="text-center">
                  <h3 className="fw-bold mb-0" style={{ color: caebBlue }}>51 ans</h3>
                  <small className="text-muted">D'Histoire</small>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- PARTENAIRES : SCROLL EFFECT --- */}
      <div className="py-5" style={{ background: '#f8fbff', borderTop: '1px solid #eee' }}>
        <Container>
          <p className="text-center text-uppercase fw-bold mb-5 opacity-50" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Ils nous soutiennent dans notre mission éducative</p>
          <Row className="justify-content-center align-items-center g-5">
            {partenaires.map((p, index) => (
              <Col key={index} xs={6} md={3} className="text-center">
                <a href={p.site} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={p.logo} 
                    alt={p.nom} 
                    className="partner-logo transition-all"
                    style={{ maxHeight: '60px', filter: 'grayscale(1) opacity(0.5)' }} 
                  />
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
        
        .hover-lift { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s; }
        .hover-lift:hover { transform: translateY(-15px); box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important; }
        
        .partner-logo:hover { filter: grayscale(0) opacity(1) !important; transform: scale(1.1); }
        
        .hero-carousel .carousel-control-prev, .hero-carousel .carousel-control-next {
          width: 5%;
          background: rgba(0,0,0,0.1);
          height: 100px;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default Accueil;
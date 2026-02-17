import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Badge, Card, Image } from 'react-bootstrap'; 
import { 
  HiOutlineRocketLaunch, 
  HiOutlineUserGroup, 
  HiOutlineClock, 
  HiOutlineLightBulb, 
  HiOutlineSparkles,
  HiOutlineArrowRight
} from 'react-icons/hi2';

function Infos() {
  const navigate = useNavigate();
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  // Liste complète des 8 responsables
  const responsables = [
    { name: "Responsable Porto 1", photo: "/images/resp1.jpg", biblio: "Porto-Novo 1", path: "/library1" },
    { name: "Responsable Porto 2", photo: "/images/resp2.jpg", biblio: "Porto-Novo 2", path: "/library2" },
    { name: "Responsable Parakou Z.", photo: "/images/resp3.jpg", biblio: "Parakou Zongo", path: "/library3" },
    { name: "Responsable Parakou UP", photo: "/images/resp4.jpg", biblio: "Parakou FM UP", path: "/library4" },
    { name: "Responsable Natitingou", photo: "/images/resp5.jpg", biblio: "Natitingou", path: "/library5" },
    { name: "Responsable Abomey", photo: "/images/resp6.jpg", biblio: "Abomey", path: "/library6" },
    { name: "Responsable Lokossa", photo: "/images/resp7.jpg", biblio: "Lokossa", path: "/library7" },
    { name: "Responsable Djougou", photo: "/images/resp8.jpg", biblio: "Djougou", path: "/library8" },
  ];

  return (
    <div style={{ backgroundColor: "#fcfcfc", fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- HERO SECTION --- */}
      <div style={{ 
        background: `linear-gradient(135deg, ${caebBlue} 0%, #0d2a52 100%)`, 
        padding: '100px 0', 
        color: 'white', 
        textAlign: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0% 100%)',
        marginBottom: '60px'
      }}>
        <Container>
          <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 rounded-pill">Depuis 1935</Badge>
          <h1 className="display-3 fw-bold mb-3">Bâtir l'avenir par le savoir</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', opacity: 0.9 }}>
            Le CAEB est un écosystème dédié à l'éveil intellectuel et à l'excellence éducative au Bénin.
          </p>
        </Container>
      </div>

      {/* --- MISSION & HISTOIRE --- */}
      <Container className="mb-5">
        <Row className="g-4 text-center text-md-start">
          <Col md={6}>
            <div className="p-5 h-100 rounded-4 shadow-sm bg-white border-bottom border-5" style={{ borderColor: caebOrange }}>
              <HiOutlineRocketLaunch size={40} className="mb-3" style={{ color: caebOrange }} />
              <h2 className="fw-bold" style={{ color: caebBlue }}>Notre Mission</h2>
              <p className="text-muted">Favoriser une communauté mondiale d'apprenants, où les livres sont accessibles à tous.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-5 h-100 rounded-4 shadow-sm bg-white border-bottom border-5" style={{ borderColor: caebBlue }}>
              <HiOutlineClock size={40} className="mb-3" style={{ color: caebBlue }} />
              <h2 className="fw-bold" style={{ color: caebBlue }}>Notre Histoire</h2>
              <p className="text-muted">Près d'un siècle d'engagement sans faille pour la culture et l'éducation de la nation Béninoise.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* --- SECTION : NOS RESPONSABLES (PHOTOS RONDES) --- */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: caebBlue }}>Nos Responsables de Centres</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: caebOrange, margin: '15px auto' }}></div>
          </div>
          <Row className="g-4">
            {responsables.map((res, index) => (
              <Col key={index} xs={6} md={4} lg={3}>
                <div 
                  className="text-center team-member-box p-3" 
                  onClick={() => navigate(res.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="mx-auto mb-3 circle-img-container shadow">
                    <Image 
                      src={res.photo} 
                      roundedCircle 
                      className="img-fluid team-photo"
                      alt={res.name}
                    />
                  </div>
                  <h6 className="fw-bold mb-1" style={{ color: caebBlue }}>{res.name}</h6>
                  <Badge bg="white" text="muted" className="border small-badge">{res.biblio}</Badge>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* --- ÉQUIPE DIRECTION (AVEC PHOTO DE) --- */}
      <Container className="py-5">
        <Row className="align-items-center bg-white rounded-4 shadow-lg overflow-hidden g-0">
          <Col md={4} className="text-center p-4">
             <Image 
                src="/images/paul_loko.jpg" // Remplace par le chemin réel du DE
                roundedCircle 
                className="shadow-sm mb-3"
                style={{ width: '200px', height: '200px', objectFit: 'cover', border: `4px solid ${caebBlue}` }}
             />
          </Col>
          <Col md={8} className="p-5">
            <h6 className="text-uppercase fw-bold" style={{ color: caebOrange, letterSpacing: '2px' }}>Direction Exécutive</h6>
            <h2 className="display-6 fw-bold mb-3" style={{ color: caebBlue }}>M. Paul LOKO</h2>
            <p className="lead text-muted">Directeur Exécutif du Réseau CAEB</p>
            <p className="text-muted">
              Expert en Sociologie, il dirige l'organisation avec une vision humaniste, 
              plaçant l'inclusion numérique et l'accès à la lecture au cœur du développement communautaire.
            </p>
          </Col>
        </Row>
      </Container>

      {/* --- STYLE --- */}
      <style>{`
        .circle-img-container {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid white;
          transition: 0.3s ease;
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .team-member-box:hover .circle-img-container {
          border-color: ${caebOrange};
          transform: translateY(-5px);
        }
        .team-member-box:hover .team-photo {
          transform: scale(1.1);
        }
        .small-badge {
          font-weight: 500;
          font-size: 0.75rem;
        }
        @media (max-width: 576px) {
          .circle-img-container {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default Infos;
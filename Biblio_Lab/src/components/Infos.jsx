import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Badge } from 'react-bootstrap'; // Correction : Ajout de Badge
import { 
  HiOutlineRocketLaunch, 
  HiOutlineUserGroup, 
  HiOutlineClock, 
  HiOutlineLightBulb, 
  HiOutlineSparkles 
} from 'react-icons/hi2';

function Infos() {
  const navigate = useNavigate();
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  return (
    <div style={{ backgroundColor: "#fcfcfc", fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- HERO SECTION --- */}
      <div style={{ 
        background: `linear-gradient(135deg, ${caebBlue} 0%, #0d2a52 100%)`, 
        padding: '100px 0', 
        color: 'white', 
        textAlign: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
        marginBottom: '60px'
      }}>
        <Container>
          {/* Badge fonctionne maintenant car il est importé */}
          <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 rounded-pill">Depuis 1935</Badge>
          <h1 className="display-3 fw-bold mb-3">Bâtir l'avenir par le savoir</h1>
          <p className="lead mx-auto" style={{ maxWidth: '700px', opacity: 0.9 }}>
            Le CAEB n'est pas qu'une bibliothèque, c'est un écosystème dédié à l'éveil intellectuel 
            et à l'excellence éducative au Bénin.
          </p>
        </Container>
      </div>

      {/* --- MISSION & HISTOIRE --- */}
      <Container className="mb-5">
        <Row className="g-4">
          <Col md={6}>
            <div className="p-5 h-100 rounded-4 shadow-sm bg-white border-start border-5" style={{ borderColor: caebOrange }}>
              <HiOutlineRocketLaunch size={40} className="mb-3" style={{ color: caebOrange }} />
              <h2 className="fw-bold" style={{ color: caebBlue }}>Notre Mission</h2>
              <p className="text-muted">
                Favoriser une communauté mondiale d'apprenants, où les livres et le contenu éducatif sont accessibles 
                à toute personne cherchant à acquérir des connaissances.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-5 h-100 rounded-4 shadow-sm bg-white border-start border-5" style={{ borderColor: caebBlue }}>
              <HiOutlineClock size={40} className="mb-3" style={{ color: caebBlue }} />
              <h2 className="fw-bold" style={{ color: caebBlue }}>Notre Histoire</h2>
              <p className="text-muted">
                Ce qui a commencé en <strong>1935</strong> est devenu le pilier de la documentation 
                nationale. Près d'un siècle d'engagement pour la nation Béninoise.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* --- FONCTIONNALITÉS --- */}
      <div className="py-5" style={{ backgroundColor: '#f1f4f9' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ color: caebBlue }}>L'Expérience CAEB</h2>
          </div>
          <Row className="text-center g-4">
            {[
              { icon: <HiOutlineSparkles />, title: "Diversité", text: "Une bibliothèque variée pour tous les âges." },
              { icon: <HiOutlineLightBulb />, title: "Sur mesure", text: "Recommandations de lectures personnalisées." },
              { icon: <HiOutlineUserGroup />, title: "Communauté", text: "Critiques et discussions passionnantes." }
            ].map((f, i) => (
              <Col key={i} md={4}>
                <div className="p-4 rounded-4 hover-card transition-all" style={{ background: 'transparent' }}>
                  <div className="mb-3 mx-auto shadow-sm d-flex align-items-center justify-content-center" 
                       style={{ width: '70px', height: '70px', borderRadius: '20px', backgroundColor: 'white', color: caebOrange, fontSize: '2rem' }}>
                    {f.icon}
                  </div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="small text-muted">{f.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* --- ÉQUIPE --- */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={5} className="mb-4">
            <h2 className="display-5 fw-bold" style={{ color: caebBlue }}>Rencontrez nos experts</h2>
            <p className="text-muted">Engagés à faire des bibliothèques du CAEB votre compagnon de confiance.</p>
          </Col>
          <Col lg={7}>
            <div className="p-4 rounded-4 shadow-lg border-0 d-flex align-items-center bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ 
                position: 'absolute', top: 0, left: 0, width: '10px', height: '100%', backgroundColor: caebOrange 
              }}></div>
              <div className="ms-3">
                <h4 className="fw-bold mb-1" style={{ color: caebBlue }}>M. Paul LOKO</h4>
                <p className="text-uppercase small fw-bold text-muted mb-2">Directeur Exécutif</p>
                <p className="mb-0 text-muted">Diplômé en Sociologie et Anthropologie, il dirige l'organisation avec une vision humaniste.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* --- CTA FINAL --- */}
      <div className="py-5 text-center mt-4" style={{ background: '#fff' }}>
        <Container className="p-5 rounded-5 shadow-sm" style={{ border: `2px dashed ${caebBlue}20` }}>
          <h2 className="fw-bold mb-4" style={{ color: caebBlue }}>Prêt à explorer notre univers ?</h2>
          <button
            onClick={() => navigate("/library")}
            className="btn btn-lg px-5 py-3 rounded-pill shadow-lg text-white"
            style={{ backgroundColor: caebOrange, border: 'none', fontWeight: 'bold' }}
          >
            Rejoignez-nous aujourd'hui !
          </button>
        </Container>
      </div>

      <style>{`
        .hover-card:hover {
          background-color: white !important;
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Infos;
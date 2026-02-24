import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge, Form } from "react-bootstrap";
import { HiOutlineLibrary, HiOutlineChatAlt2, HiOutlineChevronRight, HiOutlineLocationMarker } from 'react-icons/hi';
import "bootstrap/dist/css/bootstrap.min.css";

function Bibliothèques() {
  const [commentaires, setCommentaires] = useState([]);
  const [nom, setNom] = useState("");
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");

  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const libraries = [
  { 
    id: 1, 
    name: "Porto-Novo Siège", 
    image: "/images/porto1.jpg", 
    description: "Le siège historique : un cadre prestigieux alliant patrimoine et ressources numériques de pointe.", 
    path: "/library1", 
    city: "Porto-Novo" 
  },
  { 
    id: 2, 
    name: "Attakè", 
    image: "/images/attakè.jpg", 
    description: "Espace Attakè : un lieu vibrant et créatif dédié à l'éveil des jeunes lecteurs et aux ateliers ludiques.", 
    path: "/library2", 
    city: "Porto-Novo" 
  },
  { 
    id: 3, 
    name: "Parakou Zongo", 
    image: "/images/parakou..jpg", 
    description: "Un carrefour culturel dynamique proposant une vaste collection toutes catégories confondues.", 
    path: "/library3", 
    city: "Parakou" 
  },
  { 
    id: 4, 
    name: "Parakou FM UP", 
    image: "/images/up.jpg", 
    description: "Pôle Santé & Savoir : une bibliothèque spécialisée pour accompagner les étudiants en médecine dans leurs recherches.", 
    path: "/library4", 
    city: "Parakou" 
  },
  { 
    id: 5, 
    name: "Natitingou", 
    image: "/images/titingou.jpg", 
    description: "Un refuge intellectuel au pied de l'Atacora, idéal pour l'exploration et les travaux collaboratifs.", 
    path: "/library5", 
    city: "Natitingou" 
  },
  { 
    id: 6, 
    name: "Abomey", 
    image: "/images/abomey.jpg", 
    description: "Cité Royale : un écrin majestueux pour découvrir les trésors de l'histoire et du patrimoine béninois.", 
    path: "/library6", 
    city: "Abomey" 
  },
  { 
    id: 7, 
    name: "Lokossa", 
    image: "/images/kossalo.jpg", 
    description: "Une escale zen et structurée offrant un environnement de lecture moderne et apaisant.", 
    path: "/library7", 
    city: "Lokossa" 
  },
  { 
    id: 8, 
    name: "Djougou", 
    image: "/images/djougou.jpg", 
    description: "Un centre de ressources multiculturel et énergique au service du brassage des savoirs dans la Donga.", 
    path: "/library8", 
    city: "Djougou" 
  },
];

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (nom.trim() && nouveauCommentaire.trim()) {
      setCommentaires([{ nom: nom.trim(), texte: nouveauCommentaire.trim(), date: new Date().toLocaleDateString() }, ...commentaires]);
      setNouveauCommentaire("");
      setNom("");
    }
  };

  return (
    <div style={{ backgroundColor: "#fdfdfd", fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- HERO SECTION IMMERSIVE --- */}
      <div style={{ 
        background: `linear-gradient(135deg, ${caebBlue} 0%, #0a192f 100%)`, 
        padding: '100px 0', 
        color: 'white', 
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
        marginBottom: '50px'
      }}>
        <Container className="text-center">
          <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 rounded-pill">Réseau National</Badge>
          <h1 className="display-3 fw-bold mb-3">Nos Sanctuaires du Savoir</h1>
          <p className="lead mx-auto opacity-75" style={{ maxWidth: '700px' }}>
            Explorez notre réseau de 8 bibliothèques du CAEB-Fondation Vallet réparties à travers le Bénin, conçues pour inspirer chaque génération.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          {libraries.map((lib) => (
            <Col key={lib.id} md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm transition-all hover-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={lib.image} style={{ height: "220px", objectFit: "cover" }} />
                  <Badge bg="dark" className="position-absolute top-0 end-0 m-3 opacity-75">
                    <HiOutlineLocationMarker className="me-1" /> {lib.city}
                  </Badge>
                </div>
                <Card.Body className="p-4 d-flex flex-column">
                  <h5 className="fw-bold mb-2">{lib.name}</h5>
                  <Card.Text className="text-muted small flex-grow-1">{lib.description}</Card.Text>
                  <Button 
                    as={Link} 
                    to={lib.path} 
                    className="w-100 border-0 mt-3 d-flex align-items-center justify-content-center gap-2"
                    style={{ background: caebBlue, borderRadius: '12px', padding: '10px' }}
                  >
                    Explorer <HiOutlineChevronRight />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* --- SECTION COMMENTAIRES --- */}
        <Row className="mt-5 pt-5 align-items-start">
          <Col lg={5} className="mb-5">
            <div className="sticky-top" style={{ top: '100px' }}>
              <h2 className="display-5 fw-bold mb-4" style={{ color: caebBlue }}>
                <HiOutlineChatAlt2 style={{ color: caebOrange }} /> Votre avis compte
              </h2>
              <p className="text-muted mb-4">
                Partagez votre expérience dans nos centres ou suggérez-nous des améliorations.
              </p>
              
              <Form onSubmit={handleCommentSubmit} className="p-4 rounded-4 shadow-sm bg-white border">
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Votre nom complet" 
                    className="border-0 bg-light p-3"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Votre message..." 
                    className="border-0 bg-light p-3"
                    value={nouveauCommentaire}
                    onChange={(e) => setNouveauCommentaire(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button 
                  type="submit" 
                  className="w-100 border-0 py-3 fw-bold" 
                  style={{ background: caebOrange, borderRadius: '12px' }}
                >
                  Publier mon avis
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={7}>
            <h4 className="fw-bold mb-4 d-flex align-items-center gap-2">
              Commentaires récents <Badge bg="light" text="dark">{commentaires.length}</Badge>
            </h4>
            
            <div className="comment-feed">
              {commentaires.length > 0 ? (
                commentaires.map((c, i) => (
                  <div key={i} className="mb-3 p-4 bg-white rounded-4 border-start border-4 shadow-sm" style={{ borderColor: caebOrange }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="fw-bold mb-0">{c.nom}</h6>
                      <small className="text-muted">{c.date}</small>
                    </div>
                    <p className="mb-0 text-secondary">{c.texte}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-5 border rounded-4 bg-white">
                  <HiOutlineLibrary size={50} className="mb-3 opacity-25" />
                  <p className="text-muted">Soyez le premier à partager votre expérience !</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .hover-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-card:hover { transform: translateY(-12px); shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .transition-all { transition: all 0.3s ease; }
        .bg-light { background-color: #f8f9fa !important; }
      `}</style>
    </div>
  );
}

export default Bibliothèques;
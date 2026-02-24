import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Badge, Image, Carousel, Tooltip, OverlayTrigger } from 'react-bootstrap'; 
import { 
  HiOutlineRocketLaunch, 
  HiOutlineSparkles, 
  HiOutlineShieldCheck, 
  HiOutlineUserGroup, 
  HiOutlineBuildingLibrary,
  HiOutlineLightBulb
} from 'react-icons/hi2';

function Infos() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const responsables = [
    { name: "Responsable Porto 1", photo: "/images/resp1.jpg", biblio: "Porto-Novo 1", path: "/library1" },
    { name: "Narcisse NOUMONVI", photo: "/images/resp2.jpg", biblio: "Porto-Novo 2", path: "/library2" },
    { name: "Francel S. LOKO", photo: "/images/resp3.jpg", biblio: "Parakou Zongo", path: "/library3" },
    { name: "Dieudonné YOVO", photo: "/images/resp4.jpg", biblio: "Parakou FM UP", path: "/library4" },
    { name: "Responsable Natitingou", photo: "/images/resp5.jpg", biblio: "Natitingou", path: "/library5" },
    { name: "Romain OKE", photo: "/images/resp6.jpg", biblio: "Abomey", path: "/library6" },
    { name: "Responsable Lokossa", photo: "/images/resp7.jpg", biblio: "Lokossa", path: "/library7" },
    { name: "Ahmid ACHIMI", photo: "/images/resp8.jpg", biblio: "Djougou", path: "/library8" },
  ];

  const conseilAdministration = [
    { name: "BOUKARY Moumouni", role: "Président du CA", bio: "Supervise la stratégie globale et le respect de la mission originelle du CAEB.", photo: "/images/ca1.jpg" },
    { name: "GANSA Bruno", role: "Vice Président", bio: "Assure la suppléance et l'appui à la présidence.", photo: "/images/ca2.jpg" },
    { name: "BANKOLE Parfait", role: "Trésorier Général", bio: "Assure la gestion et la transparence de la trésorerie.", photo: "/images/ca2.jpg" }
  ];

  const bureauExecutif = [
    { name: "Nom Responsable", role: "Chargé des Programmes", bio: "Expert en ingénierie pédagogique et suivi des centres.", photo: "/images/be1.jpg" },
    { name: "Nom Responsable", role: "Chargé de la Communication", bio: "Gère le rayonnement du réseau et les relations partenaires.", photo: "/images/be2.jpg" },
    { name: "Nom Responsable", role: "Chargé des Ressources Humaines", bio: "Gère le capital humain du réseau.", photo: "/images/be3.jpg" },
    { name: "Nom Responsable", role: "Chargé des Finances", bio: "Responsable de la gestion financière.", photo: "/images/be4.jpg" },
    { name: "Nom Responsable", role: "Chargé de la Mobilisation des Fonds", bio: "Recherche de partenariats et financements.", photo: "/images/be5.jpg" },
  ];

  const menuItems = [
    { idx: 0, icon: <HiOutlineRocketLaunch size={24} />, label: "A Propos" },
    { idx: 1, icon: <HiOutlineSparkles size={24} />, label: "Direction" },
    { idx: 2, icon: <HiOutlineShieldCheck size={24} />, label: "Conseil" },
    { idx: 3, icon: <HiOutlineUserGroup size={24} />, label: "Bureau" },
    { idx: 4, icon: <HiOutlineBuildingLibrary size={24} />, label: "Centres" }
  ];

  const TeamMemberLong = ({ name, role, bio, photo }) => (
    <Row className="align-items-center bg-white rounded-4 shadow-sm overflow-hidden g-0 border mb-3 member-card mx-auto w-100" style={{ maxWidth: '800px' }}>
      <Col md={3} className="text-center p-3 bg-light">
        <Image src={photo} roundedCircle style={{ width: '90px', height: '90px', objectFit: 'cover', border: `3px solid white` }} />
      </Col>
      <Col md={9} className="p-3 text-start">
        <h6 className="text-uppercase fw-bold mb-1 small" style={{ color: caebOrange }}>{role}</h6>
        <h5 className="fw-bold mb-1" style={{ color: caebBlue }}>{name}</h5>
        <p className="text-muted mb-0 small">{bio}</p>
      </Col>
    </Row>
  );

  return (
    <div style={{ backgroundColor: "#fcfcfc", height: '100vh', display: 'flex', overflow: 'hidden' }}>
      
      {/* --- SIDEBAR NAV --- */}
      <div className="sidebar-nav d-none d-md-flex flex-column align-items-center py-4 bg-white border-end shadow-sm" style={{ width: '85px', zIndex: 1000 }}>
        <div className="mb-5">
           <div style={{ width: '45px', height: '45px', backgroundColor: caebBlue, borderRadius: '12px', cursor: 'pointer' }} className="d-flex align-items-center justify-content-center shadow-sm logo-icon" onClick={() => handleSelect(0)}>
             <span className="text-white fw-bold">C.</span>
           </div>
        </div>
        
        <div className="d-flex flex-column gap-4">
          {menuItems.map((item) => (
            <OverlayTrigger
              key={item.idx}
              placement="right"
              overlay={<Tooltip id={`tooltip-${item.idx}`}>{item.label}</Tooltip>}
            >
              <div 
                onClick={() => handleSelect(item.idx)}
                className={`sidebar-item p-3 rounded-4 ${index === item.idx ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {item.icon}
              </div>
            </OverlayTrigger>
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-grow-1 position-relative">
        <Carousel 
          activeIndex={index} 
          onSelect={handleSelect}
          interval={null} 
          indicators={false}
          controls={true}
          variant="dark" 
          className="h-100 custom-carousel"
        >
          
          {/* PAGE 1: A PROPOS (MISSION / OBJECTIF / REALISATIONS) */}
          <Carousel.Item className="min-vh-100">
  <div className="scroll-container-mobile h-100"> {/* Wrapper pour activer le scroll si nécessaire */}
    <Container className="min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="text-center mb-4">
        <Badge bg="warning" text="dark" className="mb-2 px-3 py-2 rounded-pill shadow-sm">Impact & Vision</Badge>
        <h1 className="display-5 fw-bold" style={{ color: caebBlue }}>À Propos du CAEB</h1>
      </div>
      
      {/* Suppression de overflow-hidden et des maxHeight fixes qui bloquaient le scroll */}
      <Row className="g-4 px-lg-4">
        <Col md={4}>
          <div className="p-4 h-100 rounded-5 shadow-sm bg-white border-start border-5 border-warning card-hover custom-scroll">
            <HiOutlineRocketLaunch size={32} className="mb-3 text-warning" />
            <h4 className="fw-bold">Mission</h4>
            <p className="text-muted small lh-base">
              La mission du CAEB est de contribuer aux côtés de l’Etat béninois à l’amélioration des conditions de vie des populations. Cette mission se décline en 6 grands objectifs :
              <br /><br />
              • Accès et maintien des enfants dans le système éducatif ;<br />
              • Amélioration de la qualité de l’éducation ;<br />
              • Formation des jeunes scolarisés ou non ;<br />
              • Développement de la Petite Enfance (DPE) ;<br />
              • Enrichissement des échanges nationaux et internationaux ;<br />
              • Renforcement des capacités institutionnelles.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 h-100 rounded-5 shadow-sm bg-white border-start border-5 border-primary card-hover custom-scroll">
            <HiOutlineLightBulb size={32} className="mb-3 text-primary" />
            <h4 className="fw-bold">Objectif</h4>
            <p className="text-muted small lh-base">
              L’objectif est d’assurer la formation permanente des éducateurs pour la promotion et le bien-être des enfants, des femmes, des adolescents et des adultes. 
              <br /><br />
              Cela implique des actions partenariales qui créent et mettent en réseau des espaces éducatifs et sociaux de formation et d’apprentissage pour un développement harmonieux de la communauté.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-4 h-100 rounded-5 shadow-sm bg-white border-start border-5 border-success card-hover custom-scroll">
            <HiOutlineBuildingLibrary size={32} className="mb-3 text-success" />
            <h4 className="fw-bold">Activités</h4>
            <p className="text-muted small lh-base">
              • Bourses VALLET ;<br />
              • Laboratoires d'IA et de langues ;<br />
              • Éducation à la citoyenneté (OVIDAGBE) ;<br />
              • Lutte contre la malnutrition infantile ;<br />
              • Hygiène menstruelle (Ouémé) ;<br />
              • Parrainage d'enfants ;<br />
              • Centres de métier ;<br />
              • Promotion du Développement Durable.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</Carousel.Item>

          {/* PAGE 2: DIRECTION */}
          <Carousel.Item className="vh-100 bg-light">
            <Container className="h-100 d-flex flex-column justify-content-center">
              <Row className="justify-content-center">
                <Col lg={10}>
                  <div className="bg-white rounded-5 shadow-lg overflow-hidden border-end border-5 border-primary">
                    <Row className="align-items-center g-0">
                      <Col md={5} className="text-center p-5 bg-light">
                        <Image 
                          src="https://media.licdn.com/dms/image/v2/D4E22AQERcA2LW1l53A/feedshare-shrink_2048_1536/B4EZaQvoAvHIAs-/0/1746185162782?e=1773273600&v=beta&t=rK2F81MyKhpxi_dLivjRXHTD_3Q3PQuR8UkRHoK7So0" 
                          roundedCircle 
                          style={{ width: '220px', height: '220px', objectFit: 'cover', border: '8px solid white', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} 
                        />
                      </Col>
                      <Col md={7} className="p-5">
                        <h6 className="text-uppercase fw-bold text-warning mb-2">Directeur Exécutif</h6>
                        <h2 className="display-5 fw-bold mb-3" style={{ color: caebBlue }}>M. Paul LOKO</h2>
                        <p className="text-muted fs-5 lh-base">Expert en Sociologie et Gestion des projets, il dirige le réseau CAEB avec une vision centrée sur le capital humain et l'innovation pédagogique.</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          {/* PAGE 3: CONSEIL D'ADMINISTRATION */}
          <Carousel.Item className="vh-100">
            <Container className="h-100 d-flex flex-column py-5">
              <div className="text-center mb-4">
                <h2 className="display-6 fw-bold" style={{ color: caebBlue }}>Conseil d'Administration</h2>
                <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: caebOrange, borderRadius: '2px' }}></div>
              </div>
              <div className="custom-scroll flex-grow-1 pe-2" style={{ overflowY: 'auto' }}>
                <Row className="justify-content-center g-3 pb-5">
                  {conseilAdministration.map((mem, i) => (
                    <Col lg={10} key={i}><TeamMemberLong {...mem} /></Col>
                  ))}
                </Row>
              </div>
            </Container>
          </Carousel.Item>

          {/* PAGE 4: BUREAU EXÉCUTIF */}
          <Carousel.Item className="vh-100 bg-light">
            <Container className="h-100 d-flex flex-column py-5">
              <div className="text-center mb-5">
                <h6 className="text-uppercase fw-bold text-warning" style={{ letterSpacing: '2px' }}>L'équipe opérationnelle</h6>
                <h2 className="display-6 fw-bold" style={{ color: caebBlue }}>Bureau Exécutif</h2>
              </div>
              <div className="custom-scroll flex-grow-1 px-3" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <Row className="g-4 justify-content-center pb-5">
                  {bureauExecutif.map((mem, i) => (
                    <Col md={6} lg={4} key={i}>
                      <div className="bg-white p-4 rounded-4 shadow-sm border h-100 member-card-v2 text-center transition-all">
                        <div className="position-relative mb-3 d-inline-block">
                          <Image src={mem.photo} roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover', border: `4px solid #f8f9fa` }} className="shadow-sm" />
                          <div className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px', border: '2px solid white' }}>
                            <HiOutlineUserGroup size={14} />
                          </div>
                        </div>
                        <h6 className="fw-bold mb-1" style={{ color: caebBlue }}>{mem.name}</h6>
                        <Badge bg="light" text="primary" className="mb-3 text-wrap border px-2 py-1">
                          {mem.role}
                        </Badge>
                        <p className="text-muted small mb-0 px-2" style={{ lineHeight: '1.4' }}>{mem.bio}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </Carousel.Item>

          {/* PAGE 5: CENTRES */}
          <Carousel.Item className="vh-100">
            <Container className="h-100 d-flex flex-column justify-content-center">
              <h2 className="text-center mb-5 fw-bold" style={{ color: caebBlue }}>Responsables de Centres</h2>
              <Row className="g-3 justify-content-center px-lg-5">
                {responsables.map((res, index) => (
                  <Col key={index} xs={6} md={3}>
                    <div className="text-center p-3 team-member-box bg-white rounded-4 border shadow-sm h-100" onClick={() => navigate(res.path)} style={{ cursor: 'pointer' }}>
                      <Image src={res.photo} roundedCircle className="mb-3" style={{ width: '85px', height: '85px', objectFit: 'cover', border: `3px solid #eee` }} />
                      <h6 className="fw-bold mb-1 small text-truncate" style={{ color: caebBlue }}>{res.name}</h6>
                      <Badge bg="light" text="dark" className="border small" style={{fontSize: '0.65rem'}}>{res.biblio}</Badge>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>

        </Carousel>
      </div>

      <style>{`
        .logo-icon:hover { transform: rotate(10deg); transition: 0.3s; }
        .sidebar-item { color: #A0AEC0; transition: all 0.3s ease; }
        .sidebar-item:hover { color: ${caebOrange}; background-color: #FFF5F0; transform: translateX(5px); }
        .sidebar-item.active { color: white !important; background-color: ${caebBlue}; box-shadow: 0 8px 15px rgba(29, 79, 154, 0.3); }
        
        .custom-scroll::-webkit-scrollbar { width: 5px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e0; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: ${caebBlue}; }

        .card-hover { transition: all 0.3s ease; border-top: 1px solid transparent; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0,0,0,0.08) !important; border-top-color: rgba(0,0,0,0.05); }

        .member-card-v2:hover { border-color: ${caebBlue} !important; transform: translateY(-5px); }
        .team-member-box:hover { transform: translateY(-5px); border-color: ${caebOrange} !important; background-color: #fffaf5 !important; }
        
        .custom-carousel .carousel-control-prev, .custom-carousel .carousel-control-next { width: 5%; opacity: 0.3; }
        .custom-carousel .carousel-control-prev:hover, .custom-carousel .carousel-control-next:hover { opacity: 0.9; }
      `}</style>
    </div>
  );
}

export default Infos;
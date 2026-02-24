import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineMap, 
  HiOutlineSparkles, 
  HiOutlineSun, 
  HiOutlineAcademicCap,
  HiOutlineChevronRight,
  HiOutlineLightBulb
} from "react-icons/hi2";

function Natitingou() {
  const caebGreen = "#2D5A27"; // Vert forêt pour l'Atacora
  const caebOcre = "#E2725B";  // Terre cuite pour le côté chaleureux du Nord

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture", desc: "Libérez votre plume entre les montagnes.", icon: <HiOutlineLightBulb /> },
    { jour: "Mercredi", activité: "Heure du conte", desc: "Légendes et récits pour les petits explorateurs.", icon: <HiOutlineSparkles /> },
    { jour: "Vendredi", activité: "Projection docu", desc: "Découverte du monde sur grand écran.", icon: <HiOutlineSun /> },
  ];

  const actualites = [
    { titre: "Salle climatisée", detail: "Un nouvel espace pour étudier au frais." },
    { titre: "Expo Livres", detail: "Focus sur les auteurs du Nord Bénin." },
    { titre: "Concours", detail: "Inscriptions ouvertes pour le prix littéraire." },
  ];

  const livres = [
    { titre: "L'Étranger", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg" },
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "1984", auteur: "George Orwell", image: "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg" },
    { titre: "La Peste", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "100vh", fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* --- HERO SECTION "AVENTURE" --- */}
      <section className="py-5 text-white" style={{ 
        background: `linear-gradient(160deg, ${caebGreen} 0%, #1a3a17 100%)`,
        borderRadius: "0 0 100px 0"
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <HiOutlineMap className="fs-3 me-2" style={{ color: caebOcre }} />
                <span className="text-uppercase fw-bold ls-2" style={{ letterSpacing: '3px' }}>Cité des Nanto</span>
              </div>
              <h1 className="display-2 fw-bold mb-4">Natitingou <br/><span style={{ color: caebOcre }}>S'éveille.</span></h1>
              <p className="fs-5 opacity-75 border-start ps-4">
                Plus qu'une bibliothèque, un refuge pour l'esprit au pied de l'Atacora. Venez cultiver votre curiosité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: "-60px" }}>
        {/* --- PROGRAMME (STYLE CARTES D'EXPLORATION) --- */}
        <div className="row g-4 mb-5">
          {programme.map((p, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-lg h-100 overflow-hidden" style={{ borderRadius: "25px" }}>
                <div className="p-4 d-flex align-items-start gap-3">
                  <div className="fs-1" style={{ color: caebGreen }}>{p.icon}</div>
                  <div>
                    <h5 className="fw-bold mb-1">{p.jour}</h5>
                    <p className="small fw-bold text-uppercase mb-2" style={{ color: caebOcre }}>{p.activité}</p>
                    <p className="small text-muted mb-0">{p.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-5">
          {/* --- LIVRES (STYLE VITRINE NATURELLE) --- */}
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 className="fw-bold"><HiOutlineAcademicCap className="me-2" style={{ color: caebGreen }} />Les Essentiels</h3>
              <Link to="/catalogue/library5" className="btn btn-outline-dark rounded-pill px-4 btn-sm">Explorer le fonds</Link>
            </div>
            <div className="row g-4">
              {livres.map((l, i) => (
                <div key={i} className="col-sm-6 col-md-3">
                  <div className="book-card-nati position-relative">
                    <img src={l.image} alt={l.titre} className="img-fluid rounded-4 shadow-sm mb-3" style={{ height: "240px", width: "100%", objectFit: "cover" }} />
                    <h6 className="fw-bold mb-0 text-truncate">{l.titre}</h6>
                    <small className="text-muted">{l.auteur}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- ACTUALITÉS (STYLE GAZETTE) --- */}
          <div className="col-lg-4">
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${caebGreen}20` }}>
              <h4 className="fw-bold mb-4 border-bottom pb-2">Dernières Nouvelles</h4>
              {actualites.map((a, i) => (
                <div key={i} className="mb-4 group-news transition-all">
                  <h6 className="fw-bold mb-1 d-flex align-items-center">
                    <HiOutlineChevronRight className="me-2 text-success" /> {a.titre}
                  </h6>
                  <p className="small text-muted mb-0 ps-4">{a.detail}</p>
                </div>
              ))}
              <div className="mt-5 p-3 rounded-4 text-center" style={{ backgroundColor: `${caebOcre}15` }}>
                 <p className="small fw-bold mb-0" style={{ color: caebOcre }}>Rejoignez notre club de lecture !</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .book-card-nati { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .book-card-nati:hover { transform: scale(1.05) rotate(2deg); }
        .group-news:hover { transform: translateX(10px); }
        .ls-2 { letter-spacing: 2px; }
      `}</style>
    </div>
  );
}

export default Natitingou;
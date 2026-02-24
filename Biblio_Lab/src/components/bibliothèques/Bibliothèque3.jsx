import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineCalendar, 
  HiOutlineNewspaper, 
  HiOutlineBookOpen, 
  HiOutlineClock, 
  HiOutlineArrowRight,
  HiOutlineSparkles
} from "react-icons/hi2";

function Parakou_Zongo() {
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const programme = [
    { jour: "Lun - Sam", activité: "Consultation & Prêt", desc: "Accès libre aux collections de 8h à 18h.", icon: <HiOutlineBookOpen /> },
    { jour: "Vendredi", activité: "Vendredi Détente", desc: "Animations, jeux et concours (16h-18h).", icon: <HiOutlineSparkles /> },
    { jour: "Samedi", activité: "Clubs d'Animation", desc: "Ateliers danse et créativité (15h-18h).", icon: <HiOutlineCalendar /> },
  ];

  const actualites = [
    { date: "15 Mai", texte: "Ouverture de la nouvelle salle de lecture numérique." },
    { date: "22 Mai", texte: "Exposition : Les manuscrits anciens du Nord Bénin." },
    { date: "01 Juin", texte: "Lancement du concours national de lecture." },
  ];

  const livres = [
    { titre: "L'Étranger", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg" },
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "1984", auteur: "George Orwell", image: "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg" },
    { titre: "La Peste", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- HERO SECTION --- */}
      <section className="text-white py-5 shadow-sm" style={{ background: `linear-gradient(135deg, ${caebBlue} 0%, #2c3e50 100%)`, borderRadius: "0 0 50px 50px" }}>
        <div className="container text-center py-4">
          <Badge text="Parakou - Quartier Zongo" color={caebOrange} />
          <h1 className="display-4 fw-800 mb-3 mt-2">Bibliothèque CAEB Zongo</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: "700px" }}>
            Votre passerelle vers le savoir. Un espace climatisé, calme et riche de plus de 5000 ouvrages pour tous les âges.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: "-40px" }}>
        {/* --- QUICK INFO CARDS --- */}
        <div className="row g-4 mb-5">
          {programme.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-3" style={{ borderRadius: "20px" }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 rounded-circle" style={{ backgroundColor: `${caebOrange}15`, color: caebOrange, fontSize: "1.5rem" }}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-muted small fw-bold">{item.jour}</span>
                    <h5 className="mb-0 fw-bold" style={{ color: caebBlue }}>{item.activité}</h5>
                  </div>
                </div>
                <p className="text-muted small mt-3 mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-5">
          {/* --- LIVRES (CÔTÉ GAUCHE) --- */}
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 className="fw-bold m-0"><HiOutlineBookOpen className="me-2 text-primary" />Nouveautés</h3>
              <Link to="/catalogue/library1" className="text-decoration-none fw-bold" style={{ color: caebOrange }}>
                Voir tout <HiOutlineArrowRight />
              </Link>
            </div>
            <div className="row row-cols-2 row-cols-md-4 g-3">
              {livres.map((livre, i) => (
                <div key={i} className="col">
                  <div className="card h-100 border-0 shadow-sm book-card overflow-hidden">
                    <img src={livre.image} alt={livre.titre} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                    <div className="card-body p-2 text-center">
                      <h6 className="mb-0 text-truncate fw-bold">{livre.titre}</h6>
                      <small className="text-muted">{livre.auteur}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- ACTUALITÉS (CÔTÉ DROIT) --- */}
          <div className="col-lg-4">
            <h3 className="fw-bold mb-4"><HiOutlineNewspaper className="me-2 text-primary" />Fil d'actualité</h3>
            <div className="bg-white p-4 rounded-4 shadow-sm border-start border-4" style={{ borderColor: caebBlue }}>
              {actualites.map((news, idx) => (
                <div key={idx} className={`pb-3 ${idx !== actualites.length - 1 ? 'mb-3 border-bottom' : ''}`}>
                  <span className="badge bg-light text-dark mb-1">{news.date}</span>
                  <p className="mb-0 small fw-medium">{news.texte}</p>
                </div>
              ))}
            </div>
            
            {/* --- CALL TO ACTION --- */}
            <div className="mt-4 p-4 rounded-4 text-white shadow-sm" style={{ background: caebOrange }}>
              <h5 className="fw-bold"><HiOutlineClock className="me-2" />Horaires d'été</h5>
              <p className="small mb-0">Nous restons ouverts pendant les vacances scolaires pour vos recherches !</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fw-800 { font-weight: 800; }
        .book-card { transition: transform 0.3s ease; cursor: pointer; }
        .book-card:hover { transform: translateY(-10px); }
        .badge-custom { padding: 8px 16px; border-radius: 50px; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; }
      `}</style>
    </div>
  );
}

// Petit composant utilitaire interne
const Badge = ({ text, color }) => (
  <span className="badge-custom shadow-sm" style={{ backgroundColor: color, color: 'white' }}>{text}</span>
);

export default Parakou_Zongo;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineUserGroup, 
  HiOutlineMicrophone, 
  HiOutlineTv,
  HiOutlineNewspaper,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen
} from "react-icons/hi2";

function Djougou() {
  const caebDjougouOcre = "#f39c12";
  const caebDjougouPurple = "#6f42c1";

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture", icon: <HiOutlineMicrophone />, accent: "#e67e22" },
    { jour: "Mercredi", activité: "Heure du conte", icon: <HiOutlineUserGroup />, accent: "#9b59b6" },
    { jour: "Vendredi", activité: "Projection", icon: <HiOutlineTv />, accent: "#2ecc71" },
  ];

  const actualites = [
    "Inauguration de l'espace numérique.",
    "Exposition : Les manuscrits de la Donga.",
    "Atelier informatique pour tous les âges.",
  ];

  const livres = [
    { titre: "L'Étranger", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg" },
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "1984", auteur: "George Orwell", image: "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg" },
    { titre: "La Peste", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", fontFamily: "'Work Sans', sans-serif" }}>
      
      {/* --- HERO SECTION VIBRANTE --- */}
      <section className="py-5" style={{ background: `linear-gradient(45deg, ${caebDjougouPurple}, ${caebDjougouOcre})`, clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
        <div className="container py-5 text-white">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-black mb-3">Djougou en <br/><span className="text-warning">Mouvement</span></h1>
              <p className="fs-5 opacity-75 mb-4">Votre centre de ressources au cœur de la Donga. Explorez, apprenez et connectez-vous au monde.</p>
              <div className="d-flex gap-2">
                <span className="badge bg-white text-dark p-2 px-3 rounded-pill shadow-sm">🌍 Multilingue</span>
                <span className="badge bg-white text-dark p-2 px-3 rounded-pill shadow-sm">💻 Wifi Gratuit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: "-30px" }}>
        {/* --- ACTUALITÉS EN BANDEAU DÉFILANT (Conceptuel) --- */}
        <div className="bg-white shadow-sm p-3 rounded-4 mb-5 border-start border-5 border-warning d-flex align-items-center">
          <HiOutlineNewspaper className="fs-4 me-3 text-muted" />
          <div className="overflow-hidden">
            <p className="mb-0 fw-bold text-muted small text-uppercase">Flash : {actualites[0]}</p>
          </div>
        </div>

        <div className="row g-4">
          {/* --- PROGRAMME (STYLE BLOCS INTERACTIFS) --- */}
          <div className="col-lg-4">
            <h4 className="fw-bold mb-4">Agenda Culturel</h4>
            {programme.map((item, index) => (
              <div key={index} className="card border-0 mb-3 shadow-sm hover-scale" style={{ borderRadius: "20px", overflow: "hidden" }}>
                <div className="card-body d-flex align-items-center p-3">
                  <div className="rounded-4 p-3 me-3 text-white shadow" style={{ backgroundColor: item.accent }}>
                    {item.icon}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{item.jour}</h6>
                    <small className="text-muted">{item.activité}</small>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-4 rounded-4 text-center border border-2 border-dashed">
               <HiOutlineGlobeAlt className="fs-1 text-primary mb-2" />
               <h6 className="fw-bold">Accès International</h6>
               <p className="small text-muted">Consultez nos revues étrangères disponibles chaque mois.</p>
            </div>
          </div>

          {/* --- LIVRES (STYLE MOSAÏQUE) --- */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold m-0"><HiOutlineBookOpen className="text-warning me-2"/>La Vitrine Littéraire</h3>
              <Link to="/catalogue/library8" className="btn btn-dark btn-sm rounded-pill px-4">Tout voir</Link>
            </div>
            
            <div className="row g-4">
              {livres.map((livre, i) => (
                <div key={i} className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-2" style={{ borderRadius: "25px", backgroundColor: "#f8f9fa" }}>
                    <div className="row g-0 align-items-center">
                      <div className="col-4">
                        <img src={livre.image} alt={livre.titre} className="img-fluid rounded-4 shadow-sm" style={{ height: "120px", width: "100%", objectFit: "cover" }} />
                      </div>
                      <div className="col-8">
                        <div className="card-body py-0">
                          <h6 className="fw-bold mb-1 text-truncate">{livre.titre}</h6>
                          <p className="small text-muted mb-2">{livre.auteur}</p>
                          <span className="badge rounded-pill bg-warning-subtle text-warning border border-warning" style={{ fontSize: '0.6rem' }}>NOUVEAU</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .fw-black { font-weight: 900; }
        .hover-scale { transition: transform 0.3s ease; cursor: pointer; }
        .hover-scale:hover { transform: scale(1.03); }
        .bg-warning-subtle { background-color: #fff3cd !important; }
      `}</style>
    </div>
  );
}

export default Djougou;
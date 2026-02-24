import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineLightBulb, 
  HiOutlineBookOpen, 
  HiOutlineSpeakerWave, 
  HiOutlineIdentification,
  HiOutlineArrowUpRight,
  HiOutlineQueueList
} from "react-icons/hi2";

function Lokossa() {
  const caebIndigo = "#303F9F";
  const caebSlate = "#F0F2F5";

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture", icon: <HiOutlineLightBulb />, type: "Création" },
    { jour: "Mercredi", activité: "Heure du conte", icon: <HiOutlineSpeakerWave />, type: "Jeunesse" },
    { jour: "Vendredi", activité: "Projection docu", icon: <HiOutlineBookOpen />, type: "Culture" },
  ];

  const actualites = [
    "Nouvelle salle de lecture ouverte !",
    "Exposition : Livres anciens jusqu’au fin mai.",
    "Concours de lecture – inscriptions ouvertes.",
  ];

  const livres = [
    { titre: "L'Étranger", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg" },
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "1984", auteur: "George Orwell", image: "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg" },
    { titre: "La Peste", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#333" }}>
      
      {/* --- HERO SECTION MINIMALISTE --- */}
      <section className="py-5" style={{ borderBottom: `1px solid ${caebSlate}` }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h6 className="text-uppercase fw-bold mb-3" style={{ color: caebIndigo, letterSpacing: "2px" }}>Plateforme Lokossa</h6>
              <h1 className="display-4 fw-bold mb-4">L'espace où le <span style={{ color: caebIndigo }}>Savoir</span> prend racine.</h1>
              <div className="d-flex gap-3">
                <button className="btn btn-dark rounded-0 px-4">S'inscrire</button>
                <button className="btn btn-outline-dark rounded-0 px-4">Nos horaires</button>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
               <div className="p-5 rounded-circle shadow-lg text-center" style={{ background: caebIndigo, color: 'white', width: "250px", height: "250px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h2 className="fw-bold mb-0">+5k</h2>
                  <p className="small mb-0">Ouvrages</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-5">
          {/* --- PROGRAMME (STYLE LISTE PROPRE) --- */}
          <div className="col-lg-4">
            <div className="mb-5">
              <h4 className="fw-bold mb-4 d-flex align-items-center">
                <HiOutlineQueueList className="me-2" /> Agenda
              </h4>
              {programme.map((item, index) => (
                <div key={index} className="d-flex align-items-center p-3 mb-2 border-start border-3 transition-hover" style={{ borderColor: caebIndigo, backgroundColor: caebSlate }}>
                  <div className="me-3 fs-4 text-primary">{item.icon}</div>
                  <div>
                    <div className="small fw-bold text-muted text-uppercase" style={{ fontSize: '0.7rem' }}>{item.type} • {item.jour}</div>
                    <div className="fw-bold">{item.activité}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-dark text-white rounded-0">
               <h5 className="fw-bold mb-3"><HiOutlineIdentification className="me-2 text-info" /> Carte Lecteur</h5>
               <p className="small opacity-75">Accédez à tous les services CAEB avec votre carte unique. Disponible à l'accueil.</p>
            </div>
          </div>

          {/* --- CATALOGUE (STYLE GRILLE ARCHITECTURALE) --- */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-end mb-4">
              <h3 className="fw-bold m-0">Nouveautés du mois</h3>
              <Link to="/catalogue/library7" className="text-dark fw-bold small">CATALOGUE COMPLET <HiOutlineArrowUpRight /></Link>
            </div>
            
            <div className="row g-4">
              {livres.map((livre, i) => (
                <div key={i} className="col-md-6">
                  <div className="card border-0 rounded-0 shadow-sm h-100 overflow-hidden">
                    <div className="row g-0 h-100">
                      <div className="col-5">
                        <img src={livre.image} alt={livre.titre} className="h-100 w-100 object-fit-cover" />
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="card-body p-3">
                          <h6 className="fw-bold mb-1">{livre.titre}</h6>
                          <p className="small text-muted mb-0">{livre.auteur}</p>
                          <hr style={{ width: "30px", color: caebIndigo }} />
                          <span className="badge bg-light text-dark fw-normal">Disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- ACTUALITÉS (STYLE BANDEAU BAS) --- */}
            <div className="mt-5 p-4 border rounded-0">
              <h5 className="fw-bold mb-3">En bref</h5>
              <div className="row">
                {actualites.map((news, idx) => (
                  <div key={idx} className="col-md-4 mb-2">
                    <p className="small mb-0 border-end pe-2 h-100">• {news}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transition-hover:hover {
          background-color: #e2e6ea !important;
          transform: translateX(5px);
          transition: all 0.3s ease;
        }
        .object-fit-cover { object-fit: cover; }
      `}</style>
    </div>
  );
}

export default Lokossa;
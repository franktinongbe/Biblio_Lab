import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineBeaker, 
  HiOutlineAcademicCap, 
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlinePlusCircle,
  HiOutlineScale // On remplace Microscope par Scale ou une autre icône existante
} from "react-icons/hi2";

function Parakou_FM_UP() {
  const medicalCyan = "#00ADB5";
  const medicalDark = "#222831";

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture", icon: <HiOutlineDocumentText />, code: "MED-01" },
    { jour: "Mercredi", activité: "Heure du conte", icon: <HiOutlineAcademicCap />, code: "MED-02" },
    { jour: "Vendredi", activité: "Projection docu", icon: <HiOutlineBeaker />, code: "MED-03" },
  ];

  const actualites = [
    "Accès aux bases de données médicales mondiales.",
    "Nouvelle collection de manuels d'anatomie.",
    "Conférence : Éthique et Médecine le 15 Mars.",
  ];

  const livres = [
    { titre: "L'Étranger", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg" },
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "1984", auteur: "George Orwell", image: "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg" },
    { titre: "La Peste", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#f9fcfd", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- HERO SECTION "LABORATOIRE" --- */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: medicalDark, color: "white" }}>
        <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="d-flex align-items-center mb-3">
                 <HiOutlinePlusCircle className="fs-3 me-2" style={{ color: medicalCyan }} />
                 <span className="fw-bold text-uppercase small">Campus Universitaire UP</span>
              </div>
              <h1 className="display-4 fw-bold mb-3">Pôle <span style={{ color: medicalCyan }}>Santé</span> & Savoir</h1>
              <p className="lead opacity-75">La bibliothèque dédiée aux futurs professionnels de la santé de Parakou.</p>
            </div>
            <div className="col-md-5 text-center d-none d-md-block opacity-25">
               <HiOutlineMicroscope style={{ fontSize: "200px" }} />
            </div>
          </div>
        </div>
        {/* Grille technique en fond */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </section>

      <div className="container" style={{ marginTop: "-30px" }}>
        {/* --- ACTUALITÉS (STYLE NOTIFICATION) --- */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="bg-white p-3 shadow-sm rounded-pill d-flex align-items-center px-4 border">
              <span className="badge me-3" style={{ backgroundColor: medicalCyan }}>FLASH INFO</span>
              <marquee className="small fw-medium text-muted">{actualites.join(" • ")}</marquee>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* --- PROGRAMME (STYLE FICHE CLINIQUE) --- */}
          <div className="col-lg-4">
            <h5 className="fw-bold mb-4 d-flex align-items-center">
              <HiOutlineClock className="me-2 text-primary" /> Sessions d'Études
            </h5>
            {programme.map((p, i) => (
              <div key={i} className="card border-0 border-bottom mb-3 rounded-0 bg-transparent">
                <div className="d-flex p-3 align-items-center">
                  <div className="p-3 bg-white border rounded shadow-sm me-3">{p.icon}</div>
                  <div>
                    <div className="text-muted fw-bold" style={{ fontSize: '0.7rem' }}>MODULE {p.code}</div>
                    <div className="fw-bold">{p.jour} : {p.activité}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-5 p-4 rounded-4 text-white" style={{ background: `linear-gradient(135deg, ${medicalCyan}, #00818a)` }}>
               <h6 className="fw-bold">Espace de Recherche</h6>
               <p className="small mb-0">Besoin d'aide pour vos thèses ? Nos bibliothécaires spécialisés vous accompagnent.</p>
            </div>
          </div>

          {/* --- LIVRES (STYLE ÉTAGÈRE MODERNE) --- */}
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold m-0">Ressources Académiques</h4>
              <Link to="/catalogue/library4" className="btn btn-sm btn-outline-dark rounded-0 px-3">Catalogue FM</Link>
            </div>

            <div className="row g-4">
              {livres.map((l, i) => (
                <div key={i} className="col-sm-6 col-md-3">
                  <div className="card h-100 border-0 shadow-sm bg-white hover-up transition-all">
                    <div className="p-2">
                      <img src={l.image} alt={l.titre} className="card-img-top rounded shadow-sm" style={{ height: "180px", objectFit: "cover" }} />
                    </div>
                    <div className="card-body pt-0 text-center">
                      <p className="small fw-bold mb-1 text-truncate">{l.titre}</p>
                      <div style={{ height: "2px", width: "20px", background: medicalCyan, margin: "0 auto" }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transition-all { transition: 0.3s ease; }
        .hover-up:hover { transform: translateY(-10px); }
        .fw-black { font-weight: 900; }
      `}</style>
    </div>
  );
}

export default Parakou_FM_UP;
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineAcademicCap, 
  HiOutlineBuildingLibrary, 
  HiOutlinePaintBrush,
  HiOutlineStar,
  HiOutlineBookmark,
  HiOutlineScale
} from "react-icons/hi2";

function Abomey() {
  const caebRoyalRed = "#A52A2A"; // Rouge brique/terre cuite
  const caebGold = "#C5A059";     // Or vieilli pour le côté royal

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture", desc: "Laisser une trace par les mots.", icon: <HiOutlinePaintBrush /> },
    { jour: "Mercredi", activité: "Heure du conte", desc: "Transmission des récits ancestraux.", icon: <HiOutlineStar /> },
    { jour: "Vendredi", activité: "Documentaire", desc: "Fenêtre ouverte sur l'histoire.", icon: <HiOutlineBuildingLibrary /> },
  ];

  const actualites = [
    "Ouverture de l'espace Histoire & Patrimoine.",
    "Exposition : 'Les Reines d'Abomey'.",
    "Grand concours d'éloquence en Juin.",
  ];

  const livres = [
    { titre: "L'Étranger", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg" },
    { titre: "Le Petit Prince", auteur: "Saint-Exupéry", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "1984", auteur: "George Orwell", image: "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg" },
    { titre: "La Peste", auteur: "Albert Camus", image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#fff9f5", minHeight: "100vh", fontFamily: "'Garamond', serif" }}>
      
      {/* --- HERO SECTION ROYALE --- */}
      <section className="py-5 text-center shadow-sm" style={{ 
        background: `linear-gradient(rgba(165, 42, 42, 0.9), rgba(165, 42, 42, 0.9)), url('https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        color: "white",
        borderRadius: "0 0 0 150px"
      }}>
        <div className="container py-4">
          <div className="mb-3 d-flex justify-content-center">
            <div style={{ width: "60px", height: "2px", backgroundColor: caebGold, alignSelf: "center" }}></div>
            <HiOutlineScale className="mx-3 fs-3" style={{ color: caebGold }} />
            <div style={{ width: "60px", height: "2px", backgroundColor: caebGold, alignSelf: "center" }}></div>
          </div>
          <h1 className="display-3 fw-bold mb-2">Abomey <span style={{ color: caebGold }}>Royale</span></h1>
          <p className="lead opacity-75">Héritage, Savoir et Destinée.</p>
        </div>
      </section>

      <div className="container" style={{ marginTop: "-40px" }}>
        {/* --- PROGRAMME EN MODE "CARTOUCHE" --- */}
        <div className="row g-4 mb-5">
          {programme.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm h-100 transition-up" style={{ borderRadius: "15px", borderLeft: `5px solid ${caebGold}` }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3 fs-1" style={{ color: caebRoyalRed }}>{item.icon}</div>
                  <h5 className="fw-bold" style={{ color: caebRoyalRed }}>{item.jour}</h5>
                  <h6 className="small text-muted text-uppercase fw-bold mb-2">{item.activité}</h6>
                  <p className="small mb-0 italic">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-5">
          {/* --- ACTUALITÉS (STYLE PARCHEMIN) --- */}
          <div className="col-lg-4">
            <div className="p-4 h-100" style={{ backgroundColor: "#fdf2e9", borderRadius: "20px", border: "1px solid #ead6c5" }}>
              <h3 className="fw-bold mb-4 d-flex align-items-center" style={{ color: caebRoyalRed }}>
                <HiOutlineBookmark className="me-2" /> Chroniques
              </h3>
              {actualites.map((news, idx) => (
                <div key={idx} className="mb-4 border-bottom border-white pb-2">
                  <p className="mb-0 fw-medium" style={{ color: "#5d4037" }}>{news}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- LIVRES (STYLE GALERIE) --- */}
          <div className="col-lg-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 className="fw-bold m-0"><HiOutlineAcademicCap className="me-2 text-dark" />La Collection des Rois</h3>
              <Link to="/catalogue/library6" className="text-decoration-none fw-bold" style={{ color: caebRoyalRed }}>
                Parcourir tout →
              </Link>
            </div>
            <div className="row g-4">
              {livres.map((livre, i) => (
                <div key={i} className="col-sm-6 col-md-3">
                  <div className="card h-100 border-0 shadow-sm bg-transparent book-card-royal">
                    <div className="position-relative">
                       <img src={livre.image} alt={livre.titre} className="card-img-top rounded-3" style={{ height: "220px", objectFit: "cover" }} />
                       <div className="book-badge">{i + 1}</div>
                    </div>
                    <div className="card-body p-2 text-center">
                      <p className="small fw-bold mb-0 text-truncate">{livre.titre}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transition-up { transition: all 0.3s ease; }
        .transition-up:hover { transform: translateY(-8px); background-color: #fffaf0; }
        .book-card-royal { cursor: pointer; }
        .book-card-royal img { transition: transform 0.5s ease; border: 1px solid #e0cda9; }
        .book-card-royal:hover img { transform: scale(1.03); border-color: ${caebGold}; }
        .book-badge { 
          position: absolute; top: -10px; right: -10px; 
          background: ${caebGold}; color: white; width: 30px; height: 30px; 
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem; font-weight: bold; border: 2px solid white;
        }
        .italic { font-style: italic; }
      `}</style>
    </div>
  );
}

export default Abomey;
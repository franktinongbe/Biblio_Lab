import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlinePaintBrush, 
  HiOutlineMicrophone, 
  HiOutlineFilm, 
  HiOutlineHeart,
  HiOutlineBookmark,
  HiOutlineChatBubbleLeftRight
} from "react-icons/hi2";

function PortoNovo2() {
  const caebBlue = "#1D4F9A";
  const caebMint = "#48c6ef"; // Couleur fraîche pour Attakè
  const caebCoral = "#ff6b6b"; // Couleur d'accent pour le côté ludique

  const programme = [
    { jour: "Mardi", activité: "Atelier de lecture", icon: <HiOutlinePaintBrush />, bg: "#e3f2fd" },
    { jour: "Jeudi", activité: "Heure du poésie", icon: <HiOutlineMicrophone />, bg: "#fff3e0" },
    { jour: "Vendredi", activité: "Dessins Animés", icon: <HiOutlineFilm />, bg: "#fce4ec" },
  ];

  const actualites = [
    "Journée porte ouverte !",
    "Exposition de livres jusqu'à fin Mai.",
    "Concours d'écriture – inscriptions ouvertes.",
  ];

  const livres = [
    { titre: "Une vie de boy", auteur: "Ferdinand Oyono", image: "https://i.pinimg.com/736x/f1/1f/b0/f11fb00db4a269084a5f6408aae06f71.jpg" },
    { titre: "Le lion et la perle", auteur: "Wole Soyinka", image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg" },
    { titre: "Une si longue lettre", auteur: "Mariama Bâ", image: "https://i.pinimg.com/736x/89/40/31/8940316fa0729cee710202730780f5ed.jpg" },
    { titre: "Sous l'orage", auteur: "Seydou Badian", image: "https://i.pinimg.com/736x/f6/e3/4a/f6e34a27f1bda105ec581c48eb07529f.jpg" },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      
      {/* --- HERO SECTION LUDIQUE --- */}
      <section className="py-5 overflow-hidden position-relative" style={{ background: `linear-gradient(135deg, ${caebMint} 0%, ${caebBlue} 100%)`, borderRadius: "0 0 60px 60px" }}>
        <div className="container py-4 text-center text-white position-relative" style={{ zIndex: 2 }}>
          <div className="d-inline-block p-2 px-4 rounded-pill mb-3 shadow-sm" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" }}>
             ✨ Espace Créatif Attakè
          </div>
          <h1 className="display-3 fw-bold mb-3">S'éveiller à <span style={{ color: '#fff176' }}>Attakè</span></h1>
          <p className="lead mx-auto opacity-90" style={{ maxWidth: "600px" }}>
            Un coin de paradis pour les petits et grands rêveurs. Venez lire, jouer et créer chaque semaine !
          </p>
        </div>
        {/* Cercles décoratifs en fond */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
      </section>

      <div className="container" style={{ marginTop: "-30px" }}>
        {/* --- PROGRAMME EN BULLES --- */}
        <div className="row g-4 mb-5 justify-content-center">
          {programme.map((p, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-lg text-center p-4 h-100 hover-float" style={{ borderRadius: "30px", backgroundColor: p.bg }}>
                <div className="fs-1 mb-2" style={{ color: caebBlue }}>{p.icon}</div>
                <h5 className="fw-bold">{p.jour}</h5>
                <p className="mb-0 text-muted fw-medium">{p.activité}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {/* --- LIVRES (STYLE GRILLE CRÉATIVE) --- */}
          <div className="col-lg-8 mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="p-2 bg-success rounded-3 me-3 text-white shadow-sm"><HiOutlineBookmark size={24}/></div>
              <h3 className="fw-bold m-0">Le coin des bouquineurs</h3>
            </div>
            <div className="row g-4">
              {livres.map((l, i) => (
                <div key={i} className="col-sm-6">
                  <div className="d-flex align-items-center bg-light p-3 rounded-4 shadow-sm h-100 transition-all border-bottom border-4 border-transparent hover-border-success">
                    <img src={l.image} alt={l.titre} className="rounded-3 shadow-sm" style={{ width: "80px", height: "110px", objectFit: "cover" }} />
                    <div className="ms-3">
                      <h6 className="fw-bold mb-1">{l.titre}</h6>
                      <p className="small text-muted mb-2">{l.auteur}</p>
                      <button className="btn btn-sm p-0 text-success fw-bold">Lire plus +</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- ACTUALITÉS & CONTACT (DROITE) --- */}
          <div className="col-lg-4">
            <div className="card border-0 bg-dark text-white p-4 rounded-4 shadow-lg mb-4">
              <h4 className="fw-bold mb-4 d-flex align-items-center">
                <HiOutlineChatBubbleLeftRight className="me-2 text-warning" /> Quoi de neuf ?
              </h4>
              <ul className="list-unstyled">
                {actualites.map((a, i) => (
                  <li key={i} className="mb-3 d-flex align-items-baseline">
                    <span className="me-2 text-warning">●</span>
                    <span className="small opacity-90">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-4 border-dashed text-center" style={{ border: `2px dashed ${caebMint}` }}>
               <HiOutlineHeart className="fs-1 mb-2" style={{ color: caebCoral }} />
               <h5 className="fw-bold">Besoin d'aide ?</h5>
               <p className="small text-muted">Donnez vos avis sur nos livres et offrez une seconde vie au savoir à Attakè.</p>
               <button className="btn btn-sm text-white rounded-pill px-4" style={{ backgroundColor: caebMint }}>Faire un don</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-float { transition: transform 0.3s ease; }
        .hover-float:hover { transform: translateY(-10px); }
        .hover-border-success:hover { border-color: #28a745 !important; background-color: #fff !important; }
        .border-transparent { border-color: transparent; }
        .transition-all { transition: 0.3s; }
        .border-dashed { border-style: dashed !important; }
      `}</style>
    </div>
  );
}

export default PortoNovo2;
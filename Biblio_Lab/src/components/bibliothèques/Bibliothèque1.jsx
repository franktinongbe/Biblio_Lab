import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  HiOutlineBookOpen, 
  HiOutlinePencilSquare, 
  HiOutlineUserGroup, 
  HiOutlineVideoCamera,
  HiOutlineChevronRight,
  HiOutlineBell
} from "react-icons/hi2";

function PortoNovo1() {
  const [livres, setLivres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  const caebBlue = "#1D4F9A";
  const caebGold = "#D4AF37"; // Une touche dorée pour le côté "Siège / Prestige"

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture", icon: <HiOutlinePencilSquare />, color: "#4e73df" },
    { jour: "Mercredi", activité: "Heure du conte", icon: <HiOutlineUserGroup />, color: "#1cc88a" },
    { jour: "Vendredi", activité: "Projection documentaire", icon: <HiOutlineVideoCamera />, color: "#e74a3b" },
  ];

  useEffect(() => {
    const fetchLivres = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://bibliolab.onrender.com/api/books", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLivres(response.data.slice(0, 4)); // On en prend 4 pour la vitrine
        setLoading(false);
      } catch (error) {
        setErreur("Impossible de charger les ouvrages.");
        setLoading(false);
      }
    };
    fetchLivres();
  }, []);

  return (
    <div style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", fontFamily: "'Playfair Display', serif" }}>
      
      {/* --- HERO SECTION PRESTIGE --- */}
      <section className="position-relative py-5 text-white" style={{ 
        background: `linear-gradient(rgba(29, 79, 154, 0.85), rgba(29, 79, 154, 0.85)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: "0 0 80px 0"
      }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7 text-start">
              <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: caebGold, color: '#000' }}>Établissement Principal</span>
              <h1 className="display-3 fw-bold mb-3">Porto-Novo <span style={{ color: caebGold }}>Siège</span></h1>
              <p className="fs-5 opacity-75">Le sanctuaire du savoir au cœur de la capitale. Un patrimoine documentaire d'exception au service de l'excellence académique.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: "-50px" }}>
        <div className="row g-4">
          
          {/* --- SIDEBAR INFOS --- */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4 p-4 mb-4">
              <h4 className="fw-bold mb-4 d-flex align-items-center">
                <HiOutlineBell className="me-2 text-primary" /> Actualités
              </h4>
              <div className="timeline-small">
                {["Nouvelle salle numérique ouverte", "Exposition : Livres anciens", "Concours de lecture"].map((actu, i) => (
                  <div key={i} className="d-flex mb-3 align-items-start">
                    <div className="bg-primary rounded-circle me-3 mt-1" style={{ width: "10px", height: "10px", flexShrink: 0 }}></div>
                    <p className="small mb-0 fw-medium">{actu}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
               <div className="p-4" style={{ background: caebBlue, color: 'white' }}>
                  <h5 className="mb-0 fw-bold">Agenda Hebdo</h5>
               </div>
               <div className="p-0">
                  {programme.map((p, i) => (
                    <div key={i} className="d-flex align-items-center p-3 border-bottom hover-bg-light transition-all">
                      <div className="me-3 fs-3" style={{ color: p.color }}>{p.icon}</div>
                      <div>
                        <div className="fw-bold small text-muted">{p.jour}</div>
                        <div className="fw-bold">{p.activité}</div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* --- MAIN CONTENT: LIVRES --- */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold m-0 text-dark">Collections du Siège</h3>
                <Link to="/catalogue/library1" className="btn btn-sm btn-outline-primary rounded-pill px-3">Tout voir</Link>
              </div>

              {loading ? (
                <div className="text-center py-5">
                   <div className="spinner-border text-primary" role="status"></div>
                </div>
              ) : erreur ? (
                <div className="alert alert-light border text-danger">{erreur}</div>
              ) : (
                <div className="row g-4">
                  {livres.map((livre) => (
                    <div key={livre._id} className="col-md-6 col-xl-3">
                      <div className="book-item text-center">
                        <div className="position-relative mb-3 overflow-hidden rounded-3 shadow" style={{ height: "220px" }}>
                          <img
                            src={livre.coverImage || "https://via.placeholder.com/250x350?text=Livre"}
                            alt={livre.title}
                            className="w-100 h-100 object-fit-cover transition-transform"
                          />
                          <div className="overlay d-flex align-items-center justify-content-center">
                             <HiOutlineBookOpen className="text-white fs-1" />
                          </div>
                        </div>
                        <h6 className="fw-bold mb-1 text-truncate">{livre.title}</h6>
                        <p className="text-muted small">{livre.author?.name || "Auteur inconnu"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-auto pt-4 border-top">
                <div className="bg-light p-3 rounded-3 d-flex justify-content-between align-items-center">
                  <span className="small text-muted">Plus de 12 000 références disponibles au siège.</span>
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .transition-all { transition: all 0.3s ease; }
        .hover-bg-light:hover { background-color: #f8f9fa; cursor: pointer; }
        .book-item img:hover { transform: scale(1.1); }
        .overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(29, 79, 154, 0.6); opacity: 0; transition: 0.3s;
        }
        .book-item:hover .overlay { opacity: 1; }
        .timeline-small { position: relative; }
      `}</style>
    </div>
  );
}

export default PortoNovo1;
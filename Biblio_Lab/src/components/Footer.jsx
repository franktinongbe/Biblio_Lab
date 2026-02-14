import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const socialIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none"
  };

  return (
    <footer
      className="text-white"
      style={{
        background: `linear-gradient(to bottom, ${caebBlue}, #153a71)`,
        padding: '80px 0 30px 0',
        borderTop: `6px solid ${caebOrange}`,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      <div className="container">
        <div className="row g-5 text-center text-md-start justify-content-between">

          {/* SECTION LOGO & MISSION */}
          <div className="col-12 col-md-4">
            <div 
              className="footer-logo-circle"
              style={{ 
                backgroundColor: "white", 
                width: "90px", 
                height: "90px", 
                borderRadius: "50%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                marginBottom: "25px",
                padding: "10px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: "transform 0.5s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(360deg)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg)"}
            >
              <img src="/images/logoc.png" alt="C.A.E.B." style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <h5 className="fw-bold mb-3" style={{ letterSpacing: "1px" }}>C.A.E.B. BÉNIN</h5>
            <p className="small opacity-75 mb-4" style={{ lineHeight: "1.8", maxWidth: "300px" }}>
              Le Conseil des Activités Éducatives du Bénin œuvre pour l'excellence éducative et l'accès à la culture pour tous.
            </p>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  style={socialIconStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = caebOrange; e.currentTarget.style.transform = "translateY(-5px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SECTION NAVIGATION DYNAMIQUE */}
          <div className="col-12 col-md-3">
            <h5 className="mb-4 fw-bold text-uppercase" style={{ fontSize: "0.9rem", color: caebOrange }}>Navigation</h5>
            <ul className="list-unstyled">
              {["Accueil", "Bibliothèques", "Infos", "Inscription", "Connexion"].map((text, idx) => (
                <li key={idx} className="mb-3">
                  <Link
                    to={text === "Accueil" ? "/accueil" : `/${text.toLowerCase().replace(/\s/g, "")}`}
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start transition-link"
                    style={{ opacity: 0.8, transition: 'all 0.3s' }}
                  >
                    <span className="dot" style={{ width: "0px", height: "2px", backgroundColor: caebOrange, display: "inline-block", marginRight: "0px", transition: "0.3s" }}></span>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION CONTACT INTERACTIF */}
          <div className="col-12 col-md-4">
            <h5 className="mb-4 fw-bold text-uppercase" style={{ fontSize: "0.9rem", color: caebOrange }}>Contactez-nous</h5>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 opacity-75 hover-contact">
              <HiOutlineLocationMarker size={22} className="me-3 text-warning" />
              <span className="small">Siège Social, Porto-Novo, Bénin, Derrière la CRIET</span>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 opacity-75 hover-contact">
              <HiOutlinePhone size={22} className="me-3 text-warning" />
              <span className="small">+229 20 21 XX XX</span>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-4 opacity-75 hover-contact">
              <HiOutlineMail size={22} className="me-3 text-warning" />
              <span className="small">caeb@caeb-benin.com</span>
            </div>
            <div className="p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderLeft: `4px solid ${caebOrange}` }}>
                <p className="mb-0 small" style={{ fontStyle: "italic", opacity: 0.9 }}>
                  "La lecture est une amitié." — Rejoignez notre réseau.
                </p>
            </div>
          </div>

        </div>
        
        <hr className="mt-5 mb-4" style={{ opacity: 0.1, backgroundColor: '#fff' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <small className="opacity-50">© 2026 C.A.E.B. Bénin. Tous droits reservés.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/pdc" className="text-white text-decoration-none small opacity-50 me-4 hover-opacity">Confidentialité</Link>
            <Link to="/cgu" className="text-white text-decoration-none small opacity-50 hover-opacity">Mentions Légales</Link>
          </div>
        </div>
      </div>

      <style>{`
        .transition-link:hover {
          color: ${caebOrange} !important;
          opacity: 1 !important;
          padding-left: 10px;
        }
        .transition-link:hover .dot {
          width: 15px !important;
          margin-right: 10px !important;
        }
        .hover-contact:hover {
          opacity: 1 !important;
          transform: translateX(5px);
          transition: 0.3s;
        }
        .hover-opacity:hover {
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
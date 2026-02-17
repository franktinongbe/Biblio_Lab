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
        padding: '60px 0 30px 0',
        borderTop: `6px solid ${caebOrange}`,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      <div className="container">
        <div className="row g-5 text-center text-md-start justify-content-between">

          {/* SECTION LOGO & MISSION */}
          <div className="col-12 col-md-4">
            <div 
              className="footer-logo-circle mx-auto mx-md-0"
              style={{ 
                backgroundColor: "white", 
                width: "80px", 
                height: "80px", 
                borderRadius: "50%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                marginBottom: "20px",
                padding: "8px",
                boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(360deg) scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg) scale(1)"}
            >
              <img src="/images/logoc.png" alt="Logo C.A.E.B." style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <h5 className="fw-bold mb-3" style={{ letterSpacing: "1px" }}>CAEB BÉNIN</h5>
            <p className="small opacity-75 mb-4" style={{ lineHeight: "1.7", maxWidth: "320px" }}>
              Le Conseil des Activités Éducatives du Bénin œuvre pour l'excellence éducative et l'accès à la culture pour tous à travers son réseau de bibliothèques.
            </p>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              {[
                { Icon: FaFacebookF, link: "#", label: "Facebook" },
                { Icon: FaTwitter, link: "#", label: "Twitter" },
                { Icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
                { Icon: FaYoutube, link: "#", label: "YouTube" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialIconStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = caebOrange; e.currentTarget.style.transform = "translateY(-5px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SECTION NAVIGATION DYNAMIQUE */}
          <div className="col-12 col-sm-6 col-md-3">
            <h5 className="mb-4 fw-bold text-uppercase" style={{ fontSize: "0.85rem", color: caebOrange, letterSpacing: "1px" }}>Navigation</h5>
            <ul className="list-unstyled">
              {[
                { name: "Accueil", path: "/accueil" },
                { name: "Bibliothèques", path: "/library" },
                { name: "Infos & Valeurs", path: "/about" },
                { name: "S'inscrire", path: "/Sign in" },
                { name: "Se connecter", path: "/Log in" },
                { name: "FAQ", path: "/faq" }
              ].map((link, idx) => (
                <li key={idx} className="mb-3">
                  <Link
                    to={link.path}
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start transition-link"
                    style={{ opacity: 0.8 }}
                  >
                    <span className="dot" style={{ width: "0px", height: "2px", backgroundColor: caebOrange, display: "inline-block", transition: "0.3s" }}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION CONTACT */}
          <div className="col-12 col-sm-6 col-md-4">
            <h5 className="mb-4 fw-bold text-uppercase" style={{ fontSize: "0.85rem", color: caebOrange, letterSpacing: "1px" }}>Contactez-nous</h5>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 opacity-75 hover-contact">
              <HiOutlineLocationMarker size={20} className="me-3" style={{ color: caebOrange }} />
              <span className="small">Siège Social, Porto-Novo, Bénin, Oganla</span>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3 opacity-75 hover-contact">
              <HiOutlinePhone size={20} className="me-3" style={{ color: caebOrange }} />
              <span className="small">+229 20 21 XX XX</span>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-4 opacity-75 hover-contact">
              <HiOutlineMail size={20} className="me-3" style={{ color: caebOrange }} />
              <span className="small">caeb@caeb-benin.com</span>
            </div>
            <div className="p-3 rounded-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderLeft: `4px solid ${caebOrange}` }}>
                <p className="mb-0 small" style={{ fontStyle: "italic", opacity: 0.9 }}>
                  "La lecture est une amitié qui ne trompe jamais."
                </p>
            </div>
          </div>

        </div>
        
        <hr className="mt-5 mb-4" style={{ opacity: 0.1, backgroundColor: '#fff' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <small className="opacity-50">© {new Date().getFullYear()} CAEB Bénin. Tous droits réservés.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link to="/pdc" className="text-white text-decoration-none small opacity-50 me-4 hover-opacity">Confidentialité</Link>
          </div>
        </div>
      </div>

      <style>{`
        .transition-link:hover {
          color: ${caebOrange} !important;
          opacity: 1 !important;
          transform: translateX(8px);
          transition: all 0.3s ease;
        }
        .transition-link:hover .dot {
          width: 12px !important;
          margin-right: 10px !important;
        }
        .hover-contact:hover {
          opacity: 1 !important;
          transform: translateX(5px);
          transition: 0.3s;
        }
        .hover-opacity:hover {
          opacity: 1 !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
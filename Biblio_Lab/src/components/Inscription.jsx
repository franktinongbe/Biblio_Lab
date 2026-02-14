import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../services/CallApi";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { 
  HiOutlineUser, HiOutlineMail, HiOutlinePhone, 
  HiOutlineLockClosed, HiOutlineArrowRight 
} from 'react-icons/hi';

function Inscription() {
  const navigate = useNavigate();
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const [formData, setFormData] = useState({
    nom: "", prenom: "", email: "",
    telephone: "", username: "", password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vide = Object.values(formData).some((val) => val.trim() === "");
    if (vide) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setIsSubmitting(true);
      await axios.post("/auth/register", { ...formData, role: "utilisateur" });
      toast.success("Bienvenue dans la famille C.A.E.B. !");
      setTimeout(() => navigate("/accueil"), 2000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Erreur lors de l'inscription.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      background: "radial-gradient(circle at bottom right, #e0eafc, #cfdef3)", // Design Nuageux
      padding: "40px 20px",
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Éclats lumineux en arrière-plan */}
      <div style={{ position: "absolute", width: "600px", height: "600px", background: "rgba(255,255,255,0.7)", borderRadius: "50%", bottom: "-10%", right: "-10%", filter: "blur(100px)", zIndex: 0 }}></div>
      <div style={{ position: "absolute", width: "400px", height: "400px", background: "rgba(242, 153, 74, 0.15)", borderRadius: "50%", top: "-5%", left: "-5%", filter: "blur(80px)", zIndex: 0 }}></div>

      <ToastContainer position="top-center" autoClose={3000} />

      <div className="card border-0" style={{ 
        maxWidth: "850px", 
        width: "100%", 
        borderRadius: "30px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.85)", // Glassmorphism
        backdropFilter: "blur(20px)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.06)",
        zIndex: 1
      }}>
        <div className="row g-0">
          
          {/* Côté gauche : Identité visuelle */}
          <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-center p-5 text-white" 
               style={{ background: `linear-gradient(135deg, ${caebBlue} 0%, #4a90e2 100%)` }}>
             <div style={{ backgroundColor: "white", width: "85px", height: "85px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px", padding: "12px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                <img src="/images/logoc.png" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
             </div>
             <h2 className="fw-bold mb-3" style={{ letterSpacing: "-1px" }}>Rejoignez le réseau</h2>
             <p className="opacity-90 mb-4" style={{ lineHeight: "1.6" }}>
               Créez votre compte en quelques secondes et accédez à l'ensemble des bibliothèques du C.A.E.B. Bénin.
             </p>
             <div className="p-3 rounded-4" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <small className="fst-italic">"La culture est l'élargissement de l'esprit et de l'âme."</small>
             </div>
          </div>

          {/* Côté droit : Formulaire éclatant */}
          <div className="col-lg-7 p-4 p-md-5">
            <div className="text-center text-lg-start mb-4">
              <h3 className="fw-bold mb-1" style={{ color: caebBlue, letterSpacing: "-0.5px" }}>Créer un profil</h3>
              <p className="text-muted small">Remplissez les informations ci-dessous</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {[
                  { icon: <HiOutlineUser/>, label: "Nom", name: "nom", type: "text", col: "col-6" },
                  { icon: <HiOutlineUser/>, label: "Prénom", name: "prenom", type: "text", col: "col-6" },
                  { icon: <HiOutlineMail/>, label: "Email professionnel ou perso", name: "email", type: "email", col: "col-12" },
                  { icon: <HiOutlinePhone/>, label: "Téléphone", name: "telephone", type: "tel", col: "col-12" },
                  { icon: <HiOutlineUser/>, label: "Nom d'utilisateur", name: "username", type: "text", col: "col-12" },
                  { icon: <HiOutlineLockClosed/>, label: "Mot de passe sécurisé", name: "password", type: "password", col: "col-12" },
                ].map(({ icon, label, name, type, col }) => (
                  <div className={col} key={name}>
                    <label className="form-label small fw-bold text-secondary mb-1 ms-1">{label}</label>
                    <div className="input-group custom-input-group shadow-sm">
                      <span className="input-group-text border-0 bg-white ps-3">
                        {React.cloneElement(icon, { size: 18, color: caebBlue })}
                      </span>
                      <input
                        type={type}
                        name={name}
                        className="form-control border-0 bg-white py-2"
                        placeholder="..."
                        style={{ borderRadius: "0 12px 12px 0", fontSize: "0.9rem" }}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="btn w-100 mt-4 text-white d-flex align-items-center justify-content-center gap-2"
                disabled={isSubmitting}
                style={{
                  background: `linear-gradient(135deg, ${caebOrange} 0%, #ffb347 100%)`,
                  fontWeight: '700',
                  border: 'none',
                  borderRadius: '15px',
                  padding: '15px',
                  transition: 'all 0.3s ease',
                  boxShadow: "0 10px 20px rgba(242, 153, 74, 0.2)"
                }}
              >
                {isSubmitting ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : (
                  <>Commencer l'aventure <HiOutlineArrowRight /></>
                )}
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-muted small">Vous avez déjà un compte ? </span>
              <Link to="/connexion" className="small fw-bold text-decoration-none" style={{ color: caebBlue }}>
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-input-group {
          border-radius: 12px;
          overflow: hidden;
          transition: 0.3s ease;
          border: 1px solid transparent;
        }
        .custom-input-group:focus-within {
          border-color: ${caebBlue};
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(29, 79, 154, 0.08) !important;
        }
        .btn:hover:not(:disabled) {
          transform: translateY(-3px);
          filter: brightness(1.05);
          box-shadow: 0 15px 25px rgba(242, 153, 74, 0.3) !important;
        }
        @media (max-width: 576px) {
          .col-6 { width: 100% !important; }
        }
      `}</style>
    </div>
  );
}

export default Inscription;
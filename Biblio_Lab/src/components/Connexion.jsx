import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from "../services/CallApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineArrowRight } from 'react-icons/hi';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/auth/login', { username, password });
      const { token } = res.data;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      navigate(decoded?.role === 'admin' ? '/admin' : '/accueil');
    } catch (err) {
      setError(err.response?.data?.msg || "Identifiants incorrects.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center" style={{ 
      background: "radial-gradient(circle at top left, #e0eafc, #cfdef3)", // Effet nuageux/ciel
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Éléments décoratifs "Éclatants" (Cercles flous) */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "rgba(255,255,255,0.6)", borderRadius: "50%", top: "-10%", left: "-10%", filter: "blur(80px)", zIndex: 0 }}></div>
      <div style={{ position: "absolute", width: "400px", height: "400px", background: "rgba(29, 79, 154, 0.1)", borderRadius: "50%", bottom: "-10%", right: "-10%", filter: "blur(80px)", zIndex: 0 }}></div>

      <div className="card border-0" style={{ 
        maxWidth: '420px', 
        width: '90%', 
        borderRadius: '30px', 
        background: "rgba(255, 255, 255, 0.8)", 
        backdropFilter: "blur(15px)", // Effet de verre
        boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        zIndex: 1
      }}>
        <div className="card-body p-4 p-md-5">
          
          {/* Logo dans son rond blanc éclatant */}
          <div className="text-center mb-4">
            <div style={{ 
              backgroundColor: "white", 
              width: "90px", 
              height: "90px", 
              borderRadius: "50%", 
              display: "inline-flex", 
              justifyContent: "center", 
              alignItems: "center",
              marginBottom: "15px",
              boxShadow: "0 10px 25px rgba(29, 79, 154, 0.15)",
              padding: "10px"
            }}>
              <img src="/images/logoc.png" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <h2 className="fw-bold mb-1" style={{ color: caebBlue, letterSpacing: "-1px" }}>Bon retour !</h2>
            <p className="text-muted small">Heureux de vous revoir parmi nous</p>
          </div>

          {error && (
            <div className="alert alert-danger border-0 rounded-3 text-center py-2 mb-4" style={{ fontSize: '0.85rem', backgroundColor: "#ffebee", color: "#c62828" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="input-group custom-input-group">
                <span className="input-group-text border-0 bg-white ps-3">
                  <HiOutlineUser color={caebBlue} size={20} />
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-white py-3 shadow-none"
                  placeholder="Nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ borderRadius: '0 15px 15px 0', fontSize: '0.95rem' }}
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="input-group custom-input-group">
                <span className="input-group-text border-0 bg-white ps-3">
                  <HiOutlineLockClosed color={caebBlue} size={20} />
                </span>
                <input
                  type="password"
                  className="form-control border-0 bg-white py-3 shadow-none"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderRadius: '0 15px 15px 0', fontSize: '0.95rem' }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100 py-3 mb-4 shadow-sm d-flex align-items-center justify-content-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${caebBlue} 0%, #4a90e2 100%)`,
                color: "white",
                fontWeight: '700',
                border: 'none',
                borderRadius: '15px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)"; e.target.style.boxShadow = "0 10px 20px rgba(29, 79, 154, 0.3)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "0 10px 20px rgba(29, 79, 154, 0.1)"; }}
            >
              {loading ? "Connexion..." : "Se connecter"}
              {!loading && <HiOutlineArrowRight />}
            </button>
          </form>

          <div className="text-center">
            <p className="small text-muted mb-0">
              Pas encore de compte ? <br />
              <Link to="/Log in" className="fw-bold text-decoration-none" style={{ color: caebOrange }}>
                Créer un profil gratuitement
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-input-group {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          transition: 0.3s;
          border: 1px solid transparent;
        }
        .custom-input-group:focus-within {
          border-color: ${caebBlue};
          box-shadow: 0 5px 15px rgba(29, 79, 154, 0.1);
        }
        input::placeholder {
          color: #adb5bd;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
};

export default Connexion;
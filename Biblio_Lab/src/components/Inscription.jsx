import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/CallApi";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Inscription() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    username: "",
    password: "",
  });

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
      await axios.post("/auth/register", { ...formData, role: "utilisateur" });
      toast.success("Inscription réussie ! Redirection...");
      setTimeout(() => {
        navigate("/accueil");
      }, 2000);
    } catch (err) {
      toast.error(
        err.response?.data?.msg ||
        "Erreur lors de l'inscription. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="mx-auto shadow-lg rounded-4 p-4" style={{ maxWidth: "600px", background: "#f8f9fa" }}>
        <h2 className="text-center mb-4">Formulaire d'Inscription</h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: "Nom", name: "nom", type: "text" },
            { label: "Prénom", name: "prenom", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Téléphone", name: "telephone", type: "tel" },
            { label: "Nom d'utilisateur", name: "username", type: "text" },
            { label: "Mot de passe", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div className="mb-3" key={name}>
              <label htmlFor={name} className="form-label">{label}</label>
              <input
                type={type}
                id={name}
                name={name}
                className="form-control"
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="btn w-100 mt-3"
            style={{
              background: 'linear-gradient(to right, #fd7e14, rgb(53, 82, 248))',
              color: 'white',
              fontWeight: '600',
              border: 'none',
              borderRadius: '30px',
              padding: '12px',
              fontSize: '1rem',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 15px rgba(238, 9, 121, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;

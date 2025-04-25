import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/CallApi"; 
import "bootstrap/dist/css/bootstrap.min.css";

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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const vide = Object.values(formData).some((val) => val.trim() === "");
    if (vide) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      // On envoie formData avec rôle défini en interne
      await axios.post("/auth/register", { ...formData, role: "utilisateur" });
      setSuccess(true);

      setTimeout(() => {
        navigate("/accueil");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.msg ||
        "Erreur lors de l'inscription. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="mx-auto shadow-lg rounded-4 p-4" style={{ maxWidth: "600px", background: "#f8f9fa" }}>
        <h2 className="text-center mb-4">Formulaire d'Inscription</h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}
        {success && (
          <div className="alert alert-success text-center">
            Inscription réussie ! Redirection en cours...
          </div>
        )}

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

          <button type="submit" className="btn btn-warning w-100 mt-3">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;

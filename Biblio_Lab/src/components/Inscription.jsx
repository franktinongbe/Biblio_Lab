import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Vérification si tous les champs sont remplis
    const vide = Object.values(formData).some((val) => val.trim() === "");
    if (vide) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    // Sauvegarder les données dans le localStorage pour simuler un enregistrement
    localStorage.setItem("user", JSON.stringify(formData));

    // Naviguer vers l'accueil après "inscription"
    navigate("/accueil");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Formulaire d'Inscription</h2>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">Prénom</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="form-control"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">Téléphone</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            className="form-control"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-warning w-100">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Inscription;

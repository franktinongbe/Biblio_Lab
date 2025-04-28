import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Bibliothèque1() {
  const [livres, setLivres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  const programme = [
    { jour: "Lundi", activité: "Atelier d'écriture" },
    { jour: "Mercredi", activité: "Heure du conte pour enfants" },
    { jour: "Vendredi", activité: "Projection documentaire" },
  ];

  const actualites = [
    "Nouvelle salle de lecture ouverte !",
    "Exposition : Livres anciens jusqu’au fin mai.",
    "Concours de lecture – inscriptions ouvertes.",
  ];

  useEffect(() => {
    const fetchLivres = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://bibliolab.onrender.com/api/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLivres(response.data);
        setLoading(false);
      } catch (error) {
        setErreur("Erreur lors du chargement des livres.");
        setLoading(false);
      }
    };

    fetchLivres();
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">📚 Bibliothèque 1</h1>
        <p className="lead text-muted">
          Un lieu moderne dédié au savoir et à la créativité.
        </p>
      </div>

      {/* Programme */}
      <section className="mb-5">
        <h3 className="mb-3 text-warning">🗓️ Programme Hebdomadaire</h3>
        <div className="row">
          {programme.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="bg-light p-3 rounded border shadow-sm h-100">
                <h5 className="text-dark">{item.jour}</h5>
                <p className="mb-0">{item.activité}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Actualités */}
      <section className="mb-5">
        <h3 className="mb-3 text-primary">📰 Actualités</h3>
        <div className="bg-light border p-4 rounded shadow-sm">
          <ul className="mb-0">
            {actualites.map((news, idx) => (
              <li key={idx} className="mb-2">{news}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Livres dynamiques */}
      <section>
        <h3 className="mb-4 text-success">📖 Livres Disponibles</h3>

        {loading ? (
          <p>Chargement des livres...</p>
        ) : erreur ? (
          <div className="alert alert-danger">{erreur}</div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {livres.map((livre) => (
              <div key={livre._id} className="col">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={livre.coverImage || "https://via.placeholder.com/250x350?text=Livre"}
                    alt={livre.title}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{livre.title}</h5>
                    <p className="text-center text-muted small">
                      {livre.author?.name || "Auteur inconnu"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-end mt-4">
          <Link to="/library1/books" className="btn btn-outline-success">
            Voir tous les livres →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Bibliothèque1;

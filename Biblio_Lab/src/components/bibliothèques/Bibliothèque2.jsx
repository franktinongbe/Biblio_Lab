import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Bibliothèque2() {
  const programme = [
    { jour: "Mardi", activité: "Atelier de lecture" },
    { jour: "Jeudi", activité: "Heure du poésir pour enfants" },
    { jour: "Vendredi", activité: "Projection de dessin animé" },
  ];

  const actualites = [
    "Journée porte ouverte !",
    "Exposition : Livres jusqu’au fin mai.",
    "Concours d'écriture – inscriptions ouvertes.",
  ];

  const livres = [
    {
      titre: "Une vie de boy - Ferdinand Oyono",
      image: "https://i.pinimg.com/736x/71/0f/56/710f56ca11ca5f08edd62eec9aea547b.jpg",
    },
    {
      titre: "Le lion et la perle - Wole Soyinka",
      image: "https://i.pinimg.com/736x/2d/6d/0b/2d6d0b7fb21183921f86f23f1c15ad94.jpg",
    },
    {
      titre: "une si longue lettre- Mariam Ba",
      image: "https://i.pinimg.com/736x/89/40/31/8940316fa0729cee710202730780f5ed.jpg",
    },
    {
      titre: "Sous l'orage - Seydou Badian",
      image: "https://i.pinimg.com/736x/d0/a8/59/d0a859b50b31803f7b3fa7ebf9324b5d.jpg",
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">📚 Bibliothèque 2</h1>
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

      {/* Livres disponibles */}
      <section>
        <h3 className="mb-4 text-success">📖 Livres Disponibles</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {livres.map((livre, i) => (
            <div key={i} className="col">
              <div className="card h-100 shadow-sm border-0 hover-shadow">
                <img
                  src={livre.image}
                  alt={livre.titre}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text text-center fw-semibold">{livre.titre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-end mt-4">
          <Link to="/library2/books" className="btn btn-outline-success">
            Voir tous les livres →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Bibliothèque2;

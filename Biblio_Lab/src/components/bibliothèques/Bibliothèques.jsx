import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Importation de la police Montserrat via JS si non incluse ailleurs
const montserratStyle = document.createElement("link");
montserratStyle.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap";
montserratStyle.rel = "stylesheet";
document.head.appendChild(montserratStyle);

function Bibliothèques() {
  const [commentaires, setCommentaires] = useState([]);
  const [nom, setNom] = useState("");
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");

  const libraries = [
  {
    id: 1,
    name: "PortoNovo1",
    image: "/images/porto1.jpg", // Chemin relatif au dossier public
    description: "Une collection moderne avec un espace numérique dynamique.",
    path: "/library1",
  },
  {
    id: 2,
    name: "PortoNovo2",
    image: "/images/attakè.jpg",
    description: "Un lieu calme et propice à la lecture et à l’étude.",
    path: "/library2",
  },
  {
    id: 3,
    name: "Parakou Zongo",
    image: "/images/parakou..jpg",
    description: "Une bibliothèque axée sur les archives et documents anciens.",
    path: "/library3",
  },
  {
    id: 4,
    name: "Parakou FM UP",
    image: "/images/up.jpg",
    description: "Un espace jeune public rempli de romans, BD et animations.",
    path: "/library4",
  },
  {
    id: 5,
    name: "Natitingou",
    image: "/images/titingou.jpg",
    description: "Une bibliothèque moderne avec des espaces de travail collaboratif.",
    path: "/library5",
  },
  {
    id: 6,
    name: "Abomey",
    image: "/images/abomey.jpg",
    description: "Une bibliothèque moderne avec des espaces de travail collaboratif.",
    path: "/library6",
  },
  {
    id: 7,
    name: "Lokossa",
    image: "/images/kossalo.jpg",
    description: "Un espace jeune public rempli de romans, BD et animations.",
    path: "/library7",
  },
  {
    id: 8,
    name: "Djougou",
    image: "/images/djougou.jpg",
    description: "Un espace jeune public rempli de romans, BD et animations.",
    path: "/library8",
  },
];
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (nom.trim() && nouveauCommentaire.trim()) {
      setCommentaires([...commentaires, { nom: nom.trim(), texte: nouveauCommentaire.trim() }]);
      setNouveauCommentaire("");
      setNom("");
    }
  };

  return (
    <div className="bg-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Hero Section */}
      <div
        className="text-center py-5"
        style={{
          background: "linear-gradient(to right,rgb(251, 253, 255))",
          color: "black",
        }}
      >
        <h1 className="display-4 fw-bold">Nos Bibliothèques en Réseau</h1>
        <p className="lead">Découvrez les lieux de savoir à travers notre réseau de bibliothèques</p>
      </div>

      {/* Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {libraries.map((library) => (
            <div key={library.id} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow border-0">
                <img
                  src={library.image}
                  className="card-img-top"
                  alt={library.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{library.name}</h5>
                  <p className="card-text">{library.description}</p>
                  <Link to={library.path} className="btn mt-auto text-white" style={{
                    background: "linear-gradient(to right, #f2994a, #2d9cdb)",
                    border: "none"
                  }}>
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commentaires Section */}
        <section className="mt-5">
          <h3 className="mb-3" style={{ color: "#f2994a" }}>💬 Vos Commentaires sur les Bibliothèques</h3>

          {/* Formulaire de commentaire */}
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <div className="mb-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Votre nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <textarea
                className="form-control"
                placeholder="Partagez votre expérience ou recommandez une bibliothèque..."
                rows="3"
                value={nouveauCommentaire}
                onChange={(e) => setNouveauCommentaire(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn text-white" style={{
              background: "linear-gradient(to right, #f2994a, #2d9cdb)",
              border: "none"
            }}>
              Envoyer
            </button>
          </form>

          {/* Liste des commentaires */}
          {commentaires.length > 0 ? (
            <ul className="list-group">
              {commentaires.map((comment, index) => (
                <li key={index} className="list-group-item">
                  <strong>{comment.nom} :</strong> {comment.texte}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">Aucun commentaire pour le moment.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default Bibliothèques;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Bibliothèques() {
  const [commentaires, setCommentaires] = useState([]);
  const [nom, setNom] = useState("");
  const [nouveauCommentaire, setNouveauCommentaire] = useState("");

  const libraries = [
    {
      id: 1,
      name: "Bibliothèque1",
      image: "https://cdn.pixabay.com/photo/2015/09/05/21/51/library-925589_1280.jpg",
      description: "Une collection moderne avec un espace numérique dynamique.",
      path: "/library1",
    },
    {
      id: 2,
      name: "Bibliothèque2",
      image: "https://i.pinimg.com/736x/d4/08/d8/d408d8f291dbd85577e86f92e489c3cd.jpg",
      description: "Un lieu calme et propice à la lecture et à l’étude.",
      path: "/library2",
    },
    {
      id: 3,
      name: "Bibliothèque3",
      image: "https://i.pinimg.com/736x/9e/e9/7a/9ee97a452c19ed21ab50ef1ccf21db0d.jpg",
      description: "Une bibliothèque axée sur les archives et documents anciens.",
      path: "/library3",
    },
    {
      id: 4,
      name: "Bibliothèque4",
      image: "https://i.pinimg.com/736x/c4/80/72/c48072fb052948204f3a6312a427586e.jpg",
      description: "Un espace jeune public rempli de romans, BD et animations.",
      path: "/library4",
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
    <div className="bg-light">
      {/* Hero Section */}
      <div className="text-center py-5" style={{ backgroundColor: "#fd7e14", color: "white" }}>
        <h1 className="display-4 fw-bold">Nos Bibliothèques en Réseau</h1>
        <p className="lead">Découvrez les lieux de savoir à travers notre réseau de bibliothèques</p>
      </div>

      {/* Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {libraries.map((library) => (
            <div key={library.id} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow border-dark">
                <img
                  src={library.image}
                  className="card-img-top"
                  alt={library.name}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{library.name}</h5>
                  <p className="card-text">{library.description}</p>
                  <Link to={library.path} className="btn btn-outline-dark mt-auto">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commentaires Section */}
        <section className="mt-5">
          <h3 className="mb-3 text-warning">💬 Vos Commentaires sur les Bibliothèques</h3>

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
            <button type="submit" className="btn btn-warning">Envoyer</button>
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

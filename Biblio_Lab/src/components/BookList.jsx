import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineSearch } from 'react-icons/hi';

const BookList = () => {
  const { category, biblioId } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Simulation de base de données (À remplacer par ton API plus tard)
  const allBooks = {
    ecoliers: [
      { id: 1, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", type: "Conte", cover: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/Le-Petit-Prince.jpg" },
      { id: 2, title: "Exercices de Calcul CM2", author: "Éditions Scolaires", type: "Scolaire", cover: "https://via.placeholder.com/150x200?text=Calcul+CM2" },
      { id: 3, title: "Akissi: Attaque de chats", author: "Marguerite Abouet", type: "BD", cover: "https://via.placeholder.com/150x200?text=Akissi" }
    ],
    eleves: [
      { id: 4, title: "Sous l'orage", author: "Seydou Badian", type: "Littérature", cover: "https://via.placeholder.com/150x200?text=Sous+L+Orage" },
      { id: 5, title: "Physique-Chimie 3ème", author: "Collection Durandeau", type: "Sciences", cover: "https://via.placeholder.com/150x200?text=Physique+3eme" },
      { id: 6, title: "L'Aventure Ambiguë", author: "Cheikh Hamidou Kane", type: "Littérature", cover: "https://via.placeholder.com/150x200?text=L+Aventure+Ambigue" }
    ],
    etudiants: [
      { id: 7, title: "Droit Constitutionnel", author: "Maurice Hauriou", type: "Droit", cover: "https://via.placeholder.com/150x200?text=Droit" },
      { id: 8, title: "Macroéconomie", author: "Gregory Mankiw", type: "Économie", cover: "https://via.placeholder.com/150x200?text=Economie" },
      { id: 9, title: "Méthodologie de Recherche", author: "Raymond Quivy", type: "Recherche", cover: "https://via.placeholder.com/150x200?text=Methodologie" }
    ]
  };

  const books = allBooks[category] || [];
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const colors = {
    ecoliers: "#4CAF50",
    eleves: "#2196F3",
    etudiants: "#E91E63",
    fm: "#1D4F9A"
  };

  return (
    <div style={{ backgroundColor: "#f4f7f6", minHeight: "100vh", paddingTop: "20px" }}>
      <div className="container">
        {/* Retour et Titre */}
        <div className="d-flex align-items-center mb-4">
          <button onClick={() => navigate(-1)} className="btn btn-light rounded-circle shadow-sm me-3">
            <HiOutlineArrowLeft size={24} />
          </button>
          <h2 className="fw-bold mb-0" style={{ color: colors[category] }}>
            Espace {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </h2>
        </div>

        {/* Barre de Recherche */}
        <div className="input-group mb-5 shadow-sm rounded-pill overflow-hidden">
          <span className="input-group-text bg-white border-0 ps-4"><HiOutlineSearch /></span>
          <input 
            type="text" 
            className="form-control border-0 py-3" 
            placeholder="Rechercher un titre, un auteur..." 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grille de Livres */}
        <div className="row g-4">
          {filteredBooks.length > 0 ? filteredBooks.map(book => (
            <div className="col-6 col-md-4 col-lg-3" key={book.id}>
              <div className="card h-100 border-0 shadow-sm book-card" style={{ borderRadius: "15px", overflow: "hidden" }}>
                <img src={book.cover} className="card-img-top" alt={book.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body p-3">
                  <span className="badge mb-2" style={{ backgroundColor: colors[category] + "20", color: colors[category] }}>{book.type}</span>
                  <h6 className="fw-bold mb-1 text-truncate">{book.title}</h6>
                  <p className="small text-muted mb-3">{book.author}</p>
                  <button className="btn btn-sm w-100 rounded-pill" style={{ border: `1px solid ${colors[category]}`, color: colors[category] }}>
                    Détails
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-5">
              <p className="text-muted">Aucun ouvrage trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .book-card { transition: all 0.3s ease; cursor: pointer; }
        .book-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
      `}</style>
    </div>
  );
};

export default BookList;
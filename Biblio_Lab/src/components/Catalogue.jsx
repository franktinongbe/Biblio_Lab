import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiOutlineAcademicCap, HiOutlineBookOpen, HiOutlineUserGroup, HiOutlineLibrary } from 'react-icons/hi';
import { FaStethoscope } from 'react-icons/fa';

const Catalogue = () => {
  const { biblioId } = useParams(); // Récupère l'ID de la biblio (ex: library1, fm, etc.)
  const navigate = useNavigate();

  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  // Définition des catégories selon la bibliothèque
  const isFM = biblioId.toLowerCase() === 'fm' || biblioId === 'library4'; // Adaptez selon vos IDs

  const categoriesClassiques = [
    { id: 'ecoliers', title: 'Écoliers', icon: <HiOutlineUserGroup />, desc: 'Albums, contes et premières lectures.' },
    { id: 'eleves', title: 'Élèves', icon: <HiOutlineBookOpen />, desc: 'Manuels scolaires et romans jeunesse.' },
    { id: 'etudiants', title: 'Étudiants', icon: <HiOutlineAcademicCap />, desc: 'Ouvrages de recherche et culture générale.' },
  ];

  const categoriesFM = [
    { id: 'medecine', title: 'Médecine Générale', icon: <FaStethoscope />, desc: 'Anatomie, sémiologie et pathologie.' },
    { id: 'specialites', title: 'Spécialités', icon: <HiOutlineLibrary />, desc: 'Pédiatrie, Gynécologie, Chirurgie, etc.' },
    { id: 'recherche', title: 'Thèses & Mémoires', icon: <HiOutlineAcademicCap />, desc: 'Travaux de recherche des étudiants en médecine.' },
  ];

  const categories = isFM ? categoriesFM : categoriesClassiques;

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", fontFamily: "'Montserrat', sans-serif" }}>
      {/* Header Dynamique */}
      <div style={{ background: caebBlue, color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <h1 className="fw-bold">Catalogue {isFM ? "Faculté de Médecine" : "Général"}</h1>
        <p className="opacity-75">Sélectionnez votre profil pour explorer nos ressources</p>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {categories.map((cat) => (
            <div className="col-md-4" key={cat.id}>
              <div 
                className="card h-100 border-0 shadow-sm p-4 text-center hover-lift"
                style={{ 
                  borderRadius: '20px', 
                  transition: '0.3s', 
                  cursor: 'pointer',
                  borderBottom: `5px solid ${caebOrange}` 
                }}
                onClick={() => navigate(`/books/${cat.id}`)}
              >
                <div style={{ fontSize: '3.5rem', color: caebBlue, marginBottom: '15px' }}>
                  {cat.icon}
                </div>
                <h3 className="fw-bold" style={{ color: caebBlue }}>{cat.title}</h3>
                <p className="text-muted">{cat.desc}</p>
                <button 
                  className="btn mt-auto text-white fw-bold rounded-pill"
                  style={{ backgroundColor: caebOrange, border: 'none' }}
                >
                  Voir les ouvrages
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Retour */}
        <div className="text-center mt-5">
          <button 
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={() => navigate(-1)}
          >
            Retour à la bibliothèque
          </button>
        </div>
      </div>

      <style>
        {`
          .hover-lift:hover {
            transform: translateY(-10px);
            shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
          }
        `}
      </style>
    </div>
  );
};

export default Catalogue;
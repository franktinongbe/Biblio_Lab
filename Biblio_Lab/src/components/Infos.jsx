import React from 'react';
import { useNavigate } from 'react-router-dom';

function Infos() {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">À propos de nous</h1>
      <p>Bienvenue sur Bibliothèque CAEB, la plateforme idéale pour découvrir de nouveaux livres et explorer du contenu éducatif. Notre mission est de rendre la connaissance accessible à tous, peu importe l'origine ou l'emplacement.</p>

      <h2 className="mt-4">Notre Mission</h2>
      <p>Notre mission est de favoriser une communauté mondiale d'apprenants, où les livres et le contenu éducatif sont accessibles à toute personne cherchant à acquérir des connaissances.</p>

      <h2 className="mt-4">Fonctionnalités</h2>
      <ul>
        <li>Bibliothèque variée</li>
        <li>Recommandations de livres personnalisées</li>
        <li>Critiques et discussions de livres</li>
      </ul>

      <h2 className="mt-4">Rencontrez l'équipe</h2>
      <p>Notre équipe est composée de passionnés de lecture et de développeurs qualifiés, engagés à faire de Biblio-Lab votre compagnon de confiance dans le monde des livres. Voici quelques membres de notre équipe :</p>
      <ul>
        <li><strong>Frank Tinongbé</strong> - Co-fondateur, Développeur</li>
        <li><strong>Souleymane Takpara</strong> - Développeur</li>
        <li><strong>Julianna Zadogli</strong> - Designer</li>
        <li><strong>Okeke Gabriel</strong> - Développeur</li>
      </ul>

      <h2 className="mt-4">Notre Histoire</h2>
      <p>Bibliothèque CAEB a commencé en tant que projet passion en 1935 avec l'objectif de créer un accès à la documentation facile et fiable pour les lecteurs et apprenants de la nation Béninoise.</p>

      <h2 className="mt-4">Plans Futurs</h2>
      <p>Nous travaillons constamment à améliorer Bibliothèque CAEB. Restez à l'écoute pour des fonctionnalités telles que des applications mobiles, des livres audio, et bien plus encore !</p>

      <h2 className="mt-4">Contactez-nous</h2>
      <p>Vous avez des questions ou des retours ? Contactez-nous à <a href="mailto:caeb@caeb.com">contact@bibliolab.com</a></p>

      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/")}
          className="btn"
          style={{
            backgroundColor: '#fd7e14',
            color: 'white',
            padding: '10px 30px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
          }}
        >
          Rejoignez-nous aujourd'hui !
        </button>
      </div>
    </div>
  );
}

export default Infos;

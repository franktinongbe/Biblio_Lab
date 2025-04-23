import React from 'react';
import { Link } from 'react-router-dom'; // On utilise <Link /> ici
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Bienvenue dans votre univers documentaire</h1>
          <p className="lead">Découvrez nos produits et services exceptionnels.</p>
          <div className="container text-center">
            <h2>Prêt à commencer ?</h2>
            <p className="lead">Connectez-vous dès aujourd'hui pour accéder à toutes les documentations.</p>
            
            {/* Lien vers la page de Connexion */}
            <Link to="/Log in" className="btn btn-light btn-lg mb-5">
              Connectez-vous
            </Link>

            <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
            <video controls loop width="100%">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
            </div>
          </div>
        </div>
      </section>

          </div>
        </div>
      </header>
    </>
  );
}

export default Home;

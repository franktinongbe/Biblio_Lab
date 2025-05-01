import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function Accueil() {
  const navigate = useNavigate();

  return (
    <>
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img className="d-block w-100" src="/images/1000262593.jpg" alt="library" style={{ maxHeight: '80vh', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
            <Carousel.Caption style={{ zIndex: 2 }}>
              <h1>Bienvenue à Biblio-Lab</h1>
              <h3>Pour vos enfants faites le bon choix</h3>
              <p>Nous proposons au public une gamme d'ouvrages adaptés aux besoins de vos enfants.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img className="d-block w-100" src="/images/1000262596.jpg" alt="work" style={{ maxHeight: '80vh', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
            <Carousel.Caption style={{ zIndex: 2 }}>
              <h1>Bienvenue à Biblio-Lab</h1>
              <h3>La bibliothèque plus proche et adaptée à vous</h3>
              <p>Surfez dans l'univers documentaire de nos bibliothèques partenaires, avec un fond documentaire riche et adapté à tous.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img className="d-block w-100" src="/images/1000262599.jpg" alt="young" style={{ maxHeight: '80vh', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
            <Carousel.Caption style={{ zIndex: 2 }}>
              <h1>Bienvenue à Biblio-Lab</h1>
              <h3>Rejoignez-nous dès maintenant</h3>
              <p>Profitez de nos services et formez-vous.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Section principale */}
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-12 col-md-4">
            <h2>Nos Livres</h2>
            <p>Retrouvez toutes les collections de nos bibliothèques partenaires ici.</p>
            <button onClick={() => navigate('/library')} className="btn btn-dark px-4 py-2">
              Voir les livres
            </button>
          </div>

          <div className="col-12 col-md-4">
            <div style={{ position: 'relative' }}>
              <img src="/images/pexels-kampus-5940841.jpg" alt="person" className="img-fluid rounded" style={{ maxHeight: '350px' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h2>De plus</h2>
            <p>
              Le <strong>réseau Bibliolab</strong> regroupe plusieurs bibliothèques innovantes au service de tous.
              Nos bibliothèques sont des espaces de vie, d’apprentissage et de partage.
            </p>
            <button onClick={() => navigate('/Log in')} className="btn btn-dark px-4 py-2">
              Inscrivez-vous
            </button>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-md-4">
            <h2>Qui sommes-nous ?</h2>
            <p>
              Réseau passionné par la diffusion du savoir. En ligne et sur place, nous proposons un large choix
              de documents, d’activités, et d’espaces modernes.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <div style={{ position: 'relative' }}>
              <img src="/images/pexels-pixabay-256455.jpg" alt="library" className="img-fluid rounded" style={{ maxHeight: '350px' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h2>Contactez-nous</h2>
            <p>Prenez contact dès aujourd'hui, notre équipe dynamique et accueillante est à votre service.</p>
            <button onClick={() => navigate('/Contactez-nous')} className="btn btn-dark px-4 py-2">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;

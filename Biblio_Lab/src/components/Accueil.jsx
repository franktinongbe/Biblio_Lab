import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router';

function Accueil() {
  const navigate = useNavigate();

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src="student.jpeg"
              alt="student"
              style={{ maxHeight: '80vh', width: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            ></div>
            <Carousel.Caption style={{ zIndex: 2, position: 'absolute' }}>
              <h1>Bienvenue à Biblio-Lab</h1>
              <h3>Pour vos enfants faites le bon choix</h3>
              <p>Nous proposons au public une gamme d'ouvrage adapté aux besoins de vos enfants.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src="work.jpeg"
              alt="work"
              style={{ maxHeight: '80vh', width: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            ></div>
            <Carousel.Caption style={{ zIndex: 2, position: 'absolute' }}>
              <h1>Bienvenue à Biblio-Lab</h1>
              <h3>La bibliothèque plus proche et adapté à vous</h3>
              <p>Surfer dans l'univers documentaire de nos bibliothèques partenaires, avec un fond documentaire riche et adapté à tous.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src="young.jpeg"
              alt="young"
              style={{ maxHeight: '80vh', width: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
              }}
            ></div>
            <Carousel.Caption style={{ zIndex: 2, position: 'absolute' }}>
              <h1>Bienvenue à Biblio-Lab</h1>
              <h3>Rejoignez nous dès-maintenant</h3>
              <p>
                Profitez de nos services et formez vous.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <div className="container">
        <div className="row mb-4"> {/* Added margin-bottom to the row */}
          <div className="col-12 col-md-4">
            <h2>Nos Livres</h2>
            <p>Retrouvez toutes les collections de nos bibliothèques partenaires ici.</p>
            <button
              onClick={() => navigate('/library')}
              className="text-light border border-dark rounded px-3 py-1 bg-dark"
            >
              Voir livres
            </button> <br /> <br /> 
          </div>
          <div className="col-12 col-md-4">
            <div style={{ position: 'relative' }}>
              <img
                src="young.jpeg"
                alt="person"
                className="img-fluid"
                style={{ maxHeight: '350px', maxWidth: '350px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h2>De plus</h2>
            <p> Le <strong>réseau Bibliolab</strong> regroupe plusieurs bibliothèques innovantes au service de tous. 
          Nous croyons en une culture ouverte, inclusive et enrichissante. Plus que des lieux de lecture, 
          nos bibliothèques sont des espaces de vie, d’apprentissage et de partage..</p>
            <button
              onClick={() => navigate('/Sign in')}
              className="text-light border border-dark rounded px-3 py-1 bg-dark"
            >
              Inscrivez vous
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row mb-4"> {/* Added margin-bottom to the row */}
          <div className="col-12 col-md-4">
            <h2>Qui sommes nous?</h2>
            <p>Nous sommes un réseau de bibliothèques passionné par la diffusion du savoir et de la culture. 
          Présents en ligne, nous mettons à disposition un vaste choix de documents, d'activités, et d'espaces modernes 
          pour permettre à chacun d'apprendre, de se divertir et de faire des rencontre.</p>
          </div>
          <div className="col-12 col-md-4">
            <div style={{ position: 'relative' }}>
              <img
                src="student.jpeg"
                alt="person"
                className="img-fluid"
                style={{ maxHeight: '350px', maxWidth: '350px' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h2>Contactez nous</h2>
            <p>Prenez contacte dès aujourd'hui, une équipe dynamique et accueillante sera à votre service.</p>

            <button
              onClick={() => navigate('/Sign in')}
              className="text-light border border-dark rounded px-3 py-1 bg-dark"
            >
              Inscrivez vous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;

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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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

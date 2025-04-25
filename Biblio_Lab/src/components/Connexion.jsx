import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import axios from "../services/CallApi";
import 'bootstrap/dist/css/bootstrap.min.css';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const res = await axios.post('/auth/login', { username, password });
      const { token } = res.data;

      localStorage.setItem('token', token);

      const decoded = jwtDecode(token);
      const role = decoded?.role;

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/accueil');
      }

    } catch (err) {
      setError(
        err.response?.data?.msg ||
        "Une erreur s'est produite lors de la connexion."
      );
    }
  };

  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-light shadow-lg">
      <div className="card p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Connexion</h2>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-gradient"
                style={{
                  background: 'linear-gradient(to right, #fd7e14, rgb(53, 82, 248))',
                  color: 'white',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '12px 20px',
                  fontSize: '1rem',
                  transition: 'transform 0.2s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 15px rgba(238, 9, 121, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <p className="mb-0">Pas de compte ? <a href="/Log in">S'inscrire</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;

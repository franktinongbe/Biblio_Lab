import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "./servicesApi/CallApi"; 
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
      setError('');
      const res = await axios.post('/auth/login', { username, password });

      // Enregistre le token
      localStorage.setItem('token', res.data.token);

      // Redirection vers accueil
      navigate('/accueil');
    } catch (err) {
      console.error("Erreur de connexion :", err.response?.data || err.message);
      setError(err.response?.data?.msg || 'Échec de la connexion. Veuillez réessayer.');
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
              <button type="submit" className="btn btn-warning">Se connecter</button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <p className="mb-0">Pas de compte ? <a href="/Sign in">S'inscrire</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;

import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Veuillez entrer une adresse e-mail valide.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('');
      setLoading(true); // Start loading

      // Simulating an API call with a timeout
      setTimeout(() => {
        setSuccess('Merci de vous être inscrit à notre newsletter !');
        setLoading(false); // Stop loading after a successful submission
        setEmail(''); // Clear email field after success
      }, 2000);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Abonnez-vous à notre Newsletter</h1>
      <p className="text-center mb-4">Recevez les dernières nouvelles et mises à jour directement dans votre boîte de réception.</p>

      <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
        <input
          type="email"
          className="form-control w-50 mb-3" // Added 'mb-3' for margin-bottom
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Adresse email"
        />
        <button
          type="submit"
          className="btn mt-3"
          style={{ backgroundColor: '#fd7e14', color: 'white' }}
          disabled={loading}
        >
          {loading ? 'Chargement...' : "S'abonner"}
        </button>
      </form>

      {error && <div className="alert alert-danger text-center mt-3">{error}</div>}
      {success && <div className="alert alert-success text-center mt-3">{success}</div>}

      <p className="text-center mt-4">
        <small>En vous inscrivant, vous acceptez de recevoir des communications de notre part. Vous pouvez vous désinscrire à tout moment.</small>
      </p>
    </div>
  );
}

export default Newsletter;

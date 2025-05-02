import React from 'react';
import { FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ContactezNous() {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate(-1); // ou navigate("/accueil")
  };

  return (
    <div
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #f2994a 0%, #2d9cdb 100%)', // ✅ Nouveau dégradé
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          maxWidth: '600px',
          width: '100%',
          background: 'white',
          borderRadius: '20px',
          border: '1px solid #D5D8DC',
        }}
      >
        {/* 🔙 Bouton Retour */}
        <button
          onClick={handleRetour}
          className="btn btn-outline-secondary mb-3"
          style={{ width: 'fit-content' }}
        >
          ← Retour
        </button>

        <h2 className="mb-3 text-center" style={{ color: '#2E4053' }}>
          Contactez-nous
        </h2>
        <p className="text-center" style={{ color: '#5D6D7E' }}>
          N'hésitez pas à nous écrire, nous vous répondrons rapidement.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label" style={{ color: '#2E4053' }}>
              <FaUser className="me-2" />
              Nom
            </label>
            <input type="text" className="form-control" placeholder="Votre nom" />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: '#2E4053' }}>
              <FaEnvelope className="me-2" />
              Email
            </label>
            <input type="email" className="form-control" placeholder="Votre email" />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: '#2E4053' }}>
              <FaCommentDots className="me-2" />
              Message
            </label>
            <textarea className="form-control" rows="5" placeholder="Votre message" />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn"
              style={{
                background: 'linear-gradient(to right, #2E4053, #566573)',
                color: '#fff',
                border: 'none',
              }}
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactezNous;

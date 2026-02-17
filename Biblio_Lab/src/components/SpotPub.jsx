import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SpotPub = () => {
  const [announcement, setAnnouncement] = useState(localStorage.getItem('caeb_news') || "");

  const handleSave = () => {
    localStorage.setItem('caeb_news', announcement);
    toast.success("Annonce publiée avec succès !");
    // Optionnel : Envoyer vers le backend ici
  };

  return (
    <div className="container py-5 mt-5">
      <div className="glass-card p-5 text-dark" style={{ background: 'white', borderRadius: '20px', border: '1px solid #ddd' }}>
        <h2 className="fw-bold mb-4" style={{ color: '#1D4F9A' }}>Gestion des Spots Publicitaires</h2>
        <p className="text-muted">Le message saisi ici apparaîtra en bandeau défilant sur les pages stratégiques.</p>
        
        <div className="mb-4">
          <label className="form-label fw-bold">Message de la bande passante</label>
          <textarea 
            className="form-control" 
            rows="3" 
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
            placeholder="Ex: La bibliothèque sera exceptionnellement fermée ce samedi..."
          ></textarea>
        </div>
        
        <button onClick={handleSave} className="btn-caeb">
          Publier l'annonce
        </button>
      </div>
    </div>
  );
};

export default SpotPub;
import React from 'react';

const ContactezNous = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contactez-nous</h1>
      
      <div className="row">
        {/* Formulaire de contact */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input type="text" className="form-control" id="nom" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="sujet" className="form-label">Sujet</label>
              <input type="text" className="form-control" id="sujet" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="col-md-6">
          <h4>Nos coordonnées</h4>
          <p><strong>Adresse :</strong> 123 Rue des Bibliothèues, 125 Parakou</p>
          <p><strong>Email :</strong> contact@biblio-lab.fr</p>
          <p><strong>Téléphone :</strong> +229 01 40 34 19 69</p>
          <p><strong>Horaires :</strong> Lundi - Vendredi : 9h00 - 18h00</p>
          
          {/* (Optionnel) Carte Google Maps */}
          { <iframe 
            src="https://www.google.com/maps/embed?..." 
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe> }
        </div>
      </div>
    </div>
  );
};

export default ContactezNous;

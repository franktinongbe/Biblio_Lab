import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const FAQ = () => {
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const faqData = [
    {
      q: "Comment s'inscrire à la bibliothèque ?",
      a: "L'inscription se fait physiquement dans l'une de nos 8 bibliothèques. Vous devez fournir une photo d'identité du parent accompagnant l'apprenant, une pièce d'identité et vous acquitter des frais d'adhésion annuels (500F pour les écoliers, 1000F pour les élèves et 1500F pour les étudiants)."
    },
    {
      q: "Quelle est la durée maximale d'un prêt ?",
      a: "La durée standard est de 14 jours (2 semaines). Vous pouvez demander une prolongation une seule fois, sauf si l'ouvrage est réservé par un autre lecteur."
    },
    {
      q: "La bibliothèque FM est-elle ouverte aux non-étudiants ?",
      a: "La bibliothèque de la Faculté de Médecine est prioritairement dédiée aux étudiants et professionnels de santé. Toutefois, la consultation sur place peut être autorisée sous conditions spécifiques."
    },
    {
      q: "Proposez-vous des ressources numériques ?",
      a: "Oui, nous disposons d'espaces numériques dans nos centres pour accéder à des bases de données de recherche et des livres électroniques et d'un laboratoire d'intelligence artificielle."
    },
    {
      q: "Que faire en cas de perte d'un livre ?",
      a: "En cas de perte ou de détérioration grave, le lecteur est tenu de remplacer l'ouvrage par un exemplaire neuf ou de rembourser sa valeur actuelle."
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "80vh", padding: "60px 0" }}>
      <Container>
        <div className="text-center mb-5">
          <HiOutlineQuestionMarkCircle size={50} style={{ color: caebOrange }} />
          <h2 className="fw-bold mt-3" style={{ color: caebBlue }}>Foire Aux Questions</h2>
          <p className="text-muted">Tout ce que vous devez savoir sur le réseau CAEB</p>
          <div style={{ width: '60px', height: '3px', backgroundColor: caebOrange, margin: '15px auto' }}></div>
        </div>

        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <Accordion flush shadow-sm className="rounded-4 overflow-hidden shadow-sm">
            {faqData.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index} className="border-bottom">
                <Accordion.Header>
                  <span className="fw-bold" style={{ color: caebBlue }}>{item.q}</span>
                </Accordion.Header>
                <Accordion.Body className="text-muted" style={{ lineHeight: "1.6" }}>
                  {item.a}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-5 p-4 rounded-4" style={{ backgroundColor: "#fff", border: `1px dashed ${caebBlue}` }}>
          <p className="mb-2">Vous ne trouvez pas la réponse à votre question ?</p>
          <button 
            className="btn text-white fw-bold px-4" 
            style={{ backgroundColor: caebBlue }}
            onClick={() => window.location.href = '/contactez-nous'}
          >
            Contactez notre équipe
          </button>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
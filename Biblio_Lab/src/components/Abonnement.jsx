import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { HiOutlineBadgeCheck, HiOutlineLibrary, HiOutlineCreditCard, HiOutlineUser, HiOutlineCloudUpload, HiOutlineLocationMarker } from 'react-icons/hi';

const Subscription = () => {
  const caebBlue = "#1D4F9A";
  const caebOrange = "#f2994a";

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    district: '',
    residence: '',
    library: 'Porto-Novo Siège',
    plan: 'Etudiant',
    birthCertificate: null,
    idCard: null
  });

  const libraries = [
    "Porto-Novo Siège",
    "Attakè",
    "Parakou",
    "Abomey-Calavi",
    "Cotonou"
  ];

  const plans = [
    { id: 'Etudiant', price: 1500, label: 'Tarif Étudiant/Adulte' },
    { id: 'Elève', price: 1000, label: 'Tarif élève' },
    { id: 'Ecolier', price: 500, label: 'Tarif Enfant (écolier)' }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (!formData.birthCertificate || !formData.idCard) {
      alert("Veuillez uploader votre acte de naissance et votre pièce d'identité.");
      return;
    }

    console.log("Données d'inscription :", formData);
    alert(`Informations enregistrées pour ${formData.fullName} à ${formData.city} !\nRedirection vers le paiement de ${plans.find(p => p.id === formData.plan).price} FCFA...`);
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh', 
      paddingTop: '50px', 
      paddingBottom: '50px',
      fontFamily: "'Montserrat', sans-serif" 
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-lg border-0" style={{ borderRadius: '25px', overflow: 'hidden' }}>
              <Row className="g-0">
                
                {/* --- PANNEAU LATÉRAL --- */}
                <Col md={4} style={{ backgroundColor: caebBlue, color: 'white' }} className="p-4 d-flex flex-column justify-content-center">
                  <div className="text-center mb-4">
                    <img src="/images/caeb.png" alt="Logo" style={{ width: '80px', borderRadius: '10px', marginBottom: '15px' }} />
                    <h4 className="fw-bold">Réseau CAEB</h4>
                  </div>
                  <h5 className="fw-bold mb-3">Avantages Membre :</h5>
                  <ul className="list-unstyled mb-4" style={{ fontSize: '0.9rem' }}>
                    <li className="mb-3"><HiOutlineBadgeCheck className="me-2 text-warning" /> Accès physique & numérique</li>
                    <li className="mb-3"><HiOutlineBadgeCheck className="me-2 text-warning" /> Emprunts de livres (15 jours)</li>
                    <li className="mb-3"><HiOutlineBadgeCheck className="me-2 text-warning" /> WiFi & Espaces de travail</li>
                  </ul>
                  <div className="p-3" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', fontSize: '0.85rem' }}>
                    <strong>Note :</strong> Votre carte sera disponible dans votre bibliothèque de rattachement 48h après validation.
                  </div>
                </Col>

                {/* --- FORMULAIRE --- */}
                <Col md={8} className="p-4 p-lg-5 bg-white">
                  <div className="mb-5">
                    <h2 className="fw-bold" style={{ color: caebBlue }}>Adhésion en ligne</h2>
                    <p className="text-muted">Créez votre profil de lecteur en quelques clics</p>
                  </div>

                  <Form onSubmit={handlePayment}>
                    
                    {/* Section 1 : Identité */}
                    <h6 className="text-uppercase fw-bold mb-3" style={{ color: caebOrange, letterSpacing: '1px' }}>
                      <HiOutlineUser className="me-2" /> 1. Identité & Contact
                    </h6>
                    <Row className="mb-4">
                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label>Nom et Prénoms</Form.Label>
                          <Form.Control type="text" name="fullName" required placeholder="Ex: Corneil ADJAKA" onChange={handleChange} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" required placeholder="votre@email.com" onChange={handleChange} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Téléphone</Form.Label>
                          <Form.Control type="tel" name="phone" required placeholder="+229 00000000" onChange={handleChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Section 2 : Localisation */}
                    <h6 className="text-uppercase fw-bold mb-3" style={{ color: caebOrange, letterSpacing: '1px' }}>
                      <HiOutlineLocationMarker className="me-2" /> 2. Localisation
                    </h6>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label>Ville</Form.Label>
                          <Form.Control type="text" name="city" required placeholder="Ex: Porto-Novo" onChange={handleChange} />
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label>Quartier</Form.Label>
                          <Form.Control type="text" name="district" required placeholder="Ex: Djassin" onChange={handleChange} />
                        </Form.Group>
                      </Col>
                      <Col md={4} className="mb-3">
                        <Form.Group>
                          <Form.Label>Résidence / Maison</Form.Label>
                          <Form.Control type="text" name="residence" required placeholder="Ex: Carré 452" onChange={handleChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Section 3 : Documents */}
                    <h6 className="text-uppercase fw-bold mb-3" style={{ color: caebOrange, letterSpacing: '1px' }}>
                      <HiOutlineCloudUpload className="me-2" /> 3. Pièces à fournir
                    </h6>
                    <Row className="mb-4">
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Acte de naissance</Form.Label>
                          <Form.Control type="file" name="birthCertificate" accept=".pdf,image/*" required onChange={handleChange} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Carte d'identité / CIP</Form.Label>
                          <Form.Control type="file" name="idCard" accept=".pdf,image/*" required onChange={handleChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Section 4 : Bibliothèque & Plan */}
                    <h6 className="text-uppercase fw-bold mb-3" style={{ color: caebOrange, letterSpacing: '1px' }}>
                      <HiOutlineLibrary className="me-2" /> 4. Choix de l'abonnement
                    </h6>
                    <Row className="mb-4">
                      <Col md={12} className="mb-3">
                        <Form.Label>Ma Bibliothèque de rattachement</Form.Label>
                        <Form.Select name="library" value={formData.library} onChange={handleChange}>
                          {libraries.map((lib, index) => (
                            <option key={index} value={lib}>{lib}</option>
                          ))}
                        </Form.Select>
                      </Col>
                      <Col md={12}>
                        <Form.Label>Tarification</Form.Label>
                        <div className="d-flex gap-2 flex-wrap">
                          {plans.map((plan) => (
                            <div 
                              key={plan.id}
                              onClick={() => setFormData({...formData, plan: plan.id})}
                              style={{
                                flex: 1,
                                minWidth: '120px',
                                cursor: 'pointer',
                                padding: '12px',
                                borderRadius: '10px',
                                border: `2px solid ${formData.plan === plan.id ? caebOrange : '#eee'}`,
                                backgroundColor: formData.plan === plan.id ? '#fff9f4' : 'white',
                                transition: '0.2s'
                              }}
                              className="text-center"
                            >
                              <div className="small fw-bold">{plan.id}</div>
                              <div className="fw-bold" style={{ color: caebOrange }}>{plan.price} F</div>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>

                    <Button 
                      type="submit" 
                      className="w-100 py-3 fw-bold shadow-sm"
                      style={{ backgroundColor: caebOrange, border: 'none', borderRadius: '12px' }}
                    >
                      Payer via Mobile Money ({plans.find(p => p.id === formData.plan).price} FCFA)
                    </Button>

                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscription;
import React, { useState, useEffect } from "react";
import axios from "../services/CallApi"; 
import { Form, Button, Table, Modal } from "react-bootstrap";

function AdminLivres() {
  const [livres, setLivres] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    isbn: "",
    author: "",
    pdf: null,
    coverImage: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchLivres();
  }, []);

  const fetchLivres = async () => {
    try {
      const res = await axios.get("/books");
      setLivres(res.data);
    } catch (error) {
      console.error("Erreur fetch:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) form.append(key, value);
    });

    try {
      if (editId) {
        await axios.put(`/books/${editId}`, formData);
      } else {
        await axios.post("/books/upload", form);
      }
      setFormData({
        title: "",
        summary: "",
        isbn: "",
        author: "",
        pdf: null,
        coverImage: null,
      });
      setEditId(null);
      fetchLivres();
      setShowModal(false);
    } catch (error) {
      console.error("Erreur soumission:", error);
    }
  };

  const handleEdit = (livre) => {
    setFormData({
      title: livre.title,
      summary: livre.summary || "",
      isbn: livre.isbn || "",
      author: livre.author?._id || livre.author,
      pdf: null,
      coverImage: null,
    });
    setEditId(livre._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Supprimer ce livre ?")) {
      try {
        await axios.delete(`/books/${id}`);
        fetchLivres();
      } catch (error) {
        console.error("Erreur suppression:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gestion des Livres</h2>
      <Button className="mb-3" onClick={() => setShowModal(true)}>
        Ajouter un livre
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre) => (
            <tr key={livre._id}>
              <td>{livre.title}</td>
              <td>{livre.author?.name || livre.author}</td>
              <td>{livre.isbn}</td>
              <td>
                <Button variant="info" size="sm" onClick={() => handleEdit(livre)}>Modifier</Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleDelete(livre._id)}>Supprimer</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Modifier Livre" : "Ajouter Livre"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Titre</Form.Label>
              <Form.Control name="title" value={formData.title} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Auteur (ID)</Form.Label>
              <Form.Control name="author" value={formData.author} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Résumé</Form.Label>
              <Form.Control name="summary" value={formData.summary} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>ISBN</Form.Label>
              <Form.Control name="isbn" value={formData.isbn} onChange={handleChange} />
            </Form.Group>
            {!editId && (
              <>
                <Form.Group>
                  <Form.Label>Fichier PDF</Form.Label>
                  <Form.Control name="pdf" type="file" accept="application/pdf" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image de couverture</Form.Label>
                  <Form.Control name="coverImage" type="file" accept="image/*" onChange={handleChange} />
                </Form.Group>
              </>
            )}
            <Button type="submit" className="mt-3">{editId ? "Enregistrer" : "Ajouter"}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminLivres;

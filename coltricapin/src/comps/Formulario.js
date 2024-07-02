import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Formulario() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    role: 'Estudiante',
    course: 'Sexto',
    acceptData: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/crearUsuario', formData);
      console.log(response.data);
      setShowSuccess(true); // Mostrar mensaje de éxito
      setTimeout(() => {
        navigate('/'); // Redirigir al usuario al inicio después de 2 segundos
      }, 2000);
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Error al crear usuario. Por favor, inténtelo de nuevo.');
    }
  };

  // Función para deshabilitar la selección de curso si el rol es 'Profesor'
  const isCourseDisabled = formData.role === 'Profesor';

  return (
    <Container id="Main">
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h1>Registro</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" name="email" value={formData.email} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de usuario" name="username" value={formData.username} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="formBasicRole">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control as="select" name="role" value={formData.role} onChange={handleChange}>
                      <option value="Estudiante">Estudiante</option>
                      <option value="Profesor">Profesor</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicCourse">
                    <Form.Label>Curso</Form.Label>
                    <Form.Control as="select" name="course" value={formData.course} onChange={handleChange} disabled={isCourseDisabled}>
                      <option value="Sexto">Sexto</option>
                      <option value="Septimo">Septimo</option>
                      <option value="Octavo">Octavo</option>
                      <option value="Noveno">Noveno</option>
                      <option value="Décimo">Decimo</option>
                      <option value="Undécimo">Undecimo</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Aceptar el envío de datos" name="acceptData" checked={formData.acceptData} onChange={handleChange} />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
                {showSuccess && (
                  <Alert variant="success" className="mt-3">
                    Usuario creado exitosamente. Redirigiendo...
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger" className="mt-3">
                    {error}
                  </Alert>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulario;

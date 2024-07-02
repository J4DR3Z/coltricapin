import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Login({ onLogin, onGuest }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [recoveryMessage, setRecoveryMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: username,
        password: password
      });

      if (response.data.success) {
        onLogin(username);
      } else {
        setLoginError(response.data.message);
      }
    } catch (error) {
      console.error('Error al enviar solicitud:', error);
      setLoginError('Error en la solicitud, por favor intente de nuevo más tarde.');
    }
  };

  const handleGuest = () => {
    onGuest();
  };

  const handleRecoverPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/recuperarContrasena', { email });
      setRecoveryMessage(response.data.message);
      setShowRecoveryModal(false);
    } catch (error) {
      console.error('Error al enviar correo de recuperación:', error);
      setRecoveryMessage('Error en la solicitud, por favor intente de nuevo más tarde.');
    }
  };

  return (
    <>
      <Modal show={true} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container id="main-container" className="d-grid h-100">
            <Form id="sign-in-form" className="text-center p-3 w-100" onSubmit={handleLogin}>
              <h1 className="mb-3 fs-3 fw-normal">Ingresar</h1>
              <Form.Group controlId="sign-in-email-address">
                <Form.Control 
                  type="text" 
                  size="lg" 
                  onChange={(e) => setUsername(e.target.value)} 
                  value={username} 
                  placeholder="Usuario" 
                  autoComplete="username" 
                  className="position-relative" 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="sign-in-password">
                <Form.Control 
                  type="password" 
                  size="lg" 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  placeholder="Contraseña" 
                  autoComplete="current-password" 
                  className="position-relative" 
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
                <Form.Check label="Recuérdame" />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" className="w-100">Ingresar</Button>
              {loginError && <p className="text-danger mt-3">{loginError}</p>}
              <Button variant="link" onClick={() => setShowRecoveryModal(true)}>¿Olvidaste tu contraseña?</Button>
              <Button variant="secondary" onClick={handleGuest} size="lg" className="w-100 mt-3">Ingresar como invitado</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>

      <Modal show={showRecoveryModal} onHide={() => setShowRecoveryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperación de Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="recovery-email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingresa tu email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRecoveryModal(false)}>Cerrar</Button>
          <Button variant="primary" onClick={handleRecoverPassword}>Enviar</Button>
        </Modal.Footer>
      </Modal>

      {recoveryMessage && <Modal show={true} onHide={() => setRecoveryMessage('')}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{recoveryMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setRecoveryMessage('')}>Cerrar</Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}

export default Login;

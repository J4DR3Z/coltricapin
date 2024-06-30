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

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/login', {
        user: username,
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

  // No se utiliza handleClose porque no queremos cerrar el modal desde aquí

  return (
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
              <Form.Check label="Recordarme" />
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" variant="primary" size="lg">Sign in</Button>
            </div>
            <Button variant="link" onClick={handleGuest} className="mt-3">
              Entrar como invitado
            </Button>
            {loginError && <p className="mt-3 text-danger">{loginError}</p>}
            <p className="mt-5 text-muted">&copy; 2021-2022</p>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Login;

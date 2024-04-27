import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import '../css/style.css';
function form() {
  return (
    <Container id="Main">
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h1>Formulario</h1>
                <Form >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicText">
                    <Form.Label>Nombres </Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                  </Form.Group>

                  <Form.Group controlId="formBasicText">
                    <Form.Label>Apellidos </Form.Label>
                    <Form.Control type="text" placeholder="Apellido" />
                  </Form.Group>

                  <Form.Group controlId="formBasicText">
                    <Form.Label>Numero Telefonico </Form.Label>
                    <Form.Control type="text" placeholder="Telefono" />
                  </Form.Group>
                  
                  <Form.Group controlId="formBasicText">
                    <Form.Label>Dirección de residencia </Form.Label>
                    <Form.Control type="text" placeholder="Dirección de residencia" />
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Aceptar el envio de datos" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  }
export default form;
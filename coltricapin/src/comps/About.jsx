import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import tomas from '../imgs/img-estudiantes/tomas.jpg';
import javier from '../imgs/img-estudiantes/javier.jpg';
import julian from '../imgs/img-estudiantes/julian.jpg';
import '../css/about.css'; // Asegúrate de crear este archivo CSS para estilizar las tarjetas

function About() {
    const teamMembers = [
        {
            name: 'Tomas Alejandro Castro Villarreal',
            image: tomas,
            contribution: 'Desarrollador principal del backend y administración de la base de datos, adiciones en el frontEnd.'
        },
        {
            name: 'Javier David Villanueva Bernal',
            image: javier,
            contribution: 'Responsable del diseño del frontend y la implementación de la interfaz de usuario.'
        },
        {
            name: 'Julian Andres Jaramillo Benavides',
            image: julian,
            contribution: 'Encargado de la integración del frontend con el backend y pruebas de la aplicación.'
        }
    ];

    return (
        <Container>
            <h2>Acerca de Nosotros</h2>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col key={index} md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={member.image} alt={member.name} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.contribution}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default About;

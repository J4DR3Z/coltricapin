import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

function Contact() {
    // Ejemplo de datos de personas
    const personas = [
        { nombre: 'Tomas Castro', correo: 'tomascv0628@gmail.com', telefono: '+573014387448', cargo: 'Estudiante' },
        { nombre: 'Javier', correo: 'davidvillanueva979@gmail.com', telefono: '+573219765201', cargo: 'Estudiante' },
        { nombre: 'Julian', correo: 'jaramillojajb@gmail.com.com', telefono: '+572338326985', cargo: 'Estudiante' },

        // Añadir más personas según sea necesario
    ];

    return (
        <Container>
            <h2>Contacto</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {personas.map((persona, index) => (
                    <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
                        <Card.Body>
                            <Card.Title>{persona.nombre}</Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Correo: {persona.correo}</ListGroup.Item>
                                    <ListGroup.Item>Teléfono: {persona.telefono}</ListGroup.Item>
                                    <ListGroup.Item>Cargo: {persona.cargo}</ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default Contact;

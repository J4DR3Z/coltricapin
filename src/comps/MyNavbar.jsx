import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Routess from './Routess';
import Login from './Login';

function MyNavbar() {
    const routePaths = [
        { path: "/", text: "Home" },
        { path: "/About", text: "About" },
        { path: "/Contact", text: "Contact" },
        { path: "/Formulario", text: "Formulario" }
        // Agrega más rutas aquí según sea necesario
    ];

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Mi Sitio</Navbar.Brand>
            <Nav className="mr-auto">
                {routePaths.map(route => (
                    <Nav.Link key={route.path} as={Link} to={route.path}>{route.text} </Nav.Link>
                ))}
                <Login/>
            </Nav>
        </Navbar>
    );
}

export default MyNavbar;

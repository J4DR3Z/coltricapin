import React from 'react';
import { Container } from 'react-bootstrap';
import posts from "../posts/posts.json";
import MyCarousel from './MyCarousel';
import Acordeon from './acordeon';
function Home() {
    return (
        <Container>
            <div>
      <h1>Bienvenido a mi sitio</h1>
      <MyCarousel items={posts} /> {/* Pasa los datos al componente de carrusel */}
      <br />
      <Acordeon /> 

    </div>
        </Container>
    );
}

export default Home;

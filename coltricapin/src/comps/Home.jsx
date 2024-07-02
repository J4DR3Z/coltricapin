import React from 'react';
import { Container } from 'react-bootstrap';
import posts from "../posts/posts.json";
import MyCarousel from './MyCarousel';
import Acordeon from './acordeon';
import pagetext from '../text/pagetext.json';

function Home() {
    return (
        <Container>
            <div>
                <h1>Bienvenido a mi sitio</h1>
                <MyCarousel items={posts} /> 
                <br />
                <div style={{ display: 'flex', gap: '20px' }}>
                    {pagetext.acordeon.map((item, index) => (
                        <Acordeon key={index} titulo={item.titulo} descripcion={item.descripcion} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Home;

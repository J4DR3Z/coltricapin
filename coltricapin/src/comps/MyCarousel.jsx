import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const images = require.context('../posts/images', true);

const imageNames = images.keys().map(image => image.replace('./', ''));

const imageMap = imageNames.reduce((acc, imageName) => {
  acc[imageName] = images(`./${imageName}`);
  return acc;
}, {});

function MyCarousel({ items }) {
  return (
    <Carousel className="my-carousel">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={imageMap[item.image]}
            alt={item.title}
            style={{ maxHeight: '70vh', objectFit: 'fit' }}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;

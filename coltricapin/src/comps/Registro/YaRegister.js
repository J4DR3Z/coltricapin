import React from 'react';

function MainContent({ user }) {
  return (
    <div>
      <h1>Bienvenido, {user}</h1>
      <p>Ya estas registrado</p>
    </div>
  );
}

export default MainContent;

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import Formulario from './Formulario';
import GuestContent from './Registro/Invitado';

function Routess({ user, isGuest }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {user ? (
        <>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : isGuest ? (
        <>
          <Route path="/Formulario" element={<GuestContent />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
}

export default Routess;

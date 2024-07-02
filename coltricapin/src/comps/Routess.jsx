import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import Formulario from './Formulario';
import GuestContent from './Registro/Invitado';
import YaRegistro from './Registro/YaRegister';
import Login from './Registro/Login'

function Routess({ user, isGuest }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {user ? (
        <>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Formulario" element={<YaRegistro />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : isGuest ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<GuestContent/>} />
          <Route path="/Contact" element={<GuestContent />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
}

export default Routess;

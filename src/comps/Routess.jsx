import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import Formulario from "./Formulario";
import Login from "./Login"

function Routess() {
    return (
   
            <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Formulario" element={<Formulario />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            </Routes>


    );
}

export default Routess;

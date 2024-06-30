import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routess from './comps/Routess';
import MyNavbar from './comps/MyNavbar';
import Footer from './comps/footer';
import Login from './comps/Registro/Login';

function App() {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
    setIsGuest(false);
  };

  const handleGuest = () => {
    setIsGuest(true);
  };

  return (
    <div>
      {/* Renderizar Login solo si no hay usuario ni invitado */}
      {(!user && !isGuest) && <Login onLogin={handleLogin} onGuest={handleGuest} />}
      <MyNavbar />
      <Routess user={user} isGuest={isGuest} />
      <Footer />
    </div>
  );
}

export default App;

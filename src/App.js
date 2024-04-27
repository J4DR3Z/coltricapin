import React from 'react';
import './css/App.css';

import Routess from './comps/Routess';
import MyNavbar from './comps/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './comps/footer';

function App() {
  return (

      <div>
        <MyNavbar />
        <Routess/>
        <Footer/>
      </div>
  );
}

export default App;

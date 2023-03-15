import React from 'react';
import './App.css';
import {Navbar} from "./NavbarAndFooter/Navbar";
import {Home} from "./Layouts/Home";
import {Footer} from "./NavbarAndFooter/Footer";


export const App = () => {
  return (
      <div>
          <Navbar/>
          <Home/>
          <Footer/>
      </div>
  );
}

export default App;

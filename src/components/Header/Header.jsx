import React from 'react';
import './header.scss';

import camera from './camera.svg';

const Header = () => {
   return (
      <header>
         <img className="logo" src={camera} alt="Logo" />
         <h1>V našem kině právě uvádíme</h1>
      </header>
   )
}


export default Header;

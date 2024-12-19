import React from 'react';
import Menu from './Menu'; 
import './Header.css'; 
import logo from './aespalogo.png';

const Header = () => {
  return (
    <header className="header">
      {/* con el header se usa el logo que al clickearlo redirecciona al inicio */}
      <div className="header-contenido">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" /> 
        </a>
        <Menu />
      </div>
    </header>
  );
};

export default Header;

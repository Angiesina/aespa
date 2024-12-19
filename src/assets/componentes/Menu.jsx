// Menu.js
import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
  return (
    // menú que redirige a cada componente con las rutas de react
    <nav className="navbar">
      <ul className="nav-opciones">
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        <li><Link to="/albumes" className="nav-link">Álbumes</Link></li>
        <li><Link to="/miembros" className="nav-link">Miembros</Link></li>
        <li><Link to="/formulario" className="nav-link">Registrarse</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;


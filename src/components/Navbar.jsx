import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_moneda.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo Código Fidel" className="navbar-logo" />
          <span>Código Fidel</span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li>
            <a href="#noticias" className="navbar-link">Noticias</a>
          </li>
          <li>
            <a href="#proyectos" className="navbar-link">Proyectos</a>
          </li>
          <li>
            <a href="#contacto" className="navbar-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

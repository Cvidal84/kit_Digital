import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo / Nombre (opcional) */}
        <NavLink to="/" className="brand" onClick={close}>
          MI EMPRESA
        </NavLink>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={toggle}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="primary-menu"
        >
          <span aria-hidden />
          <span aria-hidden />
          <span aria-hidden />
        </button>

        {/* Menú */}
        <ul id="primary-menu" className={`navbar-list ${open ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={close}>Inicio</NavLink></li>
          <li><NavLink to="/sobre-mi" onClick={close}>Sobre mí</NavLink></li>
          <li><NavLink to="/servicios" onClick={close}>Servicios</NavLink></li>
          <li><NavLink to="/proyectos" onClick={close}>Proyectos</NavLink></li>
          <li><NavLink to="/contacto" onClick={close}>Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import "./Footer.css";
import kitDigitalLogo from "../../assets/logo/kit-digital.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo Kit Digital */}
        <div className="footer-logo">
          <img
            src={kitDigitalLogo}
            alt="Kit Digital"
            className="kit-digital-logo"
          />
        </div>

        {/* Texto */}
        <p>
          &copy; {new Date().getFullYear()} Mi Web. Todos los derechos reservados.
        </p>

        {/* Enlaces */}
        <ul className="footer-links">
          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

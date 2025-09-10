import "./Contact.css";

function Contact() {
  return (
    <main className="contact" style={{ paddingTop: 84, textAlign: "center" }}>
      <h1>Contacto</h1>
      <p>Página en construcción. Pronto añadiremos contenido.</p>
      <div className="cta-box">
            <h2>¿Necesitas algo a medida?</h2>
            <p>Cuéntame tu idea y preparamos un plan en minutos.</p>
            <a href="/contacto" className="btn-primary">Contactar</a>
          </div>
    </main>
  );
}

export default Contact; // <- IMPORTANTE: default export

import "./Services.css";

function Services() {
  const items = [
    {
      icon: "⚡",
      title: "Desarrollo Frontend",
      desc: "Interfaces rápidas y accesibles con React y buenas prácticas.",
    },
    {
      icon: "🔗",
      title: "Integración de APIs",
      desc: "Consumo de REST/GraphQL, autenticación y manejo de estado.",
    },
    {
      icon: "🚀",
      title: "Optimización & SEO",
      desc: "Mejora de rendimiento, Web Vitals y posicionamiento técnico.",
    },
    {
      icon: "🛡️",
      title: "Buenas prácticas",
      desc: "Arquitectura de componentes, testing y mantenimiento.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      desc: "Layouts fluidos que se ven bien en móvil, tablet y desktop.",
    },
    {
      icon: "☁️",
      title: "Deploy & CI",
      desc: "Despliegue en Vercel/Netlify y pipelines de integración continua.",
    },
  ];

  return (
    <main className="services">
      <section className="hero">
        <div className="container">
          <h1 className="title">Servicios</h1>
          <p className="subtitle">
            Soluciones pensadas para crecer: rendimiento, escalabilidad y una
            base sólida para tu producto.
          </p>

          <div className="grid">
            {items.map((s) => (
              <article key={s.title} className="card">
                <div className="icon" aria-hidden>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;

import "./Projects.css";

// Si tienes imágenes, impórtalas así:
// import proj1 from "../../assets/projects/proj1.jpg";
// import proj2 from "../../assets/projects/proj2.jpg";

function Projects() {
  const featured = {
    title: "Proyecto Destacado",
    desc:
      "Una breve descripción del proyecto más representativo. Explica el objetivo, el resultado y qué aportaste.",
    tech: ["React", "Vite", "CSS"],
    demo: "#",
    repo: "#",
    // image: proj1, // descomenta si tienes imagen
  };

  const items = [
    {
      title: "Dashboard Analítico",
      desc:
        "Panel con gráficos, filtros y carga de datos desde API. Enfoque en rendimiento y UX.",
      tech: ["React", "Recharts", "Fetch"],
      demo: "#",
      repo: "#",
      // image: proj2,
    },
    {
      title: "Landing de Producto",
      desc:
        "Página de marketing con A/B testing, CTA y optimización de Core Web Vitals.",
      tech: ["React", "Vite", "SEO"],
      demo: "#",
      repo: "#",
    },
    {
      title: "App de Tareas",
      desc:
        "CRUD sencillo con almacenamiento local y componentes reutilizables.",
      tech: ["React", "Context", "LocalStorage"],
      demo: "#",
      repo: "#",
    },
    {
      title: "E-commerce Minimal",
      desc:
        "Catálogo, carrito y checkout simulado. Arquitectura modular y responsive.",
      tech: ["React", "Router", "State"],
      demo: "#",
      repo: "#",
    },
  ];

  return (
    <main className="projects">
      <section className="hero">
        <div className="container">
          <h1 className="title">Proyectos</h1>
          <p className="subtitle">
            Una selección de trabajos y experimentos. Esta es una plantilla:
            cambia textos, imágenes y enlaces a tu gusto.
          </p>

          {/* Proyecto destacado */}
          <article className="featured">
            <div
              className={`thumb ${featured.image ? "" : "thumb--placeholder"}`}
              style={
                featured.image
                  ? { backgroundImage: `url(${featured.image})` }
                  : undefined
              }
              aria-label="Miniatura proyecto destacado"
            />
            <div className="featured-body">
              <h2>{featured.title}</h2>
              <p>{featured.desc}</p>
              <ul className="tags">
                {featured.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="actions">
                <a href={featured.demo} className="btn btn-primary">
                  Ver demo
                </a>
                <a href={featured.repo} className="btn btn-ghost">
                  Código
                </a>
              </div>
            </div>
          </article>

          {/* Resto de proyectos */}
          <div className="grid">
            {items.map((p) => (
              <article key={p.title} className="card">
                <div
                  className={`thumb ${p.image ? "" : "thumb--placeholder"}`}
                  style={
                    p.image ? { backgroundImage: `url(${p.image})` } : undefined
                  }
                  aria-label={`Miniatura ${p.title}`}
                />
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                  <ul className="tags">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="actions">
                    <a href={p.demo} className="btn btn-primary">
                      Ver demo
                    </a>
                    <a href={p.repo} className="btn btn-ghost">
                      Código
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA final opcional */}
          <div className="cta-inline">
            <span>¿Tienes un proyecto en mente?</span>
            <a href="/contacto" className="btn btn-primary">Hablemos</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;

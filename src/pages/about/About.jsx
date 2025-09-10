import "./About.css";
import tecnologia1 from "../../assets/imagen/tecnologia1.png";
import tecnologia2 from "../../assets/imagen/tecnologia2.png";
import tecnologia3 from "../../assets/imagen/tecnologia3.jpg";

function About() {
  return (
    <main className="about">
      <section className="hero">
        <div className="container">
          <h1 className="title">Sobre mí</h1>
          <p className="subtitle">
            Esta es la segunda página. Aquí puedes contar quién eres, qué haces y tus objetivos.
          </p>

          <div className="images">
            <img src={tecnologia1} alt="Tecnología 1" className="tech-img" />
            <img src={tecnologia2} alt="Tecnología 2" className="tech-img" />
          </div>
          <div className="images">
            <img src={tecnologia3} alt="Tecnología 3" className="tech-img" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

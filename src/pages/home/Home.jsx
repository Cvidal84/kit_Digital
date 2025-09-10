import "./Home.css";
import reactLogo from "../../assets/logo/react-logo.svg";
import reactImg from "../../assets/imagen/reactImg.jpg"

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
            <img src={reactLogo} alt="Logo React" className="logo" />
            <h1 className="title">
            Construye tu web moderna en minutos
          </h1>
          <p className="subtitle">
            Estructura limpia, rendimiento alto y diseño fácil de personalizar.
          </p>
          <img src={reactImg} alt="Img React" className="imagen"/>
        </div>
      </section>
    </main>
  );
}

export default Home;

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import RingMotif from "../components/RingMotif";
import "./SobreMi.css";

export default function SobreMi() {
  return (
    <>
      <section className="about-hero on-carbon">
        <div className="container about-hero__grid">
          <Reveal>
            <span className="eyebrow">Sobre mí</span>
            <h1 className="display-1 about-hero__title">
              Documento momentos.
              <br />
              No los dirijo.
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="about-hero__image">
            <img src="/images/sobre-mi/retrato-arce.jpg" alt="Fotógrafa de Arce con cámara en mano durante la hora azul" />
          </Reveal>
        </div>
      </section>

      <section className="section on-hueso about-story">
        <div className="container about-story__grid">
          <Reveal>
            <span className="eyebrow">Filosofía</span>
          </Reveal>
          <Reveal delay={0.1} className="about-story__body">
            <p className="body-lg">
              Empecé fotografiando a mi familia porque quería que mi abuela
              recordara cómo se veía riendo, no solo cómo se veía posando.
              Diez años después sigo persiguiendo eso: la risa real, no la de
              cámara.
            </p>
            <p className="body-lg">
              Estudié diseño antes que fotografía, y se nota — me obsesiona la
              composición tanto como el momento. Un buen retrato no es
              casualidad: es estar lista antes de que pase.
            </p>
            <p className="body-lg">
              Trabajo sola o con un segundo fotógrafo según el proyecto, y
              siempre entrego una selección editada con criterio — no 900
              fotos sin curar. Menos, pero mejor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section on-hueso about-values">
        <div className="container">
          <Reveal>
            <h2 className="display-2 about-values__title">Cómo trabajo</h2>
          </Reveal>
          <div className="about-values__grid">
            {[
              {
                title: "Documental primero",
                text: "Dirijo lo mínimo necesario. Prefiero esperar el momento real a fabricar uno.",
              },
              {
                title: "Luz natural",
                text: "El flash aparece solo cuando la luz no alcanza — nunca por costumbre.",
              },
              {
                title: "Entrega curada",
                text: "Cada sesión se edita a mano. Prefiero 40 fotos con criterio a 400 sin filtrar.",
              },
              {
                title: "Comunicación directa",
                text: "Respondo yo, no un equipo de ventas. Sabes con quién trabajas desde el primer mensaje.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="value-card">
                <RingMotif size={30} rings={2} color="var(--color-amber)" />
                <h3 className="value-card__title">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-carbon about-cta">
        <div className="container about-cta__inner">
          <Reveal>
            <h2 className="display-1">¿Platicamos de tu sesión?</h2>
            <div className="about-cta__actions">
              <Link to="/servicios" className="btn btn--ghost">Ver precios</Link>
              <a
                className="btn btn--solid"
                href="https://wa.me/526141234567?text=Hola%2C%20quiero%20platicar%20de%20una%20sesi%C3%B3n"
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

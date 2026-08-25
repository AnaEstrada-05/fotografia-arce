import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { categories } from "../data/portfolio";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <section className="page-hero on-carbon">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Portafolio</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-1 page-hero__title">Cuatro rutas para un mismo ojo.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg page-hero__sub">
              Cada sesión se archiva por tipo de trabajo. Elige una ruta para
              ver la cobertura completa.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight on-hueso portfolio-index">
        <div className="container portfolio-index__grid">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.08}>
              <Link to={`/portafolio/${cat.slug}`} className="route-card" data-cursor="VER">
                <div className="route-card__image">
                  <img src={cat.cover} alt={cat.label} loading="lazy" />
                </div>
                <div className="route-card__meta">
                  <span className="mono route-card__eyebrow">{cat.eyebrow}</span>
                  <h2 className="display-2 route-card__label">{cat.label}</h2>
                  <p className="route-card__desc">{cat.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

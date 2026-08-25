import Reveal from "../components/Reveal";
import { packages } from "../data/services";
import "./Servicios.css";

const groups = Array.from(new Set(packages.map((p) => p.category)));

const WHATSAPP_BASE = "https://wa.me/526141234567?text=";

export default function Servicios() {
  return (
    <>
      <section className="page-hero on-carbon">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Servicios &amp; Precios</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-1 page-hero__title">Paquetes claros, sin letras chicas.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg page-hero__sub">
              Precios base en pesos mexicanos. El costo final depende de
              locación, horas extra y entregables adicionales — siempre se
              cotiza por escrito antes de confirmar tu fecha.
            </p>
          </Reveal>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section key={group} className={`section section--tight ${gi % 2 === 0 ? "on-hueso" : "on-carbon"}`}>
          <div className="container">
            <Reveal>
              <h2 className="display-2 services-group__title">{group}</h2>
            </Reveal>

            <div className="services-group__grid">
              {packages
                .filter((p) => p.category === group)
                .map((pkg, i) => {
                  const message = encodeURIComponent(
                    `Hola, me interesa el paquete "${pkg.name}" (${pkg.category}) de Fotografía Arce. ¿Podemos platicar de fechas y disponibilidad?`
                  );
                  return (
                    <Reveal key={pkg.id} delay={i * 0.08}>
                      <div className={`price-card ${pkg.highlighted ? "price-card--highlight" : ""}`}>
                        {pkg.highlighted && <span className="price-card__tag mono">Más solicitado</span>}
                        <h3 className="display-2 price-card__name">{pkg.name}</h3>
                        <p className="price-card__price mono">Desde {pkg.priceFrom}</p>
                        <dl className="price-card__facts">
                          <div>
                            <dt>Duración</dt>
                            <dd>{pkg.duration}</dd>
                          </div>
                          <div>
                            <dt>Entrega</dt>
                            <dd>{pkg.delivery}</dd>
                          </div>
                        </dl>
                        <ul className="price-card__list">
                          {pkg.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <a
                          className="btn btn--solid price-card__cta"
                          href={`${WHATSAPP_BASE}${message}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Consultar por WhatsApp
                        </a>
                      </div>
                    </Reveal>
                  );
                })}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--tight on-hueso services-note">
        <div className="container services-note__inner">
          <Reveal>
            <h2 className="display-2">¿Necesitas algo a la medida?</h2>
            <p className="body-lg">
              Bodas destino, sesiones de varios días o campañas con equipo
              extendido se cotizan por separado. Cuéntanos qué tienes en mente.
            </p>
            <a href="#contacto" className="btn btn--ghost">Escríbenos</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

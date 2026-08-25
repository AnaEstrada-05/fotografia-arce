import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import RingMotif from "../components/RingMotif";
import { categories, portfolioImages } from "../data/portfolio";
import { packages } from "../data/services";
import "./Home.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const featuredPackages = packages.filter((p) => p.highlighted);
  const storyImages = portfolioImages.bodas.filter((i) => i.featured);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero on-carbon">
        <motion.div
          className="hero__image"
          initial={{ clipPath: "circle(0% at 72% 42%)" }}
          animate={{ clipPath: loaded ? "circle(140% at 72% 42%)" : "circle(0% at 72% 42%)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/images/hero/hero-main.jpg" alt="Novios sosteniendo un ramo de flores a contraluz al atardecer" />
        </motion.div>

        <div className="hero__scrim" />

        <div className="container hero__content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Estudio fotográfico — Chihuahua, Chih.
          </motion.span>

          <h1 className="hero__title">
            {["Cada", "instante", "tiene", "su", "anillo."].map((word, i) => (
              <span className="hero__word-wrap" key={word}>
                <motion.span
                  className="hero__word"
                  initial={{ y: "110%" }}
                  animate={{ y: loaded ? "0%" : "110%" }}
                  transition={{ delay: 0.55 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="hero__foot"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 12 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="body-lg hero__sub">
              Fotografía Arce documenta bodas, retratos, eventos y campañas con
              dirección de arte editorial — un archivo que crece contigo, capa
              sobre capa.
            </p>
            <div className="hero__ctas">
              <Link to="/portafolio" className="btn btn--ghost">Ver portafolio</Link>
              <Link to="/mis-fotos" className="btn btn--solid">Mis Fotos</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <RingMotif size={28} rings={2} color="var(--color-amber)" />
          <span className="mono">Desplázate</span>
        </motion.div>
      </section>

      {/* ---------------- MANIFIESTO ---------------- */}
      <section className="section manifesto on-hueso">
        <div className="container manifesto__grid">
          <Reveal>
            <span className="eyebrow">Manifiesto</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-2 manifesto__text">
              No fotografiamos poses. Fotografiamos lo que pasa un segundo antes
              de que alguien se dé cuenta de que lo está viviendo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PORTAFOLIO EN VIVO ---------------- */}
      <section className="section section--tight portfolio-preview on-hueso">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Portafolio</span>
              <h2 className="display-1">Cuatro rutas, un mismo ojo.</h2>
            </div>
          </Reveal>

          <div className="portfolio-preview__grid">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 0.08}>
                <Link to={`/portafolio/${cat.slug}`} className="route-card" data-cursor="VER">
                  <div className="route-card__image">
                    <img src={cat.cover} alt={cat.label} loading="lazy" />
                  </div>
                  <div className="route-card__meta">
                    <span className="mono route-card__eyebrow">{cat.eyebrow}</span>
                    <h3 className="display-2 route-card__label">{cat.label}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- HISTORIA DESTACADA ---------------- */}
      <section className="section featured-story on-hueso">
        <div className="container featured-story__grid">
          <Reveal className="featured-story__images">
            <img src={storyImages[0]?.src} alt={storyImages[0]?.alt} className="featured-story__img featured-story__img--main" />
            <img src={storyImages[1]?.src} alt={storyImages[1]?.alt} className="featured-story__img featured-story__img--secondary" />
          </Reveal>
          <Reveal delay={0.15} className="featured-story__copy">
            <span className="eyebrow">Historia destacada</span>
            <h2 className="display-2">Sofía &amp; Diego, en la Sierra Tarahumara</h2>
            <p className="body-lg">
              Diez horas de cobertura, dos fotógrafos y una promesa: no
              interrumpir nada. La ceremonia se hizo al atardecer, entre pinos,
              con la luz que ya se estaba yendo. El resultado: 500 fotografías
              donde nadie está posando.
            </p>
            <Link to="/portafolio/bodas" className="btn btn--ghost">Ver la sesión completa</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICIOS TEASER ---------------- */}
      <section className="section services-teaser on-carbon">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Servicios &amp; Precios</span>
              <h2 className="display-1">Paquetes claros, sin letras chicas.</h2>
            </div>
          </Reveal>

          <div className="services-teaser__grid">
            {featuredPackages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.1}>
                <div className="price-card">
                  <span className="mono price-card__category">{pkg.category}</span>
                  <h3 className="display-2 price-card__name">{pkg.name}</h3>
                  <p className="price-card__price mono">Desde {pkg.priceFrom}</p>
                  <ul className="price-card__list">
                    {pkg.includes.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link to="/servicios" className="btn btn--solid services-teaser__cta">Ver todos los paquetes</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SOBRE MÍ TEASER ---------------- */}
      <section className="section about-teaser on-hueso">
        <div className="container about-teaser__grid">
          <Reveal className="about-teaser__image">
            <img src="/images/sobre-mi/retrato-arce.jpg" alt="Fotógrafa de Arce con cámara en mano, hora azul" />
          </Reveal>
          <Reveal delay={0.15} className="about-teaser__copy">
            <span className="eyebrow">Sobre mí</span>
            <p className="display-2">
              Llevo diez años aprendiendo a estar en el lugar correcto, en el
              segundo correcto, sin que nadie lo note.
            </p>
            <Link to="/sobre-mi" className="btn btn--ghost">Conoce mi historia</Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- BANNER PORTAL DE FOLIOS ---------------- */}
      <section className="section section--tight folio-banner on-carbon">
        <div className="container folio-banner__grid">
          <Reveal className="folio-banner__copy">
            <span className="eyebrow">Portal privado</span>
            <h2 className="display-1">¿Ya tuviste tu sesión?</h2>
            <p className="body-lg">
              Ingresa tu folio y encuentra tu galería lista para ver y descargar
              en alta resolución.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="folio-banner__form">
            <Link to="/mis-fotos" className="folio-banner__input" data-cursor="ABRIR">
              <span className="mono folio-banner__placeholder">Ingresa tu código o folio de sesión</span>
              <span className="folio-banner__ring">
                <RingMotif size={22} rings={2} color="var(--color-amber)" />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

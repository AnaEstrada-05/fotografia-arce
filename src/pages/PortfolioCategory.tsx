import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import MasonryGrid from "../components/MasonryGrid";
import { categories, portfolioImages, type Category } from "../data/portfolio";
import "./Portfolio.css";

export default function PortfolioCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/portafolio" replace />;
  }

  const images = portfolioImages[category.slug as Category];
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <section className="page-hero page-hero--category on-carbon">
        <div className="container">
          <Reveal>
            <Link to="/portafolio" className="mono category-back">← Portafolio</Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="eyebrow">{category.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-1 page-hero__title">{category.label}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg page-hero__sub">{category.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight on-hueso">
        <div className="container">
          <MasonryGrid images={images} />
        </div>
      </section>

      <section className="section section--tight on-hueso category-switch">
        <div className="container">
          <span className="eyebrow">Otras rutas</span>
          <div className="category-switch__list">
            {otherCategories.map((c) => (
              <Link key={c.slug} to={`/portafolio/${c.slug}`} className="category-switch__link">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

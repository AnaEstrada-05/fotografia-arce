import { useState } from "react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import type { PortfolioImage } from "../data/portfolio";
import "./MasonryGrid.css";

interface MasonryGridProps {
  images: PortfolioImage[];
}

export default function MasonryGrid({ images }: MasonryGridProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="masonry">
        {images.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06} className="masonry__item-wrap">
            <button
              className={`masonry__item masonry__item--${img.orientation}`}
              onClick={() => setIndex(i)}
              data-cursor="VER"
              aria-label={`Ver ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox images={images} index={index} onClose={() => setIndex(null)} onNavigate={setIndex} />
    </>
  );
}

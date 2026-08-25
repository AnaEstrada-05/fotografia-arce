import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioImage } from "../data/portfolio";
import "./Lightbox.css";

interface LightboxProps {
  images: PortfolioImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [isOpen, index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
        >
          <button className="lightbox__close" onClick={onClose} aria-label="Cerrar visor" data-cursor="CERRAR">
            Cerrar ×
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => onNavigate((index - 1 + images.length) % images.length)}
            aria-label="Imagen anterior"
            data-cursor="ANTERIOR"
          >
            ‹
          </button>

          <motion.div
            key={index}
            className="lightbox__figure"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={images[index].src} alt={images[index].alt} />
            <p className="lightbox__caption mono">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
          </motion.div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={() => onNavigate((index + 1) % images.length)}
            aria-label="Imagen siguiente"
            data-cursor="SIGUIENTE"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./Nav.css";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/servicios", label: "Servicios & Precios" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/mis-fotos", label: "Mis Fotos" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__row container">
        <NavLink to="/" className="nav__mark" aria-label="Fotografía Arce — Inicio">
          ARCE
        </NavLink>

        <nav className="nav__links" aria-label="Navegación principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--solid nav__cta"
            href="https://wa.me/526141234567?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20con%20Fotograf%C3%ADa%20Arce"
            target="_blank"
            rel="noreferrer"
          >
            Agendar Sesión
          </a>
          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="nav__mobile-links" aria-label="Navegación móvil">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => `nav__mobile-link ${isActive ? "is-active" : ""}`}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <a
              className="btn btn--solid nav__mobile-cta"
              href="https://wa.me/526141234567?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20con%20Fotograf%C3%ADa%20Arce"
              target="_blank"
              rel="noreferrer"
            >
              Agendar Sesión
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

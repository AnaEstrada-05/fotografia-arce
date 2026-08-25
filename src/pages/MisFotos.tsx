import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RingMotif from "../components/RingMotif";
import Lightbox from "../components/Lightbox";
import { findFolio, type Folio } from "../data/folios";
import "./MisFotos.css";

type PortalState = "idle" | "loading" | "invalid" | "expired" | "success";

export default function MisFotos() {
  const [code, setCode] = useState("");
  const [state, setState] = useState<PortalState>("idle");
  const [folio, setFolio] = useState<Folio | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;

    setState("loading");

    // Simulación de consulta al backend. En producción: fetch a la
    // API que valida el folio y regresa la galería firmada.
    setTimeout(() => {
      const match = findFolio(code);
      if (!match) {
        setState("invalid");
        return;
      }
      if (match.status === "expired") {
        setFolio(match);
        setState("expired");
        return;
      }
      setFolio(match);
      setState("success");
    }, 1100);
  }

  function reset() {
    setState("idle");
    setFolio(null);
    setCode("");
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function downloadAll() {
    if (!folio) return;
    folio.photos.forEach((photo, i) => {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = photo.src;
        a.download = `${folio.code}-${String(i + 1).padStart(2, "0")}.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }, i * 200);
    });
  }

  return (
    <section className="portal on-carbon">
      <div className="container portal__inner">
        {state !== "success" && state !== "expired" && (
          <>
            <span className="eyebrow">Portal privado</span>
            <h1 className="display-1 portal__title">Mis Fotos</h1>
            <p className="body-lg portal__sub">
              Ingresa el folio que te compartimos al finalizar tu sesión para
              ver y descargar tu galería.
            </p>
          </>
        )}

        <AnimatePresence mode="wait">
          {(state === "idle" || state === "loading" || state === "invalid") && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="portal__form-wrap"
            >
              <form className="portal__form" onSubmit={handleSubmit}>
                <div className={`portal__field ${state === "invalid" ? "portal__field--error" : ""}`}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      if (state === "invalid") setState("idle");
                    }}
                    placeholder="Ingresa tu código o folio de sesión"
                    autoComplete="off"
                    autoCapitalize="characters"
                    aria-label="Código o folio de sesión"
                    disabled={state === "loading"}
                  />
                  <span className="portal__field-ring" aria-hidden="true">
                    <RingMotif size={26} rings={2} color="var(--color-amber)" />
                  </span>
                </div>

                <button type="submit" className="btn btn--solid portal__submit" disabled={state === "loading"}>
                  {state === "loading" ? "Buscando…" : "Ver mi galería"}
                </button>
              </form>

              {state === "invalid" && (
                <p className="portal__error mono" role="alert">
                  No encontramos ese folio. Revisa mayúsculas y guiones, o
                  escríbenos si el problema sigue.
                </p>
              )}

              <p className="portal__hint mono">
                Folios de prueba: SOFIA-DIEGO-2026 · DERECHO-TEC-2026 · ANA-15-2025 (vencido)
              </p>
            </motion.div>
          )}

          {state === "expired" && folio && (
            <motion.div
              key="expired"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="portal__status"
            >
              <RingMotif size={40} rings={3} color="var(--color-error)" />
              <h2 className="display-2">Esta galería ya expiró</h2>
              <p className="body-lg">
                {folio.sessionTitle} estuvo disponible hasta el {folio.expiresOn}.
                Escríbenos con tu folio y la reactivamos por ti.
              </p>
              <div className="portal__status-actions">
                <a
                  className="btn btn--solid"
                  href={`https://wa.me/526141234567?text=${encodeURIComponent(
                    `Hola, mi folio ${folio.code} ya expiró. ¿Me ayudan a reactivarlo?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reactivar por WhatsApp
                </a>
                <button className="btn btn--ghost" onClick={reset}>Intentar otro folio</button>
              </div>
            </motion.div>
          )}

          {state === "success" && folio && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="portal__gallery"
            >
              <div className="portal__gallery-head">
                <div>
                  <span className="eyebrow">Bienvenida</span>
                  <h2 className="display-1 portal__gallery-title">{folio.sessionTitle}</h2>
                  <p className="mono portal__gallery-meta">
                    {folio.sessionDate} · {folio.photos.length} fotografías · disponible hasta {folio.expiresOn}
                  </p>
                </div>
                <div className="portal__gallery-actions">
                  <button className="btn btn--solid" onClick={downloadAll}>Descargar todo en alta calidad</button>
                  <button className="btn btn--ghost" onClick={reset}>Buscar otro folio</button>
                </div>
              </div>

              <div className="portal__grid">
                {folio.photos.map((photo, i) => (
                  <div key={photo.src} className={`portal__photo portal__photo--${photo.orientation}`}>
                    <button
                      className="portal__photo-view"
                      onClick={() => setLightboxIndex(i)}
                      data-cursor="VER"
                      aria-label={`Ver ${photo.alt}`}
                    >
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </button>
                    <a
                      className="portal__photo-download mono"
                      href={photo.src}
                      download={`${folio.code}-${String(i + 1).padStart(2, "0")}.jpg`}
                      data-cursor="DESCARGAR"
                      aria-label={`Descargar ${photo.alt}`}
                    >
                      ↓
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {folio && (
        <Lightbox
          images={folio.photos.map((p) => ({ src: p.src, alt: p.alt, orientation: p.orientation }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}

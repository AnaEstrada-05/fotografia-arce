import { useState } from "react";
import RingMotif from "./RingMotif";
import "./Footer.css";

export default function Footer() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Simulación: en producción esto envía a un endpoint real.
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  }

  return (
    <footer className="footer on-carbon" id="contacto">
      <div className="container footer__top">
        <div className="footer__intro">
          <span className="eyebrow">Contacto</span>
          <h2 className="display-2 footer__title">
            Contemos tu
            <br />
            siguiente historia.
          </h2>
        </div>

        {sent ? (
          <div className="footer__success" role="status">
            <RingMotif size={40} rings={3} color="var(--color-amber)" />
            <p className="body-lg">
              Recibido. Te respondemos en menos de 24 horas para agendar tu sesión.
            </p>
          </div>
        ) : (
          <form className="footer__form" onSubmit={handleSubmit}>
            <div className="footer__field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" required placeholder="Tu nombre" />
            </div>
            <div className="footer__field">
              <label htmlFor="email">Correo</label>
              <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
            </div>
            <div className="footer__field">
              <label htmlFor="message">Cuéntanos de tu sesión</label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Fecha, tipo de sesión, lo que tengas en mente…"
              />
            </div>
            <button type="submit" className="btn btn--solid footer__submit" disabled={sending}>
              {sending ? "Enviando…" : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>

      <div className="container footer__meta">
        <div className="footer__col">
          <span className="eyebrow eyebrow--dim">Ubicación</span>
          <p>Chihuahua, Chih. México</p>
        </div>
        <div className="footer__col">
          <span className="eyebrow eyebrow--dim">Redes</span>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            {" · "}
            <a href="https://wa.me/526141234567" target="_blank" rel="noreferrer">WhatsApp</a>
          </p>
        </div>
        <div className="footer__col">
          <span className="eyebrow eyebrow--dim">Escríbenos</span>
          <p><a href="mailto:hola@fotografiaarce.mx">hola@fotografiaarce.mx</a></p>
        </div>
      </div>

      <div className="footer__wordmark">
        <span>ARCE</span>
      </div>

      <div className="container footer__legal">
        <span>© {new Date().getFullYear()} Fotografía Arce. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

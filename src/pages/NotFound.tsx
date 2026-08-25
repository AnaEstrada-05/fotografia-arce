import { Link } from "react-router-dom";
import RingMotif from "../components/RingMotif";

export default function NotFound() {
  return (
    <section
      className="on-carbon"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "1.5rem",
        paddingTop: "84px",
      }}
    >
      <div className="container">
        <RingMotif size={44} rings={3} color="var(--color-amber)" />
        <h1 className="display-1" style={{ marginTop: "1.5rem" }}>Página no encontrada</h1>
        <p className="body-lg" style={{ color: "var(--color-ash)", marginTop: "1rem", maxWidth: "44ch" }}>
          Este cuadro salió del encuadre. Regresa al inicio para seguir viendo el trabajo.
        </p>
        <Link to="/" className="btn btn--solid" style={{ marginTop: "1.5rem", color: "var(--color-carbon)" }}>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

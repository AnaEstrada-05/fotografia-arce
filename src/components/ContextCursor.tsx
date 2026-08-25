import { useEffect, useState } from "react";
import "./ContextCursor.css";

/**
 * Cursor contextual sutil para desktop. Escucha elementos con
 * data-cursor="VER" | "ABRIR" | "DESCARGAR" y muestra la etiqueta
 * junto al puntero. No hace nada en touch/mobile.
 */
export default function ContextCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled || !label) return null;

  return (
    <div
      className="context-cursor"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

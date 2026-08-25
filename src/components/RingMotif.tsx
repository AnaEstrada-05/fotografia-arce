interface RingMotifProps {
  size?: number;
  strokeWidth?: number;
  rings?: number;
  className?: string;
  color?: string;
}

/**
 * El anillo de crecimiento: motivo de firma derivado del nombre
 * "Arce" (maple). Se usa en dividers, loaders y estados del portal.
 */
export default function RingMotif({
  size = 48,
  strokeWidth = 1,
  rings = 3,
  className,
  color = "currentColor",
}: RingMotifProps) {
  const center = size / 2;
  const maxR = size / 2 - strokeWidth;
  const items = Array.from({ length: rings }, (_, i) => {
    const r = maxR * ((i + 1) / rings);
    return r;
  });

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
    >
      {items.map((r, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={r}
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.35 + (i / rings) * 0.5}
        />
      ))}
    </svg>
  );
}

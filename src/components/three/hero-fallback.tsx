/** Static SVG fallback when WebGL is unavailable or reduced motion is preferred */
export function HeroFallback() {
  const nodes = [
    { x: 320, y: 72, label: "AI" },
    { x: 520, y: 100, label: "Cloud" },
    { x: 548, y: 200, label: "K8s" },
    { x: 500, y: 310, label: "Apps" },
    { x: 320, y: 348, label: "Security" },
    { x: 120, y: 310, label: "Obs" },
    { x: 92, y: 200, label: "Data" },
    { x: 120, y: 100, label: "Auto" },
  ];
  const cx = 320;
  const cy = 200;

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hero-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#11D3E8" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#0A4C95" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#030B1A" stopOpacity="0" />
        </radialGradient>
        <filter id="hero-label-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <style>{`
        @keyframes hero-pulse-ring {
          0% { transform: scale(0.85); opacity: 0.5; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .hero-pulse-ring {
          transform-origin: ${cx}px ${cy}px;
          animation: hero-pulse-ring 2.4s ease-out infinite;
        }
        .hero-pulse-ring-2 { animation-delay: 0.8s; }
        .hero-pulse-ring-3 { animation-delay: 1.6s; }
      `}</style>

      <circle cx={cx} cy={cy} r="155" fill="none" stroke="#0A4C95" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="130" fill="none" stroke="#1565C0" strokeOpacity="0.15" strokeDasharray="4 8" />

      <circle
        className="hero-pulse-ring"
        cx={cx}
        cy={cy}
        r="52"
        fill="none"
        stroke="#11D3E8"
        strokeWidth="1.5"
        strokeOpacity="0.35"
      />
      <circle
        className="hero-pulse-ring hero-pulse-ring-2"
        cx={cx}
        cy={cy}
        r="52"
        fill="none"
        stroke="#11D3E8"
        strokeWidth="1"
        strokeOpacity="0.25"
      />
      <circle
        className="hero-pulse-ring hero-pulse-ring-3"
        cx={cx}
        cy={cy}
        r="52"
        fill="none"
        stroke="#11D3E8"
        strokeWidth="0.75"
        strokeOpacity="0.2"
      />

      <circle cx={cx} cy={cy} r="72" fill="url(#hero-hub-glow)" />

      {nodes.map((n) => (
        <line key={`line-${n.label}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke="#11D3E8" strokeOpacity="0.38" />
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="18" fill="#0A4C95" fillOpacity="0.45" stroke="#11D3E8" strokeOpacity="0.45" />
          <circle cx={n.x} cy={n.y} r="5" fill="#11D3E8" />
          <rect
            x={n.x - 28}
            y={n.y + 18}
            width={56}
            height={18}
            rx={4}
            fill="#030B1A"
            fillOpacity={0.95}
            stroke="#11D3E8"
            strokeOpacity={0.4}
            filter="url(#hero-label-glow)"
          />
          <text
            x={n.x}
            y={n.y + 30}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="10"
            fontWeight="600"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.08em"
          >
            {n.label}
          </text>
        </g>
      ))}

      <circle cx={cx} cy={cy} r="48" fill="none" stroke="#11D3E8" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="36" fill="#0A4C95" fillOpacity="0.25" />
      <image
        href="/brand/logo-mark.png"
        x={cx - 32}
        y={cy - 32}
        width={64}
        height={64}
        opacity={0.95}
      />
    </svg>
  );
}

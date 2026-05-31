/** Static SVG fallback when WebGL is unavailable or reduced motion is preferred */
export function HeroFallback({ tone = "heroOnLight" }: { tone?: "dark" | "heroOnLight" }) {
  const isLight = tone === "heroOnLight";
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

  const bgFill = isLight ? "#EEF2F7" : "#030B1A";
  const orbitStroke = isLight ? "#0A4C95" : "#0A4C95";
  const orbitOpacity = isLight ? 0.15 : 0.2;
  const dashStroke = isLight ? "#1565C0" : "#1565C0";
  const pathStroke = isLight ? "#11D3E8" : "#11D3E8";
  const pathOpacity = isLight ? 0.14 : 0.18;
  const labelFill = isLight ? "#ffffff" : "#030B1A";
  const labelText = isLight ? "#0A4C95" : "#ffffff";
  const labelStroke = isLight ? "#E2E8F0" : "#11D3E8";
  const labelStrokeOpacity = isLight ? 1 : 0.4;
  const nodeFill = isLight ? "#0A4C95" : "#0A4C95";
  const nodeFillOpacity = isLight ? 0.2 : 0.45;

  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hero-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#11D3E8" stopOpacity={isLight ? "0.28" : "0.45"} />
          <stop offset="55%" stopColor="#0A4C95" stopOpacity={isLight ? "0.1" : "0.15"} />
          <stop offset="100%" stopColor={bgFill} stopOpacity="0" />
        </radialGradient>
        {!isLight && (
          <filter id="hero-label-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <rect width="640" height="400" fill={bgFill} />
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

      <circle cx={cx} cy={cy} r="155" fill="none" stroke={orbitStroke} strokeOpacity={orbitOpacity} strokeWidth="1" />
      <circle cx={cx} cy={cy} r="130" fill="none" stroke={dashStroke} strokeOpacity={isLight ? 0.12 : 0.15} strokeDasharray="4 8" />

      <circle
        className="hero-pulse-ring"
        cx={cx}
        cy={cy}
        r="52"
        fill="none"
        stroke="#11D3E8"
        strokeWidth="1.5"
        strokeOpacity={isLight ? 0.22 : 0.35}
      />
      <circle
        className="hero-pulse-ring hero-pulse-ring-2"
        cx={cx}
        cy={cy}
        r="52"
        fill="none"
        stroke="#11D3E8"
        strokeWidth="1"
        strokeOpacity={isLight ? 0.16 : 0.25}
      />
      <circle
        className="hero-pulse-ring hero-pulse-ring-3"
        cx={cx}
        cy={cy}
        r="52"
        fill="none"
        stroke="#11D3E8"
        strokeWidth="0.75"
        strokeOpacity={isLight ? 0.12 : 0.2}
      />

      <circle cx={cx} cy={cy} r="72" fill="url(#hero-hub-glow)" />

      {nodes.map((n, i) => {
        const mx = (cx + n.x) / 2;
        const my = (cy + n.y) / 2 - 20;
        const pathD = `M ${cx} ${cy} Q ${mx} ${my} ${n.x} ${n.y}`;
        const dur = 2.6 + (i % 3) * 0.35;
        const begin = (i % 4) * 0.55;
        return (
          <g key={`flow-${n.label}`}>
            <path d={pathD} fill="none" stroke={pathStroke} strokeOpacity={pathOpacity} strokeWidth="0.75" />
            <circle r="3" fill="#11D3E8" fillOpacity={isLight ? 0.7 : 0.9}>
              <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={pathD} />
              <animate
                attributeName="opacity"
                values="0;0.95;0.4;0"
                dur={`${dur}s`}
                begin={`${begin}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {nodes.map((n) => {
        const dx = n.x - cx;
        const dy = n.y - cy;
        const len = Math.hypot(dx, dy) || 1;
        const lx = n.x + (dx / len) * 22;
        const ly = n.y + (dy / len) * 22 + 14;
        return (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r="18"
              fill={nodeFill}
              fillOpacity={nodeFillOpacity}
              stroke="#11D3E8"
              strokeOpacity={isLight ? 0.3 : 0.45}
            />
            <circle cx={n.x} cy={n.y} r="5" fill="#11D3E8" fillOpacity={isLight ? 0.75 : 1} />
            <rect
              x={lx - 28}
              y={ly - 4}
              width={56}
              height={18}
              rx={4}
              fill={labelFill}
              fillOpacity={isLight ? 1 : 0.95}
              stroke={labelStroke}
              strokeOpacity={labelStrokeOpacity}
              filter={isLight ? undefined : "url(#hero-label-glow)"}
            />
            <text
              x={lx}
              y={ly + 10}
              textAnchor="middle"
              fill={labelText}
              fontSize="10"
              fontWeight="600"
              fontFamily="ui-monospace, monospace"
              letterSpacing="0.08em"
            >
              {n.label}
            </text>
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r="48" fill="none" stroke="#11D3E8" strokeOpacity={isLight ? 0.22 : 0.35} strokeWidth="1" />
      <circle cx={cx} cy={cy} r="36" fill="#0A4C95" fillOpacity={isLight ? 0.12 : 0.25} />
      <image
        href="/brand/logo-mark.png"
        x={cx - 32}
        y={cy - 32}
        width={64}
        height={64}
        opacity={isLight ? 0.88 : 0.95}
      />
    </svg>
  );
}

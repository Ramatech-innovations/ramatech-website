/** Static SVG for Command Center when WebGL / motion reduced */
export function CommandFallback() {
  return (
    <svg
      viewBox="0 0 640 400"
      className="h-full w-full"
      role="img"
      aria-label="Ramatech orchestration layer connecting AI, cloud, platform, and applications"
    >
      <defs>
        <linearGradient id="cmd-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A4C95" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#11D3E8" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0A4C95" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="cmd-hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#11D3E8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0A4C95" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="320" cy="200" r="150" fill="none" stroke="#1565C0" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="320" cy="200" r="115" fill="none" stroke="#0A4C95" strokeOpacity="0.18" />
      {[
        [320, 200, 120, 72],
        [320, 200, 520, 95],
        [320, 200, 548, 200],
        [320, 200, 500, 310],
        [320, 200, 320, 348],
        [320, 200, 140, 310],
        [320, 200, 92, 200],
        [320, 200, 120, 100],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#cmd-line)" strokeWidth="1.5" opacity="0.6" />
      ))}
      <circle cx="320" cy="200" r="72" fill="url(#cmd-hub)" />
      <circle cx="320" cy="200" r="44" fill="#111827" stroke="#11D3E8" strokeOpacity="0.5" strokeWidth="1.5" />
      <text x="320" y="196" textAnchor="middle" fill="#11D3E8" fontSize="11" fontFamily="monospace" letterSpacing="2">
        RAMATECH
      </text>
      <text x="320" y="212" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">
        ORCHESTRATION
      </text>
      {[
        { x: 120, y: 72, label: "AI" },
        { x: 520, y: 95, label: "Cloud" },
        { x: 548, y: 200, label: "Kubernetes" },
        { x: 500, y: 310, label: "Applications" },
        { x: 320, y: 348, label: "Security" },
        { x: 140, y: 310, label: "Observability" },
        { x: 92, y: 200, label: "Data" },
        { x: 120, y: 100, label: "Automation" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="20" fill="#0A4C95" fillOpacity="0.4" stroke="#11D3E8" strokeOpacity="0.4" />
          <circle cx={n.x} cy={n.y} r="5" fill="#11D3E8" />
          <text x={n.x} y={n.y + 34} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="system-ui">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

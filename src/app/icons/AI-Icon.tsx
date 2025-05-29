export function AIIcon() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      {/* Glowing background, subtle and centered */}
      <defs>
        <radialGradient id="ai-glow" cx="60" cy="62" r="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#818cf8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ai-face" x1="32" y1="32" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818cf8" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="ai-circuit" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a5b4fc" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      {/* Glow */}
      <circle cx="60" cy="62" r="38" fill="url(#ai-glow)" />
      {/* Main AI face, centered and sized to match other icons */}
      <circle cx="60" cy="62" r="28" fill="url(#ai-face)" stroke="#4f46e5" strokeWidth="2" />
      {/* Circuit lines, aligned and not overflowing */}
      <g stroke="url(#ai-circuit)" strokeWidth="1.7" strokeLinecap="round">
        {/* Top left */}
        <path d="M60 36 L44 24" />
        <circle cx="44" cy="24" r="2.2" fill="#6366f1" />
        {/* Top right */}
        <path d="M60 36 L76 24" />
        <circle cx="76" cy="24" r="2.2" fill="#6366f1" />
        {/* Bottom left */}
        <path d="M60 88 L46 100" />
        <circle cx="46" cy="100" r="2.2" fill="#6366f1" />
        {/* Bottom right */}
        <path d="M60 88 L74 100" />
        <circle cx="74" cy="100" r="2.2" fill="#6366f1" />
        {/* Left mid */}
        <path d="M38 62 L24 62" />
        <circle cx="24" cy="62" r="2.2" fill="#6366f1" />
        {/* Right mid */}
        <path d="M82 62 L96 62" />
        <circle cx="96" cy="62" r="2.2" fill="#6366f1" />
        {/* Top center */}
        <path d="M60 36 L60 18" />
        <circle cx="60" cy="18" r="2.2" fill="#6366f1" />
        {/* Bottom center */}
        <path d="M60 88 L60 104" />
        <circle cx="60" cy="104" r="2.2" fill="#6366f1" />
      </g>
      {/* Face features, aligned and sized for consistency */}
      {/* Eyes with subtle highlight */}
      <ellipse cx="53" cy="62" rx="2.3" ry="2.5" fill="#1e293b" />
      <ellipse cx="67" cy="62" rx="2.3" ry="2.5" fill="#1e293b" />
      <ellipse cx="52.2" cy="61" rx="0.6" ry="0.8" fill="#a5b4fc" opacity="0.7" />
      <ellipse cx="66.2" cy="61" rx="0.6" ry="0.8" fill="#a5b4fc" opacity="0.7" />
      {/* Futuristic smile */}
      <path
        d="M55 72 Q60 77 65 72"
        stroke="#1e293b"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cheek "data dots" */}
      <circle cx="49" cy="70" r="0.9" fill="#a5b4fc" />
      <circle cx="71" cy="70" r="0.9" fill="#a5b4fc" />
      {/* Subtle forehead "AI circuit" mark */}
      <rect x="58.2" y="46" width="3.6" height="1.3" rx="0.7" fill="#a5b4fc" opacity="0.7" />
      <rect x="59.5" y="43" width="1.1" height="3.6" rx="0.7" fill="#a5b4fc" opacity="0.7" />
    </svg>
  );
}
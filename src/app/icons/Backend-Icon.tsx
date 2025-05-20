export function BackendIcon() {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
        >
        {/* Background Circle */}
        <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />

        {/* Server Rack */}
        <rect x="30" y="35" width="60" height="50" rx="4" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />

        {/* Server Units */}
        <rect x="35" y="40" width="50" height="10" rx="2" fill="#334155" />
        <rect x="35" y="55" width="50" height="10" rx="2" fill="#334155" />
        <rect x="35" y="70" width="50" height="10" rx="2" fill="#334155" />

        {/* Status Lights */}
        <circle cx="75" cy="45" r="2" fill="#22c55e" />
        <circle cx="75" cy="60" r="2" fill="#22c55e" />
        <circle cx="75" cy="75" r="2" fill="#22c55e" />

        {/* Database */}
        <ellipse cx="60" cy="95" rx="15" ry="5" fill="#64748b" />
        <path
          d="M45 95V85C45 82.2386 51.7157 80 60 80C68.2843 80 75 82.2386 75 85V95"
          stroke="#64748b"
          strokeWidth="2"
        />

        {/* Connection Lines */}
        <path d="M60 85V90" stroke="#64748b" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    )
  }
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
        {/* Background Circle */}
        <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#818cf8" strokeWidth="2" />

        {/* Circle Face (slightly bigger) */}
        <circle cx="60" cy="60" r="32" fill="#818cf8" stroke="#4f46e5" strokeWidth="2" />

        {/* Smiley Face (smaller, repositioned) */}
        <circle cx="53" cy="57" r="2.2" fill="#1e293b" />
        <circle cx="67" cy="57" r="2.2" fill="#1e293b" />
        <path d="M55.5 67C55.5 67 60 71 64.5 67" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />

        {/* Neural Network Nodes */}
        <circle cx="20" cy="30" r="4" fill="#4f46e5" />
        <circle cx="20" cy="60" r="4" fill="#4f46e5" />
        <circle cx="20" cy="90" r="4" fill="#4f46e5" />

        <circle cx="100" cy="30" r="4" fill="#4f46e5" />
        <circle cx="100" cy="60" r="4" fill="#4f46e5" />
        <circle cx="100" cy="90" r="4" fill="#4f46e5" />

        <circle cx="40" cy="15" r="4" fill="#4f46e5" />
        <circle cx="60" cy="15" r="4" fill="#4f46e5" />
        <circle cx="80" cy="15" r="4" fill="#4f46e5" />

        <circle cx="40" cy="105" r="4" fill="#4f46e5" />
        <circle cx="60" cy="105" r="4" fill="#4f46e5" />
        <circle cx="80" cy="105" r="4" fill="#4f46e5" />

        {/* Neural Network Connections */}
        <path d="M24 30L40 15" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M24 30L60 15" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M24 30L20 56" stroke="#4f46e5" strokeWidth="1.5" />

        <path d="M24 90L40 105" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M24 90L60 105" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M24 90L20 64" stroke="#4f46e5" strokeWidth="1.5" />

        <path d="M96 30L80 15" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M96 30L60 15" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M96 30L100 56" stroke="#4f46e5" strokeWidth="1.5" />

        <path d="M96 90L80 105" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M96 90L60 105" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M96 90L100 64" stroke="#4f46e5" strokeWidth="1.5" />

        <path d="M40 19L40 21" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M60 19L60 21" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M80 19L80 21" stroke="#4f46e5" strokeWidth="1.5" />

        <path d="M40 101L40 99" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M60 101L60 99" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M80 101L80 99" stroke="#4f46e5" strokeWidth="1.5" />

        <path d="M24 30L36 46" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M96 30L84 46" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M24 90L36 74" stroke="#4f46e5" strokeWidth="1.5" />
        <path d="M96 90L84 74" stroke="#4f46e5" strokeWidth="1.5" />
      </svg>
    )
  }
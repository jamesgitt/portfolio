export function DataAnalysisIcon() {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Chart Grid */}
        <path
          d="M30 85H90M30 70H90M30 55H90M30 40H90M30 40V85M45 40V85M60 40V85M75 40V85M90 40V85"
          stroke="#f9a8d4"
          strokeWidth="1"
        />

        {/* Bar Chart with Line Chart and Data Points inside */}
        <g>
          {/* Bar Chart */}
          <rect x="32" y="65" width="10" height="20" rx="1" fill="#f472b6" />
          <rect x="47" y="55" width="10" height="30" rx="1" fill="#f472b6" />
          <rect x="62" y="45" width="10" height="40" rx="1" fill="#f472b6" />
          <rect x="77" y="35" width="10" height="50" rx="1" fill="#f472b6" />

          {/* Line Chart (now visually inside the bar chart area) */}
          <path
            d="M37 83C37 83 52 75 57 65C62 55 67 55 82 45"
            stroke="#db2777"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Data Points (aligned with the new line) */}
          <circle cx="37" cy="83" r="3" fill="#db2777" />
          <circle cx="57" cy="65" r="3" fill="#db2777" />
          <circle cx="67" cy="55" r="3" fill="#db2777" />
          <circle cx="82" cy="45" r="3" fill="#db2777" />
        </g>
      </svg>
    )
  }
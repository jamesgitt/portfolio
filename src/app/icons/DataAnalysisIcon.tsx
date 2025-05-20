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
        {/* Background Circle */}
        <circle cx="60" cy="60" r="55" fill="#f8fafc" stroke="#ec4899" strokeWidth="2" />

        {/* Chart Grid */}
        <path
          d="M30 85H90M30 70H90M30 55H90M30 40H90M30 40V85M45 40V85M60 40V85M75 40V85M90 40V85"
          stroke="#f9a8d4"
          strokeWidth="1"
        />

        {/* Bar Chart */}
        <rect x="32" y="65" width="10" height="20" rx="1" fill="#f472b6" />
        <rect x="47" y="55" width="10" height="30" rx="1" fill="#f472b6" />
        <rect x="62" y="45" width="10" height="40" rx="1" fill="#f472b6" />
        <rect x="77" y="35" width="10" height="50" rx="1" fill="#f472b6" />

        {/* Line Chart */}
        <path
          d="M30 95C30 95 40 90 50 92C60 94 70 85 80 80C90 75 90 75 90 75"
          stroke="#db2777"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Data Points */}
        <circle cx="30" cy="95" r="3" fill="#db2777" />
        <circle cx="50" cy="92" r="3" fill="#db2777" />
        <circle cx="70" cy="85" r="3" fill="#db2777" />
        <circle cx="90" cy="75" r="3" fill="#db2777" />
      </svg>
    )
  }
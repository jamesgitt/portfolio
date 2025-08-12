import React, { useState, useEffect } from "react";
import SkillCard, { Skill } from "../components/SkillCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/Carousel";

const skills: Skill[] = [
  {
    name: "Java",
    category: "Programming",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="24" rx="10" ry="4" fill="#5382A1" />
        <path d="M16 8C18 10 14 12 16 14C18 16 14 18 16 20" stroke="#E76F00" strokeWidth="2" />
        <ellipse cx="16" cy="12" rx="2" ry="1" fill="#E76F00" />
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "Oracle Certified Java Programmer", issuer: "Oracle", year: 2021 }
    ]
  },
  {
    name: "Python",
    category: "Programming",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="8" rx="4" fill="#3776AB" />
        <rect x="4" y="16" width="24" height="8" rx="4" fill="#FFD43B" />
        <circle cx="10" cy="12" r="1.5" fill="#fff" />
        <circle cx="22" cy="20" r="1.5" fill="#fff" />
      </svg>
    ),
    score: 9,
    certifications: [
      { name: "Python Developer Certificate", issuer: "Python Institute", year: 2022 },
      { name: "Data Science with Python", issuer: "DataCamp", year: 2023 }
    ]
  },
  {
    name: "Dart",
    category: "Programming",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <polygon points="8,8 24,8 24,24 8,24" fill="#0175C2" />
        <polygon points="8,8 24,24 8,24" fill="#13B9FD" />
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "Flutter & Dart Developer", issuer: "Udemy", year: 2022 }
    ]
  },
  {
    name: "React/Next.js",
    category: "Programming",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="3" fill="#61DAFB" />
        <rect x="5" y="9" width="22" height="14" rx="2" fill="#fff" />
        <rect x="8" y="12" width="16" height="8" rx="1" fill="#61DAFB" />
        <circle cx="16" cy="16" r="3" fill="#000" fillOpacity="0.1" />
      </svg>
    ),
    score: 9,
    certifications: [
      { name: "Certified React Developer", issuer: "Meta", year: 2023 },
      { name: "Next.js Mastery", issuer: "Imaginary Academy", year: 2022 }
    ]
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#F7DF1E" />
        <text x="10" y="22" fontSize="10" fill="#000" fontFamily="Arial" fontWeight="bold">JS</text>
      </svg>
    ),
    score: 10,
    certifications: [
      { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: 2022 }
    ]
  },
  {
    name: "SQL",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="10" rx="12" ry="4" fill="#336791" />
        <rect x="4" y="10" width="24" height="12" rx="6" fill="#fff" stroke="#336791" strokeWidth="2"/>
        <ellipse cx="16" cy="22" rx="12" ry="4" fill="#336791" />
        <text x="10" y="20" fontSize="8" fill="#336791" fontFamily="Arial" fontWeight="bold">SQL</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "SQL for Data Science", issuer: "Coursera", year: 2022 }
    ]
  },
  {
    name: "TensorFlow",
    category: "Artificial Intelligence, Deep and Machine Learning",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="8" width="16" height="16" rx="4" fill="#FF6F00" />
        <path d="M16 8V24" stroke="#fff" strokeWidth="2"/>
        <path d="M8 16H24" stroke="#fff" strokeWidth="2"/>
        <text x="12" y="20" fontSize="7" fill="#fff" fontFamily="Arial" fontWeight="bold">TF</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "TensorFlow Developer Certificate", issuer: "Google", year: 2023 }
    ]
  },
  {
    name: "PyTorch",
    category: "Artificial Intelligence, Deep and Machine Learning",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="#EE4C2C" />
        <path d="M16 8V16L22 22" stroke="#fff" strokeWidth="2"/>
        <text x="10" y="24" fontSize="7" fill="#fff" fontFamily="Arial" fontWeight="bold">PT</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "PyTorch Fundamentals", issuer: "DeepLearning.AI", year: 2023 }
    ]
  },
  {
    name: "Scikit-learn",
    category: "Artificial Intelligence, Deep and Machine Learning",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="12" ry="8" fill="#F7931E" />
        <text x="8" y="20" fontSize="7" fill="#fff" fontFamily="Arial" fontWeight="bold">SKL</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "Machine Learning with Scikit-learn", issuer: "Coursera", year: 2022 }
    ]
  },
  {
    name: "LLMs",
    category: "Artificial Intelligence, Deep and Machine Learning",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="12" ry="8" fill="#8B5CF6" />
        <text x="8" y="20" fontSize="8" fill="#fff" fontFamily="Arial" fontWeight="bold">LLM</text>
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "Large Language Models", issuer: "DeepLearning.AI", year: 2023 }
    ]
  },
  {
    name: "Google Sheets",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="3" fill="#0F9D58" />
        <rect x="10" y="10" width="12" height="12" rx="2" fill="#fff" />
        <text x="12" y="20" fontSize="7" fill="#0F9D58" fontFamily="Arial" fontWeight="bold">GS</text>
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "Google Sheets Advanced", issuer: "Google", year: 2022 }
    ]
  },
  {
    name: "Excel",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="3" fill="#217346" />
        <rect x="10" y="10" width="12" height="12" rx="2" fill="#fff" />
        <text x="12" y="20" fontSize="7" fill="#217346" fontFamily="Arial" fontWeight="bold">XL</text>
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "Microsoft Excel Expert", issuer: "Microsoft", year: 2021 }
    ]
  },
  {
    name: "Pandas",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="8" width="4" height="16" rx="2" fill="#150458" />
        <rect x="20" y="8" width="4" height="16" rx="2" fill="#E70488" />
        <rect x="14" y="12" width="4" height="8" rx="2" fill="#150458" />
        <text x="10" y="28" fontSize="7" fill="#E70488" fontFamily="Arial" fontWeight="bold">Pandas</text>
      </svg>
    ),
    score: 9,
    certifications: [
      { name: "Data Analysis with Pandas", issuer: "DataCamp", year: 2023 }
    ]
  },
  {
    name: "NumPy",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="8" width="16" height="16" rx="4" fill="#013243" />
        <text x="12" y="22" fontSize="9" fill="#fff" fontFamily="Arial" fontWeight="bold">NumPy</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "NumPy for Data Science", issuer: "DataCamp", year: 2022 }
    ]
  },
  {
    name: "Matplotlib",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="20" height="20" rx="4" fill="#11557C" />
        <circle cx="16" cy="16" r="7" fill="#fff" />
        <path d="M16 16L23 16" stroke="#11557C" strokeWidth="2"/>
        <path d="M16 16L16 9" stroke="#11557C" strokeWidth="2"/>
        <text x="10" y="28" fontSize="7" fill="#11557C" fontFamily="Arial" fontWeight="bold">mpl</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "Data Visualization with Matplotlib", issuer: "Coursera", year: 2022 }
    ]
  },
  {
    name: "Seaborn",
    category: "Data Analysis, Visualization, and Databases",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="12" ry="8" fill="#69B3A2" />
        <ellipse cx="16" cy="16" rx="6" ry="4" fill="#fff" />
        <text x="10" y="28" fontSize="7" fill="#69B3A2" fontFamily="Arial" fontWeight="bold">Seaborn</text>
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "Data Visualization with Seaborn", issuer: "DataCamp", year: 2023 }
    ]
  },
  {
    name: "AWS",
    category: "Deployment and APIs",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="20" rx="12" ry="6" fill="#FF9900" />
        <ellipse cx="16" cy="16" rx="8" ry="4" fill="#fff" />
        <text x="10" y="28" fontSize="8" fill="#FF9900" fontFamily="Arial" fontWeight="bold">AWS</text>
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon", year: 2022 }
    ]
  },
  {
    name: "FastAPI",
    category: "Deployment and API",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="#009688" />
        <text x="8" y="22" fontSize="10" fill="#fff" fontFamily="Arial" fontWeight="bold">FastAPI</text>
      </svg>
    ),
    score: 8,
    certifications: [
      { name: "FastAPI Fundamentals", issuer: "Udemy", year: 2023 }
    ]
  },
  {
    name: "SSH",
    category: "Deployment and API",
    icon: (
      <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="12" width="16" height="8" rx="2" fill="#333" />
        <circle cx="16" cy="16" r="3" fill="#fff" />
        <rect x="14" y="15" width="4" height="2" rx="1" fill="#333" />
        <text x="12" y="28" fontSize="8" fill="#333" fontFamily="Arial" fontWeight="bold">SSH</text>
      </svg>
    ),
    score: 7,
    certifications: [
      { name: "Linux SSH Essentials", issuer: "Linux Academy", year: 2021 }
    ]
  }
];

// Carousel Dots component
function CarouselDots({
  count,
  selectedIdx,
  onSelect,
}: {
  count: number;
  selectedIdx: number;
  onSelect: (idx: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          aria-label={`Go to slide ${idx + 1}`}
          className={`w-3 h-3 rounded-full border-2 transition-colors duration-200
            ${selectedIdx === idx ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"}
            focus:outline-none focus:ring-2 focus:ring-blue-400`}
          onClick={() => onSelect(idx)}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  // Embla API for controlling the carousel
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);

  // Listen to carousel selection changes
  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      setSelectedIdx(currentIndex);
    };
    
    // Set initial state immediately
    onSelect();
    
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  // Handler for dot click
  const handleDotClick = (idx: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(idx);
    }
  };

  // Group skills by category
  const categories = [
    "Programming",
    "Data Analysis, Visualization, and Databases",
    "Artificial Intelligence, Deep and Machine Learning",
    "Deployment and API"
  ];

  // Map category to skills
  const skillsByCategory: { [cat: string]: Skill[] } = {};
  for (const cat of categories) {
    skillsByCategory[cat] = [];
  }
  for (const skill of skills) {
    if (categories.includes(skill.category)) {
      skillsByCategory[skill.category].push(skill);
    }
  }

  // State for each carousel's emblaApi and selectedIdx
  const [carouselStates, setCarouselStates] = useState(
    categories.map(() => ({
      emblaApi: null as any,
      selectedIdx: 0,
    }))
  );

  // Handlers for each carousel
  const handleSetApi = (catIdx: number) => (api: any) => {
    setCarouselStates((prev) => {
      const next = [...prev];
      next[catIdx] = { ...next[catIdx], emblaApi: api };
      return next;
    });
  };

  // Listen to carousel selection changes for each carousel
  useEffect(() => {
    categories.forEach((cat, catIdx) => {
      const { emblaApi } = carouselStates[catIdx];
      if (!emblaApi) return;

      const onSelect = () => {
        const currentIndex = emblaApi.selectedScrollSnap();
        setCarouselStates((prev) => {
          const next = [...prev];
          next[catIdx] = { ...next[catIdx], selectedIdx: currentIndex };
          return next;
        });
      };

      onSelect();
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);

      // Clean up
      return () => {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselStates.map((s) => s.emblaApi).join(",")]);

  // Handler for dot click for each carousel
  function handleDotClickFactory(catIdx: number) {
    return (idx: number) => {
      const { emblaApi } = carouselStates[catIdx];
      if (emblaApi) {
        emblaApi.scrollTo(idx);
      }
    };
  }

  return (
    <main className="Skills-module">
      {categories.map((cat, catIdx) => {
        const catSkills = skillsByCategory[cat];
        if (!catSkills.length) return null;
        return (
          <section key={cat} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">{cat}</h2>
            <div className="carousel-container">
              <Carousel
                opts={{ align: "center", loop: true, startIndex: 0 }}
                setApi={handleSetApi(catIdx)}
              >
                <CarouselContent className="carousel-content">
                  {catSkills.map((skill, idx) => (
                    <CarouselItem
                      key={idx}
                      className={`basis-1/3 flex justify-center2`}
                    >
                      <SkillCard skill={skill} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Move prev/next to the start/end of the dots row */}
                <div className="carousel-dots flex items-center justify-center gap-2 mt-4">
                  <CarouselPrevious />
                  <CarouselDots
                    count={catSkills.length}
                    selectedIdx={carouselStates[catIdx]?.selectedIdx || 0}
                    onSelect={handleDotClickFactory(catIdx)}
                  />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </section>
        );
      })}
    </main>
  );
}
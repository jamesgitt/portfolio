import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const skillsData = [
  {
    category: 'Frontend',
    description: 'Building responsive and interactive user interfaces with modern frameworks',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    category: 'Backend',
    description: 'Creating robust server-side applications and APIs',
    skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'Authentication', 'Database Design'],
    color: 'from-accent/20 to-accent/5',
  },
  {
    category: 'Tools & DevOps',
    description: 'Development tools and deployment infrastructure',
    skills: ['Git', 'Docker', 'CI/CD', 'Bun', 'AWS'],
    color: 'from-primary/30 to-accent/10',
  },
  {
    category: 'Design',
    description: 'Creating beautiful and accessible design systems',
    skills: ['Figma', 'UI/UX Design', 'Accessibility', 'Design Systems', 'Prototyping'],
    color: 'from-accent/25 to-primary/10',
  },
]

export default function SkillsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? skillsData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === skillsData.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl text-balance">
            A comprehensive overview of my technical skills and expertise areas developed through years of professional experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}>
              {skillsData.map((skill, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className={`bg-gradient-to-br ${skill.color} border-primary/20 p-8 min-h-80`}>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          {skill.category}
                        </h3>
                        <p className="text-foreground/80 mb-6 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="border-primary/50 hover:bg-primary/10 hover:text-primary"
              aria-label="Previous skill"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {skillsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to skill ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="border-primary/50 hover:bg-primary/10 hover:text-primary"
              aria-label="Next skill"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

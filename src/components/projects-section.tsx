import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveLink: string
  githubLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with product filtering, cart management, and secure checkout. Built with React and payment integration.',
    image: 'Commerce',
    tags: ['React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task management with drag-and-drop functionality, team collaboration features, and push notifications.',
    image: 'Tasks',
    tags: ['React', 'WebSocket', 'Node.js', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard with real-time data visualization, customizable widgets, and comprehensive reporting capabilities.',
    image: 'Analytics',
    tags: ['React', 'Chart.js', 'TypeScript', 'API Integration'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Full-featured social platform with user authentication, feed, messaging, notifications, and media sharing capabilities.',
    image: 'Social',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'WebRTC'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl text-balance">
            A selection of projects that showcase my skills in building full-stack applications with modern technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20 flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className="relative w-full h-48 bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center overflow-hidden border-b border-border">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary/40 mb-2">{project.image}</div>
                  <p className="text-foreground/40 text-sm">Project Demo</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/15 text-primary text-xs font-medium rounded border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:text-primary text-foreground"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

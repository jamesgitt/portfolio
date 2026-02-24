import { Card } from './ui/card'

export default function IntroductionSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div className="flex justify-center">
            <Card className="overflow-hidden shadow-lg border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-muted/30 flex items-center justify-center border-2 border-primary/30 rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary/30 mb-4">Image</div>
                    <p className="text-foreground/50">Your portrait goes here</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Hello, I'm a Creative Developer
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                I craft beautiful and functional digital experiences with a passion for clean code and thoughtful design. With expertise in modern web technologies, I build applications that are both visually stunning and technically robust.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  About Me
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  I specialize in frontend development with a focus on user experience and accessibility. My journey spans across startups, agencies, and product companies, where I've contributed to projects that impact thousands of users.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  What I Do
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  I transform design concepts into interactive web experiences, optimize performance, and ensure accessibility standards are met. I'm equally comfortable working with design teams and backend engineers to deliver comprehensive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

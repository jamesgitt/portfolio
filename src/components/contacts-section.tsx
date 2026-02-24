import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: <Mail className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter className="w-6 h-6" />,
  },
]

export default function ContactsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Send Message
              </Button>

              {isSubmitted && (
                <div className="p-4 bg-primary/10 border border-primary/30 rounded text-primary text-sm text-center">
                  Thanks for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </Card>

          {/* Social Links and Info */}
          <div className="space-y-6">
            <Card className="p-8 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-primary hover:underline font-medium"
                  >
                    hello@example.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Location</p>
                  <p className="text-foreground font-medium">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Availability</p>
                  <p className="text-foreground font-medium">Open to opportunities</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-muted/50 hover:bg-primary/10 rounded border border-border hover:border-primary/50 transition-colors group"
                  >
                    <span className="text-foreground group-hover:text-primary font-medium text-sm">
                      {link.name}
                    </span>
                    <span className="text-foreground/60 group-hover:text-primary">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

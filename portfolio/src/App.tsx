import NavigationBar from './components/navigation-bar'
import IntroductionSection from './components/introduction-section'
import SkillsSection from './components/skills-section'
import ProjectsSection from './components/projects-section'
import ContactsSection from './components/contacts-section'

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  )
}

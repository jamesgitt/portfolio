import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './about/About'
import Contact from './contacts/Contacts'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

export default function Home() {
    return (
      <>
        <main>          
          <div className="w-full fixed top-0 left-0 z-50">
            <Navbar />
          </div>
        </main>

        <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 from-red-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-gray-700">Explore my projects, skills, and contact information below.</p>
        </main>
        <main>
          <div>
            <About />
          </div>
          <div>
            <Contact />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Footer />
          </div>
        </main>
      </>
    );
  }
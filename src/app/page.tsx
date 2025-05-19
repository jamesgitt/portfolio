import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './about/About'
import Contact from './contacts/Contacts'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

export default function Home() {
    return (
      <>
        <main className="min-h-screen flex flex-col bg-red-500">
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
            <h1 className="text-4xl font-bold mb-4 object-right-top">---------</h1>
            <p className="text-lg text-gray-700">Welcome to my Next.js portfolio!</p>

          <About />
          <Contact />
          <Projects />
          <Skills />
          <Footer />
        </main>
      </>
    );
  }
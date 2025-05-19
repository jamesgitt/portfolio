import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './about/About';
import Contact from './contacts/Contacts'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

export default function Home() {
    return (
      <>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 from-current">
          <h1 className="text-4xl font-bold mb-4">---------</h1>
          <p className="text-lg text-gray-700">Welcome to my Next.js portfolio!</p>
        </main>
        <About />
        <Contact />
        <Projects />
        <Skills />
        <Footer />
      </>
    );
  }
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileRound from './components/ProfileRound'
import AnimatedText from './components/FadeInText'
import BouncingText from './components/BouncingText'
import TypingText from './components/TypingText'
import FadingText from './components/FadingText'

import About from './about/page'
import Contact from './contacts/page'
import Projects from './projects/page'
import Skills from './skills/page'

export default function Home() {
    // Height of the navbar (adjust if you change Navbar's height)
    const navbarHeight = "4rem";

    return (
      <>
      


        {/* Navbar at the top, fixed */}
        <div className="w-full fixed top-0 left-0 z-50">
          <Navbar />
        </div>



        {/* Add top padding to prevent overlap with fixed navbar */}
        <main
          className="min-h-screen flex flex-col items-center justify-center bg-red-50 from-red-50"
          style={{ paddingTop: navbarHeight }}
        >
          <div className="w-full flex flex-row items-center gap-4 pl-32">
            <div className="flex flex-col items-start pb-96">
              <h1 className="text-6xl font-bold mb-4 font-serif">AI | Backend Developing | Data Analysis</h1>
              <p className="text-black mt-2 text-xm font-serif max-w-xm">
                | I build intelligent solutions, craft robust backends, and turn data into actionable insights, combining AI, backend development, and data analysis to deliver real-world impact. |
              </p>
              <img></img>
            </div>
            <div className="flex flex-col items-end pr-32">
              <ProfileRound />
            </div>
          </div>
        </main>



        <main>
          <div>
            <About />
          </div>
        </main>



        <main>
          <div>
            <Contact />
          </div>
        </main>



        <main>
          <div>
            <Projects />
          </div>
        </main>



        <main>
          <div>
            <Skills />
          </div>
        </main>



        <main>
          <div>
            <Footer />
          </div>
        </main>



      </>
    );
  }
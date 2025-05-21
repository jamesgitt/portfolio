import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileRound from './components/ProfileRound'
import PulsatingText from './components/PulsatingText'
import PulsateElement from './components/PulsateElement'

import { AIIcon } from './icons/AI-Icon'
import { BackendIcon } from './icons/Backend-Icon'
import { DataAnalysisIcon } from './icons/DataAnalysisIcon'

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
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-50 to-red-300"
          style={{ paddingTop: navbarHeight }}
        >
          <div className="w-full flex flex-row items-center gap-8 pl-28">
            <div className="flex flex-col items-center pb-96">
              <div className="flex flex-col items-center pt-48" style={{ fontFamily: 'Cambria, serif' }}>
                <PulsatingText text="AI" 
                  className="text-8xl font-bold mx-10 my-2 text-center" />
                
                <PulsatingText text="BACKEND DEVELOPING" 
                  className="text-4xl mx-10 my-2 text-center" />

                <PulsatingText text="DATA ANALYSIS" 
                  className="text-4xl mx-10 my-2 text-center" />

                <PulsatingText text="I build intelligent solutions, craft robust backends, and turn data into actionable insights, combining AI, backend development, and data analysis to deliver real-world impact." 
                className="text-red-900 text-left text-justify text-base font-bold max-w-xm my-4 w-92 mx-4" />
              </div>
              <PulsateElement>
                <div className="flex flex-row items-center gap-2 mt-4 pl-4">
                  
                  <div className="w-36 h-30 drop-shadow-xl">
                    <AIIcon />
                  </div>
                  <div className="w-36 h-30 drop-shadow-xl">
                    <BackendIcon />
                  </div>
                  <div className="w-36 h-30 drop-shadow-xl">
                    <DataAnalysisIcon />
                  </div>
                  
              </div>
              </PulsateElement>
            </div>
            <div className="flex flex-col items-end pr-32 pb-32">
              <ProfileRound />
            </div>
          </div>
        </main>



        <section id="about">
          <main>
            <div>
              <About />
            </div>
          </main>
        </section>



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
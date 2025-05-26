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

import './styles/background.css'
import './globals.css'

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
          className="webBg"
          style={{ paddingTop: navbarHeight }}
        >
          <div className="w-full flex flex-row items-center gap-8 pl-28">

            <div className="homePageCard backdrop-blur-sm mt-2">


              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <PulsatingText text="AI" 
                    className="textHeaderColor font-black text-8xl mx-10 my-2 text-center" />
                  
                  <PulsatingText text="BACKEND DEVELOPING" 
                    className="textHeaderColor text-4xl mx-10 py-2 text-center" />

                  <PulsatingText text="DATA ANALYSIS" 
                    className="textHeaderColor text-4xl mx-10 my-2 text-center" />

                  <PulsatingText text="I build intelligent solutions, craft robust backends, and turn data into actionable insights, combining AI, backend development, and data analysis to deliver real-world impact." 
                  className="textParagraph py-4 px-4" />
                </div>
                <PulsateElement>
                  <div className="flex flex-row items-center pl-8">
                    
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


            </div>
            

            <div className="flex flex-col items-end">
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
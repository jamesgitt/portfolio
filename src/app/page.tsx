"use client"
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
        <section id="Home">
          <main
            className="webBg flex flex-col items-center min-h-screen"
            style={{ paddingTop: navbarHeight }}
          >
                <div className="flex flex-col pb-48">
                  <div className="flex flex-row items-center justify-center w-full">
                    <PulsatingText
                      text="AI"
                      className="textHeaderColor font-black text-8xl mx-6 my-2 left"
                    />
                    <span className="text-4xl text-red-900 font-black">-</span>
                    <PulsatingText
                      text="BACKEND DEVELOPING"
                      className="textHeaderColor font-bold text-4xl mx-6 py-2 text-left"
                    />
                    <span className="text-4xl text-red-900 font-black">-</span>
                    <PulsatingText
                      text="DATA ANALYSIS"
                      className="textHeaderColor font-bold text-4xl mx-6 my-2 text-left"
                    />
                  </div>
                  <PulsatingText
                      text="I build intelligent solutions, craft robust backends, and turn data into actionable insights, combining AI, backend development, and data analysis to deliver real-world impact."
                      className="textParagraph max-w-[40rem] "
                    />

                  <PulsateElement>
                    <div className="flex flex-row items-center justify-center gap-6 mt-2">
                      <div className="icon flex items-center justify-center">
                        <AIIcon />
                      </div>
                      <div className="icon flex items-center justify-center">
                        <BackendIcon />
                      </div>
                      <div className="icon flex items-center justify-center">
                        <DataAnalysisIcon />
                      </div>
                    </div>
                  </PulsateElement>
                </div>
          </main>
        </section>


        {/* About section with pop-up animation on scroll */}
        <section id="About">
          <main>
            <div
              className="about-fadein"
            >
              <About />
            </div>
          </main>
        </section>


        <section id="Contacts">
          <main>
            <div>
              <Contact />
            </div>
          </main>
        </section>



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
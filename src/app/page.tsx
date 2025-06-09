"use client"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProfileRound from './components/ProfileRound'
import PulsatingText from './components/PulsatingText'
import PulsateElement from './components/PulsateElement'

import AIIcon from './icons/AI-Icon'
import BackendIcon from './icons/Backend-Icon'
import DataAnaylsiIcon from './icons/DataAnalysisIcon'

import About from './about/page'
import Contact from './contacts/page'
import Projects from './projects/page'
import Skills from './skills/page'

import './styles/background.css'
import './styles/button.css'
import './globals.css'

export default function Home() {

  // Height of the navbar (adjust if you change Navbar's height)
  const navbarHeight = "8rem";

  return (
      <>
        <div className="w-full fixed top-0 left-0 z-50">
          <Navbar />
        </div>
x
        <main className="webBg">

          <section
            id="Home"
            className="min-h-screen pb-[48rem]"
            style={{ paddingTop: navbarHeight }}
          >
            <div className="flex flex-col items-center justify-center gap-12 mt-12 ml-12">


              <div className="flex flex-row items-center justify-center">
                <PulsatingText className="max-w-[48rem] text-center">
                  <span className="text-red-900 font-black text-6xl text-center">
                  ARTIFICIAL INTELLIGENCE,
                  </span> 
                  <span className="text-6xl mx-6 text-red-900 font-black"> </span>
                  <span className="text-black font-semibold text-6xl text-center"> BACKEND DEVELOPING, </span>
                  <span className="text-black font-semibold text-6xl text-center">& DATA ANALYSIS</span>
                </PulsatingText>
              </div>


              <div className="grid lg:grid-cols-2 gap-16 py-8 items-center justify-center">

                <div>
                  <PulsateElement>
                    <ProfileRound />
                  </PulsateElement>
                </div>

                <div className="flex flex-col gap-20 items-start justify-start">
                  <PulsatingText className="textParagraph font-semibold drop-shadow-xl"> 
                    <span>"I </span> <span className="text-red-900 font-black">build intelligent solutions, craft robust backends, and turn data into actionable insights, </span> <span> combining AI, backend development, and data analysis to deliver real-world impact."</span>
                  </PulsatingText>

                  <PulsateElement>
                    <div className="flex flex-col items-center justify-center gap-20">
                      <div className="icon flex flex-row gap-24">
                        <AIIcon/>
                        <BackendIcon/>
                        <DataAnaylsiIcon/>
                      </div>

                      <div className="flex flex-row gap-4">
                        <button className="buttonCommon">View my work &nbsp; &rarr;</button>
                        <button className="buttonCommon">Download my resume &nbsp; &darr;</button>
                      </div>
                    </div>
                  </PulsateElement>

                </div>

              </div>


            </div>
          </section>

          <section id="About" className="min-h-screen pb-[48rem]">
            <div>
              <About />
            </div>
          </section>


          <section id="Skills" className="min-h-screen pb-[24rem]">
            <div>
              {/* Skills Section */}
              <h2 className="text-6xl font-bold text-red-900 mb-12 text-center">Skills</h2>
              <Skills />
            </div>
          </section>

          
          <section id="Contacts">
            <div>
              <Contact />
            </div>
          </section>


          <section>
            <div>
              <Footer />
            </div>
          </section>
        </main>
      </>
    );
  }
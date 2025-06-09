import '../styles/about.css'
import Projects from '../projects/page';
import PulsatingText from '../components/PulsatingText';

export default function About() {
    return (
      <main className="flex flex-col items-center justify-center">
        <section id="Projects">



          
          <div className="flex flex-col">
            
          </div>

          <div className="flex flex-col items-center">
            <PulsatingText className="text-black fontBold text-left text-4xl p-4" text="Check out my projects!"/>
            <Projects />
          </div>


        </section>
      </main>
    );
  }
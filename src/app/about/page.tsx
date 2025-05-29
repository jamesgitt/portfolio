import ProfileRound from '../components/ProfileRound'
import PulsatingText from '../components/PulsatingText'
import PulsateElement from '../components/PulsateElement'

 
export default function About() {
    return (
      <main className="webBg flex flex-col items-center justify-center">


        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">

          <div className="flex flex-col items-center justify-center pt-20">
            <div className="flex flex-row">
              <p className="text-red-900 text-4xl text-center pt-12 pr-4">I am</p>
              <p className="text-red-900 text-8xl text-center font-bold mb-10">JAMES</p>
            </div>

            <div className="flex flex-row">
              <PulsateElement>
                <ProfileRound />
              </PulsateElement>
            </div>
            <PulsatingText
                text="A student of technology, continuosly learning and adapting."
                className="textParagraph p-4 w-[32rem]"
              />
          </div>

          <div className="videoCard">
            <video
            src="./videos/videoDeepfakeDetection.mp4"
            width="400"
            autoPlay={true}
            loop={true}
            muted={true}
            poster="./images/videoDeepfakePoster.jpg"
            >
            Your browser does not support the video tag.
            </video>


          </div> 

        </div>

      </main>
    );
  }
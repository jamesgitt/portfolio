import PulsatingText from '../components/PulsatingText'
import PulsateElement from '../components/PulsateElement'
import Link from 'next/link';

 
export default function About() {
    return (
      <main className="flex flex-col items-center justify-center">
        
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

            <div className="flex flex-col gap-4">
              <div className="project1 flex flex-col items-center justify-center gap-8">
                <h1 className="text-red-900 text-6xl font-bold mt-8">Filipino Voice DeepFake Detection</h1>
                <p className="text-black text-2xl font-light text-center mx-12">A study I collaborated in, wherein us researchers gathered and preprocessed real and deepfaked Filipino Audio Data, and used multiple models to evaluate which method is most effective. Pioneer in FIlipino language deepfake detection.</p>
                  <div className="flex flex-row flex-wrap gap-2 justify-center">
                    <p className="pill-text">Python</p>
                    <p className="pill-text">TensorFlow</p>
                    <p className="pill-text">Gradient Boosting</p>
                    <p className="pill-text">Decision Tree</p>
                    <p className="pill-text">Random Forest</p>
                    <p className="pill-text">Extra Trees</p>
                    <p className="pill-text">ResNet-50</p>
                    <p className="pill-text">VGG-16</p>
                    <p className="pill-text">HuBERT</p>
                    <p className="pill-text">Wav2Vec2</p>
                  </div>
                <div className="flex flex-row items-center justify-center gap-4">
                  <Link
                      href="https://github.com/jamesgitt"
                      className="navText flex items-center justify-center transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >          
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="45"
                        height="45"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        clipRule="evenodd"
                        viewBox="0 0 64 64"
                      >
                        <path id="Icons" fill="none" d="M0-192h1280v800H0z"></path>
                        <g id="Icons1">
                          <path
                            id="github"
                            fill="#740000"
                            d="M32.029 8.345C18.759 8.345 8 19.104 8 32.378c0 10.617 6.885 19.624 16.435 22.803 1.202.22 1.64-.522 1.64-1.16 0-.569-.02-2.081-.032-4.086-6.685 1.452-8.095-3.222-8.095-3.222-1.093-2.775-2.669-3.514-2.669-3.514-2.182-1.492.165-1.462.165-1.462 2.412.171 3.681 2.477 3.681 2.477 2.144 3.672 5.625 2.611 6.994 1.997.219-1.553.838-2.612 1.526-3.213-5.336-.606-10.947-2.669-10.947-11.877 0-2.623.937-4.769 2.474-6.449-.247-.608-1.072-3.051.235-6.36 0 0 2.018-.646 6.609 2.464 1.917-.533 3.973-.8 6.016-.809 2.041.009 4.097.276 6.017.809 4.588-3.11 6.602-2.464 6.602-2.464 1.311 3.309.486 5.752.239 6.36 1.54 1.68 2.471 3.826 2.471 6.449 0 9.232-5.62 11.263-10.974 11.858.864.742 1.632 2.208 1.632 4.451 0 3.212-.029 5.804-.029 6.591 0 .644.432 1.392 1.652 1.157 9.542-3.185 16.421-12.186 16.421-22.8 0-13.274-10.76-24.033-24.034-24.033"
                          ></path>
                        </g>
                      </svg>
                      <span>Code</span>
                    </Link>

                    <Link
                      href="https://github.com/jamesgitt"
                      className="navText flex items-center justify-center transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >          
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" id="" fill="#740000" className="size-10">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                      </svg>
                      <span>Research</span>
                    </Link>
                </div>
              </div>
            </div>
          </div> 

      </main>
    );
  }
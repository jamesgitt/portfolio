import '../styles/contacts.css'

import CurrentTime from "../components/CurrentTime";

import Link from "next/link";
import '../globals.css'


export default function Contacts() {
    return (
        <main className="flex flex-col pb-96 min-h-screen">

        <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-start justify-start mr-[12rem]">
                    <h1 className="text-8xl font-bold mb-4 text-left">Hi Visitor, it's</h1>
                    {(() => {
                        const now = new Date();
                        const options: Intl.DateTimeFormatOptions = {
                            timeZone: 'Asia/Manila',
                            hour: '2-digit',
                            hour12: false,
                        };
                        const hourStr = now.toLocaleString('en-PH', options);
                        const hour = parseInt(hourStr, 10);

                        if (hour >= 10 && hour < 22) {
                            return (
                                <>
                                    <span className="text-left text-4xl font-semibold text-red-900"> <CurrentTime className="text-left text-4xl font-semibold text-red-900"/> where I'm from!</span>
                                    <div className="text-left text-2xl mt-2 text-green-700 font-semibold"> <span className="text-2xl mt-2 text-black font-semibold">Reach me however you like, </span>I'm available right now!</div>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <CurrentTime className="text-left text-4xl font-semibold text-red-900"/>
                                    <div className="text-left text-2xl mt-2 text-yellow-600 font-semibold"> <span className="text-2xl mt-2 text-black font-semibold">Reach me however you like, </span>I'm probably not available right now though.</div>
                                </>
                            );
                        }
                    })()}
                </div>



            <div className="flex flex-row gap-24">

                
                <div className="flex flex-row items-start justify-start">
                    <form
                        className="flex flex-col gap-4 mt-8 contactCard"
                        action="https://formsubmit.co/jamescareermail@gmail.com"
                        method="POST"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
                        <label className="formLabel" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="inputContact"
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                        />

                        <label className="formLabel" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="inputContact"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="your@email.com"
                        />

                        <label className="formLabel" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="inputMessage"
                            id="message"
                            name="message"
                            required
                            placeholder="Type your message here..."
                        />

                        <button
                            type="submit"
                            className="buttonCommon buttonText mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="flex flex-col items-end justify-end gap-4 mt-72">

                  <div className="flex flex-col items-end justify-end pr-1 gap-4">
                    <span className="reachMeHeader">Reach out and let's work</span>  
                    
                    <span className="reachMeText flex flex-row items-center justify-center gap-2">
                      Pasig City, Philippines
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#740000" className="size-9">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                      </svg>
                    </span>

                    <span className=" reachMeText flex flex-row items-center justify-center gap-2">
                      jamescareermail@gmail.com
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#740000" className="size-9">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </span>

                  </div>

                  <div className="flex flex-col items-end justify-end gap-4">
                    <Link
                      href="https://github.com/jamesgitt"
                      className="reachMeRe flex items-center gap-2 justify-center transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>github.com/jamesgitt</span>
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
                    </Link>
                    
                    <Link
                      href="https://www.linkedin.com/in/james-errol-concepcion-275740358/"
                      className="reachMeRe flex items-center justify-center gap-2 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>linkedin.com/in/jamesconcepcion</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          id="SVGRepo_iconCarrier"
                          fill="#740000"
                          d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032s1.031.466 1.032 1.032c0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.88.88 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
            </div>

        </div>

        </main>
    );
}
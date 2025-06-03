"use client"
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './NavigationMenu';
import '../styles/navbar.css'
import TypingText from './TypingText';

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let lastKnownScrollY = window.scrollY;

    // Set initial style
    nav.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (lastKnownScrollY > lastScrollY.current && lastKnownScrollY > 10) {
            // Scrolling down, hide navbar
            nav.style.transform = 'translateY(-100%)';
          } else {
            // Scrolling up, show navbar
            nav.style.transform = 'translateY(0)';
          }
          lastScrollY.current = lastKnownScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="navBackdrop h-[8rem] m-0 grid lg:grid-cols-3 fixed left-0 right-0 w-full top-0 z-50 transition-transform duration-500"
    >

      <div className="ml-[4rem] flex flex-row w-full items-center max-w-32 mx-auto">
        {/* Branding section */}
        <TypingText text="Get to know me" className="typingNavText font-semibold"/>
        <span className="h-12 w-1 border-solid border-x-2 mx-2 border-red-900"></span>
        <p className="logoNavText font-black ">JAMES</p>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div>
          <NavigationMenu orientation="horizontal" className="gap-x-4">
            <div className="flex flex-1">
              <NavigationMenuList className="flex flex-row gap-12">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#Home"
                      scroll={true}
                      className="navText flex transition-colors duration-200"
                    >
                        <span className="navText">Home</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#About"
                      scroll={true}
                      className="navText flex transition-colors duration-200"
                    >
                        <span className="navText">About</span> 
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#Projects"
                      className="navText flex transition-colors duration-200"
                    >
                        <span className="navText">Projects</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#Skills"
                      className="navText flex transition-colors duration-200"
                    >
                        <span className="navText">Skills</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#Contacts"
                      className="navText flex transition-colors duration-200"
                    >
                        <span className="navText">Contacts</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end mr-[4rem]">            
            <NavigationMenu orientation="horizontal">
              <NavigationMenuList className="flex flex-row" >
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://github.com/jamesgitt"
                      className="navText flex transition-colors duration-200"
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
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="https://www.linkedin.com/in/james-errol-concepcion-275740358/"
                      className="navText flex transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >          
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
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
      </div>
    </nav>
  );
}
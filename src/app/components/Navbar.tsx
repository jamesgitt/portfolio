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
      style={{ fontFamily: 'Cambria, serif', transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
      className="navBackdrop backdrop-blur-sm p-2 flex flex-row items-center justify-between fixed top-0 left-0 w-full z-50"
    >
      <div className="flex flex-row w-full items-center max-w-6xl mx-auto">
        {/* Branding section */}
          <TypingText text="Get to know me" className="text-xl text-red-50 items-center"/>
          <span className="h-10 w-1 border-solid border-x-2 mx-2 border-red-50"></span>
          <p className="text-red-50 text-5xl font-bold">JAMES</p>
      </div>
      <div>
        {/* Navigation links */}
        <div className="border-solids drop-shadow-md rounded-lg flex flex-row items-center justify-center space-x-4 py-2 px-4 mx-0">
          <NavigationMenu orientation="horizontal">
            <NavigationMenuList className="flex flex-row items-center justify-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#top"
                    scroll={true}
                    className="navText flex transition-colors duration-200"
                    style={{ fontFamily: 'Cambria, serif' }}
                  >
                    <span role="img" aria-label="Home" className="navText mt-2">

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox= "0 0 24 24" fill="currentColor" className="size-10">
                        <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                        <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                      </svg>

                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#about"
                    scroll={true}
                    className="navText flex transition-colors duration-200"
                    style={{ fontFamily: 'Cambria, serif' }}
                  >
                    <span role="img" aria-label="Home" className="navText mt-2">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                      <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                    </svg>

                    </span>                    
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contacts"
                    className="navText flex transition-colors duration-200 hover:bg-red-700/60"
                    style={{ fontFamily: 'Cambria, serif' }}
                  >
                    <span role="img" aria-label="Contact" className="navText mt-2">
                    
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="size-10">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>

                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
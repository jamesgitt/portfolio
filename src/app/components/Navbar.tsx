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
      className="bg-red-100 bg-opacity-5 backdrop-blur-sm shadow p-2 flex flex-row items-center justify-between fixed top-0 left-0 w-full z-50"
    >
      <div className="flex flex-row w-full items-center justify-between max-w-6xl mx-auto">
        {/* Branding section */}
        <div className="flex flex-row items-center space-x-4 ml-0 mr-auto">
          <TypingText text="Get to know me" className="text-xl text-white items-center"/>
          <span className="h-10 w-1 border-solid border-x-2 border-white"></span>
          <p className="text-white text-3xl font-bold">JAMES</p>
        </div>
        {/* Navigation links */}
        <div className="bg-red-700 border-solids drop-shadow-md rounded-lg flex flex-row items-center justify-center space-x-4 py-2 px-4 mx-0">
          <NavigationMenu orientation="horizontal">
            <NavigationMenuList className="flex flex-row items-center justify-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#top"
                    scroll={true}
                    className="colNavHome flex items-center gap-2 px-4 py-2 min-w-[120px] min-h-[36px] text-white text-base font-serif transition-colors duration-200 hover:bg-red-800/60 hover:text-red-200 focus:text-red-300 rounded-lg text-left shadow-sm"
                    style={{ fontFamily: 'Cambria, serif' }}
                  >
                    <span role="img" aria-label="Home" className="text-xl">🏠</span>
                    <span>Home</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#about"
                    scroll={true}
                    className="colNav flex items-center gap-1 px-2 py-1 w-full text-white text-sm font-serif transition-colors duration-200 hover:bg-red-700/60 hover:text-red-200 focus:text-red-300 rounded text-left"
                    style={{ fontFamily: 'Cambria, serif' }}
                  >
                    <span role="img" aria-label="About" className="text-base">👤</span>
                    <span>About</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contacts"
                    className="colNav flex items-center gap-1 px-2 py-1 w-full text-white text-sm font-serif transition-colors duration-200 hover:bg-red-700/60 hover:text-red-200 focus:text-red-300 rounded text-left"
                    style={{ fontFamily: 'Cambria, serif' }}
                  >
                    <span role="img" aria-label="Contact" className="text-base">✉️</span>
                    <span>Contact</span>
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
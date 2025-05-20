import Link from 'next/link';
import TypingText from './TypingText';

export default function Navbar() { 
    return (
      <nav className="bg-red-100 bg-opacity-5 backdrop-blur-sm shadow p-4 flex justify-between">
        <div className="flex items-center space-x-2">
          <p className="font-serif text-lg font-bold">Hello, I am James</p>
          <span className="mx-2 text-black font-bold text-3xl">|</span>
          <TypingText text="Get to know me" />
        </div>
        <div className="bg-red-900 h-12 border-solid border-black border-2 drop-shadow-md rounded-xl flex items-center space-x-6">
          <Link href="/" className="text-lg text-white hover:font-bold font-serif pl-4">Home</Link>
          <Link href="/about" className="text-lg text-white hover:font-bold font-serif">About</Link>
          <Link href="/projects" className="text-lg text-white hover:font-bold font-serif">Projects</Link>
          <Link href="/contacts" className="text-lg text-white hover:font-bold font-serif">Contact</Link>
          <Link href="/skills" className="text-lg text-white hover:font-bold font-serif pr-4">Skills</Link>
        </div>
      </nav>
    );
  }
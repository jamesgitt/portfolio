import Link from 'next/link';
import TypingText from './TypingText';

export default function Navbar() {
    return (
      <nav className="bg-red-100 bg-opacity-5 backdrop-blur-sm shadow p-4 flex justify-between">
        <div className="flex items-center space-x-2">
          <p className="font-serif text-xl">Hello, I am James</p>
          <span className="mx-2 text-black font-bold text-3xl">|</span>
          <TypingText text="Get to know me" />
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-lg text-black hover:font-bold font-serif">Home</Link>
          <Link href="/about/About" className="text-lg text-black hover:font-bold font-serif">About</Link>
          <Link href="/projects/Projects" className="text-lg text-black hover:font-bold font-serif">Projects</Link>
          <Link href="/contacts/Contacts" className="text-lg text-black hover:font-bold font-serif">Contact</Link>
          <Link href="/skills/Skills" className="text-lg text-black hover:font-bold font-serif">Skills</Link>
        </div>
      </nav>
    );
  }
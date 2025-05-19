import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="bg-red-100 bg-opacity-5 backdrop-blur-sm shadow p-4 flex justify-between">
        <span className="font-bold text-xl">My Portfolio</span>
        <div>
          <Link href="/" className="mx-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/pages/About" className="mx-2 text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/pages/Projects" className="mx-2 text-gray-700 hover:text-blue-600">Projects</Link>
          <Link href="/pages/Contacts" className="mx-2 text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/pages/Skills" className="mx-2 text-gray-700 hover:text-blue-600">Skills</Link>
        </div>
      </nav>
    );
  }
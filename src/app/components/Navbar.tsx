export default function Navbar() {
    return (
      <nav className="bg-white shadow p-4 flex justify-between">
        <span className="font-bold text-xl">My Portfolio</span>
        <div>
          <a href="/" className="mx-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="/About" className="mx-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="/Projects" className="mx-2 text-gray-700 hover:text-blue-600">Projects</a>
          <a href="/Contact" className="mx-2 text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </nav>
    );
  }
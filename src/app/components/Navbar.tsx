export default function Navbar() {
    return (
      <nav className="bg-red-100 bg-opacity-5 backdrop-blur-sm shadow p-4 flex justify-between">
        <span className="font-bold text-xl">My Portfolio</span>
        <div>
          <a href="/" className="mx-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="pages/About" className="mx-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="pages/Projects" className="mx-2 text-gray-700 hover:text-blue-600">Projects</a>
          <a href="pages/Contacts" className="mx-2 text-gray-700 hover:text-blue-600">Contact</a>
          <a href="pages/Skills" className="mx-2 text-gray-700 hover:text-blue-600">Skills</a>
        </div>
      </nav>
    );
  }
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className=" flex justify-between items-center mx-14">
        <div className="text-white text-lg font-bold">
          <Link to="/">sem nome</Link>
        </div>

        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

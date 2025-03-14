import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-orange-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Burger Queen</h1>

                <nav className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/service" className="hover:text-gray-300">Services</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>

                <button 
                    className="md:hidden text-white text-2xl" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <nav 
                className={`fixed top-16 left-0 w-full bg-orange-600 p-4 transition-transform duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
            >
                <ul className="flex flex-col space-y-4 text-center">
                    <li><Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/service" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

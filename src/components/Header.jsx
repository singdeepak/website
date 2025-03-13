import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-orange-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Burger Queen</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/service" className="hover:text-gray-300">Services</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

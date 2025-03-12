export default function Header() {
    return (
        <header className="bg-orange-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">PUMA</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

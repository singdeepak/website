import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    const [hero, setHero] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHero(prevHero => {
                const currentIndex = images.indexOf(prevHero);
                return images[(currentIndex + 1) % images.length];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${hero})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
                <p className="text-lg mt-2">Discover amazing burger flavour from us.</p>
                <Link to="/service" className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-700 rounded-lg">Get Started</Link>
            </div>
        </section>
    );
}

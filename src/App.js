import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Service />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App;
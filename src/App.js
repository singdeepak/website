import React from 'react';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Layout>
        </Router>
    )
}

export default App;
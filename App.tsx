import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleSection from './components/VehicleSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      <Navbar />
      <Hero />
      <VehicleSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Value } from './components/Value';
import { Contact } from './components/Contact';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#01C853] selection:text-black font-sans">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <Journey />
        <Value />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
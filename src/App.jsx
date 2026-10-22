import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import TrainingAchievements from './components/TrainingAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative">
      <Navbar />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Project-First Strategy: Projects immediately follow Hero */}
        <Projects />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. About Section */}
        <About />

        {/* 5. Education Timeline */}
        <Education />

        {/* 6. Training, Leadership and Achievements */}
        <TrainingAchievements />

        {/* 7. Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
  }, []);

  return (
    <Router>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white font-sans transition-colors duration-300 min-h-screen">
        <main className="max-w-5xl mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <About />
                  <Experience />
                  <TechStack />
                  <Projects />
                  <Contact />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { TopBar } from './components/TopBar';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-500">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[rgba(217,108,79,0.14)] blur-3xl dark:bg-[rgba(123,212,192,0.12)]" />
          <div className="absolute right-[-4rem] top-[18rem] h-96 w-96 rounded-full bg-[rgba(36,122,101,0.14)] blur-3xl dark:bg-[rgba(67,97,238,0.16)]" />
          <div className="absolute inset-x-0 top-[10rem] h-[28rem] bg-gradient-to-b from-white/10 to-transparent dark:from-white/5" />
        </div>

        <main className="page-shell">
          <Routes>
            <Route
              path="/"
              element={
                <div className="space-y-5 sm:space-y-6 lg:space-y-7">
                  <TopBar />
                  <HeroSection />
                  <About />
                  <Experience />
                  <TechStack />
                  <Projects />
                  <Contact />
                  <footer className="px-2 py-4 text-center text-sm text-[var(--color-muted)]">
                    Designed and built by Ralph E. Eco with a focus on clean UI,
                    strong engineering fundamentals, and recruiter-ready
                    presentation.
                  </footer>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

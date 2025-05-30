import { ThemeToggle } from './ThemeToggle';

export const HeroSection = () => (
  <section data-aos="fade-up"
    className="relative px-6 py-12 mb-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    id="hero"
  >
    {/* Theme Toggle - Positioned Top Right */}
    <div className="absolute top-4 right-4">
      <ThemeToggle />
    </div>

    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-fade-in">
      {/* Profile Image Box */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-md bg-gray-200 dark:bg-gray-700 ring-2 ring-transparent hover:ring-black dark:hover:ring-white transition-all duration-300 ease-in-out cursor-pointer">
        <img
          src="/formal2.png"
          alt="Profile photo of Ralph E. Eco"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Ralph E. Eco
        </h2>
        <p className="mt-1 text-gray-800 dark:text-gray-300 text-lg md:text-xl">
          Full-stack Developer | Passionate Coder | Lifelong Learner | Problem Solver
        </p>

        {/* Location */}
        <div className="flex items-center mt-3 text-black dark:text-gray-300 text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 4.418 3.582 8 8 8z"
            />
          </svg>
          <span>Parañaque City, Philippines</span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="px-5 py-2 bg-black dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 text-white rounded-md shadow-md transition-colors duration-300"
          >
            Call Me
          </a>
          <a
            href="mailto:ralpheco6@gmail.com?subject=Hello Ralph&body=I would like to connect with you."
            className="px-5 py-2 border border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-600 hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-md shadow-md transition-colors duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>

    {/* Fade-in Animation */}
    <style>{`
      .animate-fade-in {
        opacity: 0;
        animation: fadeInAnim 0.8s ease forwards;
      }
      @keyframes fadeInAnim {
        to {
          opacity: 1;
        }
      }
    `}</style>
  </section>
);

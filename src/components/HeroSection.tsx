// components/HeroSection.tsx
export const HeroSection = () => (
  <section className="ml-10 py-15 mt-10 bg-white" id="hero">
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 animate-fade-in">
      {/* Profile Image Box */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-md bg-gray-200 ring-2 ring-transparent hover:ring-black transition-all duration-300 ease-in-out cursor-pointer">
        <img
          src="/public/mypic.jpg"
          alt="Profile of Ralph E. Eco"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Ralph E. Eco
        </h2>
        <p className="mt-1 text-gray-600 text-lg md:text-xl">
          Full-stack Developer | Passionate Coder | Lifelong Learner | Problem Solver
        </p>

        {/* Location */}
        <div className="flex items-center mt-3 text-black text-sm md:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
            focusable="false"
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

        <div className="mt-6 flex justify-center md:justify-start gap-4">
        <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a call with Ralph"
            className="px-5 py-2 bg-black hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-white rounded-md shadow-md transition-colors duration-300 text-center"
        >
            Schedule a Call
        </a>
        <a
            href="mailto:ralpheco6@gmail.com?subject=Hello Ralph&body=I would like to connect with you."
            aria-label="Send email to Ralph"
            className="px-5 py-2 border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 rounded-md shadow-md transition-colors duration-300 text-center"
        >
            Send Email
        </a>
        </div>
      </div>
    </div>

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

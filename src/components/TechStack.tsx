export const TechStack = () => {
  const frontend = ["HTML5", "CSS3", "JavaScript", "ReactJS", "NextJS", "Flutter"];
  const backend = ["PHP", "Laravel", "Python", "Dart", "Java", "C#", "Firebase", "Supabase", "PostgreSQL", "MySQL"];
  const tools = ["Git", "VSCode", "Visual Studio", "Discord","Github"];

  return (
    <section
      className="p-6 mt-4 mb-4 mx-4 bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
      id="tech"
    >
      <div className="p-4 space-y-6 rounded-lg bg-white">
        <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>

        {/* Frontend */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Frontend</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {frontend.map((tech, i) => (
              <span
                key={tech}
                className="typing-animation bg-gray-200 px-4 py-2 rounded monospace"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Backend</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {backend.map((tech, i) => (
              <span
                key={tech}
                className="typing-animation bg-gray-200 px-4 py-2 rounded monospace"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Tools & APIs</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {tools.map((tech, i) => (
              <span
                key={tech}
                className="typing-animation bg-gray-200 px-4 py-2 rounded monospace"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Typing animation styles */}
      <style>{`
        .typing-animation {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid black; /* caret */
          font-family: monospace;
          animation:
            typing 1.5s steps(20, end) forwards,
            blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          0%, 100% {
            border-color: transparent;
          }
          50% {
            border-color: black;
          }
        }
      `}</style>
    </section>
  );
};

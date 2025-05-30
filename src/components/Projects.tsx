export const Projects = () => {
  const projects = [
    {
      title: "Marketing Automation Platform (Capstone Project)",
      tech: "Laravel, MySQL",
      description: "An admin dashboard for creating and managing marketing campaigns.",
      highlights: "Full CRUD, campaign analytics, Laravel MVC.",
      link: "https://aicsmarketing.online/",
    },
    {
      title: "Bebetime – Web App",
      tech: "ReactJS, Python, Flask, TypeScript, WebRTC",
      description: "A video-sharing and screen-sharing platform for virtual movie nights and calls.",
      highlights: "Google Sign-In, room creation, real-time chat, screen sharing.",
    },
    {
      title: "Beyblade Mobile App",
      tech: "Flutter",
      description:
        "A tournament-based mobile application for Beyblade enthusiasts. Users can view upcoming tournaments, check player rankings (via the Challonge API), and manage tournament schedules.",
      highlights:
        "Tournament scheduling, live ranking integration, Challonge API usage, smooth and responsive UI.",
    },
    {
      title: "Smart Glove (Thesis Project)",
      tech: "Flutter, Arduino, CNN (ML)",
      description:
        "A wearable device that translates hand gestures into speech/text for mute users.",
      highlights:
        "CNN gesture recognition, Bluetooth data sync, emotional speech synthesis.",
    },
  ];

  return (
    <section
className="p-6 text-justify mt-4 mb-4 mx-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition duration-300"
      id="projects"
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Projects</h3>
      <div className="space-y-4">
        {projects.map((project, i) => {
          const content = (
            <div
      className="border border-gray-300 dark:border-gray-700 p-4 rounded transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800"
              style={{ animationDelay: `${i * 0.3}s`, animationFillMode: "forwards" }}
            >
            <h4 className="font-bold text-gray-800 dark:text-gray-300">{project.title}</h4>
              <p className="text-sm text-gray-800 dark:text-gray-300 mb-2 italic">
                Tech Stack: {project.tech}
              </p>
              <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
              <p className="mt-2 text-sm text-gray-800 dark:text-gray-300">
                <strong>Highlights:</strong> {project.highlights}
              </p>
            </div>
          );

          return project.link ? (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={project.title}>{content}</div>
          );
        })}
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
        div[style] {
          opacity: 0;
          animation-name: fadeInAnim;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

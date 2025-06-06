export const Experience = () => (
  <section data-aos="fade-up" data-aos-delay="200"
className="p-6 mt-4 mb-4 mx-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition duration-300"
    id="experience"
  >
    <div className="p-4 space-y-2 rounded-lg bg-white dark:bg-gray-800 animate-fade-in transition-colors duration-300">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Experience</h3>
      <ul className="space-y-6">

        {/* DevOps Internship */}
        <li>
          <strong className="text-lg text-gray-800 dark:text-gray-200">
            DevOps Engineer Intern
          </strong> – Blackbeard Talent Agency (Jun – Aug 2024)
          <ul className="mt-2 list-disc text-justify list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Built a full-stack mobile app using Flutter for BeybladeX tournament management.</li>
            <li>Designed core features including a community hub, ELO-based player ranking system, and automated tournament brackets via Challonge API.</li>
            <li>Configured CI/CD pipelines for cross-platform deployment (iOS/Android).</li>
            <li>Managed real-time data sync and cloud infrastructure using Firebase and Ngrok.</li>
            <li>Implemented secure authentication and role-based access control.</li>
          </ul>
        </li>

      </ul>
    </div>
  </section>
);

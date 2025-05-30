export const About = () => (
  <section
    className="p-6 mx-4 bg-white rounded-lg"
    id="about"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* About Card */}
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">About</h3>
        <p className="text-gray-700">
          I’m a recent Bachelor of Science in Computer Science graduate with a strong foundation in full-stack development and a passion for creating intuitive and impactful applications. 
          I specialize in building responsive web and mobile experiences using technologies like React, Flutter, TypeScript, and Laravel.
          I enjoy turning ideas into code and continuously learning new tools to grow as a developer.
        </p>
      </div>

      {/* Achievements Card */}
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achievements</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Best Programmer Award</strong> – 2025</li>
          <li><strong>Best in Thesis Award</strong> – 2025</li>
          <li>
            <strong>Speakify</strong>: A Smart Glove and Mobile App for Real-Time Gesture-to-Speech Translation and Emotional Expression
          </li>
        </ul>
      </div>

    </div>
  </section>
);

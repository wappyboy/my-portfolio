import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export const Contact = () => {
  const email = "ralpheco6@gmail.com";
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/wappywapp2/",
      icon: <FaFacebook />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ralph-eco-44b138284/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/wappyboy",
      icon: <FaGithub />,
    },
  ];

  return (
    <section className="p-6 mx-4 bg-white dark:bg-gray-900 rounded-lg" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Contact Card */}
        <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
          <div className="inline-block bg-gray-100 dark:bg-gray-700 shadow rounded px-4 py-2 mb-2">
            <p>
              Email me at:{' '}
              <a
                href={`mailto:${email}`}
                className="text-black dark:text-white hover:underline"
                aria-label="Send email"
              >
                {email}
              </a>
            </p>
          </div>
          <div className="inline-block bg-gray-100 dark:bg-gray-700 shadow rounded px-4 py-2 mb-2">
            <p>
              Phone:{' '}
              <a
                href="tel:+639517065600"
                className="text-black dark:text-white hover:underline"
                aria-label="Call phone number"
              >
                +639517065600
              </a>
            </p>
          </div>
          <p className="text-gray-800 dark:text-gray-300">
            If you want to contact me, feel free to reach out anytime!
          </p>
        </div>

        {/* Social Media Card */}
        <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Social Media</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 bg-gray-100 dark:bg-gray-700 shadow rounded-lg px-4 py-4 text-2xl sm:text-3xl text-gray-900 dark:text-white">
            {socials.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${name}`}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-900 hover:bg-black hover:text-white transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

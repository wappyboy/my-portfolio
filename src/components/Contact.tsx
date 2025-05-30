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
   <section className="p-6 mx-4 bg-white rounded-lg" id="contact">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Contact Card */}
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h3>
      <div className="inline-block bg-gray-100 shadow rounded px-4 py-2 mb-2">
        <p>
          Email me at:{' '}
          <a
            href={`mailto:${email}`}
            className="text-black hover:underline"
            aria-label="Send email"
          >
            {email}
          </a>
        </p>
      </div>
      <div className="inline-block bg-gray-100 shadow rounded px-4 py-2 mb-2">
        <p>
          Phone:{' '}
          <a
            href="tel:+639517065600"
            className="text-black hover:underline"
            aria-label="Call phone number"
          >
            +639517065600
          </a>
        </p>
      </div>
      <p>If you want to contact me, feel free to reach out anytime!</p>
    </div>

    {/* Social Media Card */}
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Social Media</h3>
      <div className="flex justify-center space-x-20 bg-gray-100 shadow rounded-lg px-8 py-4 text-3xl text-gray-900">
        {socials.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${name}`}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-black hover:text-white transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Get in Touch with Us
          </h1>
          <p className="mt-2 text-gray-600">
            Have questions? We{"'"}re here to help! Reach out through the form
            or our social media.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Follow Us</h2>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="#"
              className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.87236859685!2d106.79339527506153!3d-6.28050509370833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ed49e2abf9%3A0x2af9f496b275ba53!2sPT.%20Nusantara%20Star%20Conect!5e0!3m2!1sid!2sid!4v1735024063067!5m2!1sid!2sid"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Astrology Application. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/saketrajabhishek/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="Visit my GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/saketabhishek"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="Visit my LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:saketrajabhishek@gmail.com"
            className="hover:text-blue-500 transition-colors"
            aria-label="Send me an email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="mt-4 text-sm">
          <p>Designed and built by Saket Abhishek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

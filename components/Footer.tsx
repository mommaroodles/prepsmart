import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="w-full bg-background border-t border-dark-300 fixed bottom-0 left-0 z-50">
        <div className="flex flex-col md:flex-row justify-center items-center sm:text-left px-6 py-4 space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <p className="text-light-300">
            © 2024 - {currentYear} PrepSmart - All Rights Reserved.
          </p>

          <Link
            href="./privacy-policy"
            target="_blank"
            className="text-light-300 hover:text-primary-100 transition-colors"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </Link>


          <div className="flex flex-row items-center space-x-4">
            <Link
              href="https://wa.me/27622742989"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-light-300 hover:text-primary-100 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} className="text-green-600" />
            </Link>

            <Link
              href="https://github.com/mommaroodles"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-light-300 hover:text-primary-100 transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={22} className="text-white" />
            </Link>
          </div>
        </div>
      </footer >
    </>
  );
};

export default Footer;

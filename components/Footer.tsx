import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark-100 border-t border-dark-300 fixed bottom-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <p className="text-light-300 text-sm">
          © {currentYear} PrepSmart. All Rights Reserved.
        </p>

        <Link
          href="https://github.com/mommaroodles"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-300 hover:text-primary-100 transition-colors"
          aria-label="GitHub Repository"
        >
          <FaGithub size={24} color="white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 transition-colors backdrop-blur-lg dark:border-gray-700 py-4 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-md size-8 "
            />
            <h2 className="text-xl font-semibold dark:text-white">Cloud SMS BD</h2>
          </div>

          {/* Copyright */}
          <p className="mt-2 sm:mt-0 text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Links */}
          <div className="mt-4 sm:mt-0">
            <Link
              href="https://www.facebook.com/fb.cloudsmsbd"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="hover:underline">Follow us on Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 transition-colors backdrop-blur-lg dark:border-gray-700 py-3 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={50}
                height={50}
                className="rounded-md"
              />
              <span>Cloud Sms BD</span>
            </h2>
          </div>

          <p className="mt-2 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="w-full sm:w-auto mt-4 sm:mt-0 flex items-center space-x-2">
            <Link
              href="https://www.facebook.com/fb.cloudsmsbd"
              target="_blank"
              rel="noreferrer"
              className="dark:text-gray-400 dark:hover:text-gray-500 flex items-center space-x-2"
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

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
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

          <p className="mt-2 text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <div className="w-full sm:w-auto mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold underline underline-offset-4">
              Contact Us
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

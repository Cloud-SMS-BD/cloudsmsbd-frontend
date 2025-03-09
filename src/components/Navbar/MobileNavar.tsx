import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const MobileNavbar = ({ navItems }: { navItems: any }) => {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="md:hidden block cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-black dark:invert"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent side="top" className="bg-white dark:bg-gray-800">
        {/* Header & Profile Section */}
        <div className="flex flex-col items-center">
          <SheetHeader className="text-center">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="text-gray-500 dark:text-gray-400">
              Explore the site
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Nav Items */}
        <ul className="space-y-4 p-4">
          {navItems.map((item: any, index: any) => (
            <li key={index}>
              <SheetTrigger asChild>
                <Link
                  href={item.link}
                  className="flex truncate font-semibold items-center space-x-2 cursor-pointer hover:underline"
                >
                  {item.icon} <span>{item.name}</span>
                </Link>
              </SheetTrigger>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

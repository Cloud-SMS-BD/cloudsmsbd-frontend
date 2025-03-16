"use client";
import Profile from "@/components/Profile/Profile";
import { selectIsLogin } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import {
  BookOpenIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LogInIcon,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle2 } from "../ui/ModeToggle2";
import MobileNavbar from "./MobileNavar";

const Navbar = () => {
  const isLogin = useAppSelector(selectIsLogin);
  const navItems = [
    { name: "Home", link: "/", icon: <HomeIcon size={18} /> },
    ...(isLogin
      ? [
          {
            name: "Dashboard",
            link: "/dashboard",
            icon: <LayoutDashboardIcon size={18} />,
          },
        ]
      : []),
    {
      name: "API Documentation",
      link: `${isLogin ? "/dashboard/doc/api-guide" : "/documentation"}`,
      icon: <BookOpenIcon size={18} />,
    },
  ];

  return (
    <nav className="z-50 bg-opacity-30 backdrop-blur-lg sticky top-0 p-4 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 transition-colors">
      <div className="container mx-auto flex items-center justify-between lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <MobileNavbar navItems={navItems} />
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="logo"
              className="rounded-full md:block hidden size-8 md:size-12 border-2 border-sky-500"
              width={50}
              height={50}
            />
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
              Cloud <span className="text-sky-500">SMS BD</span>
            </p>
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="hover:underline flex items-center space-x-1 font-semibold"
              >
                {item.icon} <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Login || Profile || MobileNav */}
        <div className="flex items-center space-x-4">
          <ModeToggle2 />
          {isLogin ? (
            <Profile />
          ) : (
            <Link href="/auth/login">
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-sky-500 text-white py-[6.5px] px-6">
                <LogInIcon size={16} />
                <span>Login</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

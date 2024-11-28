import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActivePage = (path: string) => {
    return location.pathname === path ? "text-black font-bold" : "text-gray";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-6 bg-gradient-to-b from-primary to-gradient shadow-md">
      <div className="flex items-center">
        <Logo className="px-2 sm:px-4 py-1" />
      </div>

      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
        <a
          href="/"
          className={`${isActivePage("/")} hover:text-black font-bold`}
        >
          Home
        </a>
        <a
          href="/contact"
          className={`${isActivePage("/contact")} hover:text-black font-bold`}
        >
          Contact
        </a>
        <a
          href="/faq"
          className={`${isActivePage("/services")} hover:text-black font-bold`}
        >
          FAQ
        </a>
        <a
          href="/login"
          className={`${isActivePage("/services")} hover:text-black font-bold`}
        >
          Login
        </a>
        <a href="/account">
          <UserCircleIcon className="size-6 text-black" />
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-black font-bold"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="/"
              className={`${isActivePage("/")} hover:text-black font-bold`}
            >
              Home
            </a>
            <a
              href="/contact"
              className={`${isActivePage("/contact")} hover:text-black font-bold`}
            >
              Contact
            </a>
            <a
              href="/faq"
              className={`${isActivePage("/services")} hover:text-black font-bold`}
            >
              FAQ
            </a>
            <a
              href="/login"
              className={`${isActivePage("/services")} hover:text-black font-bold`}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

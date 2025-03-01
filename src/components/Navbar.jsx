import { Link } from "react-router-dom"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import DarkModeChanger from "./DarkMode.jsx";
import LanguageSwitcher from "../context/LanguageSwitcher.jsx";

const Navbar = () => {

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-900 shadow-md flex justify-between items-center ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left: Logo */}
        <Link to="/?category=general" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
          NewsX
        </Link>

        {/* hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        {/* Middle: Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/?category=general" className="nav-lin font-semibold text-xl dark:text-gray-200">
          {t("navbar.home")}
          </Link>
          <Link to="/?category=world" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.world")}
          </Link>
          <Link to="/?category=technology" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.technology")}
          </Link>
          <Link to="/?category=sports" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.sports")}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <DarkModeChanger />
          <LanguageSwitcher />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center space-y-6">
          <Link to="/?category=general" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.home")}
          </Link>
          <Link to="/?category=world" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.world")}
          </Link>
          <Link to="/?category=technology" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.technology")}
          </Link>
          <Link to="/?category=sports" className="nav-link font-semibold text-xl dark:text-gray-200">
          {t("navbar.sports")}
          </Link>

          <div className="flex items-center space-x-4">
          <DarkModeChanger />
          <LanguageSwitcher />
        </div>

        </div>
      )}
        {/* Right: Dark Mode & Language Switch */}
    </nav>
  );
};

export default Navbar;


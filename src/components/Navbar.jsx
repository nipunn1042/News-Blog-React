import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";
import DarkModeChanger from "./DarkMode.jsx";
import LanguageSwitcher from "../context/LanguageSwitcher.jsx";

const Navbar = () => {

  const { t } = useTranslation();

  return (
    <nav className="p-4 bg-gray-100 dark:bg-gray-900 shadow-md flex justify-between items-center ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left: Logo */}
        <Link to="/?category=general" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
          NewsX
        </Link>

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

        {/* Right: Dark Mode & Language Switch */}
        <div className="flex items-center space-x-4">
          <DarkModeChanger />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


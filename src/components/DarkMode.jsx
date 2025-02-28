import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeChanger = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
                <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
    </button>
  );
};

export default DarkModeChanger;

{/* <button
              onClick={() => setDarkMode(!darkMode)
              className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
            </button> */}
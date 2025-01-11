import { FaSun, FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Heading */}
        <div className="flex items-center space-x-4">
          <HiSun className="text-3xl text-orange-600 dark:text-orange-300" />
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">
            Astrology with Saket
          </h1>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

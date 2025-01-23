import { useState } from "react";
import logo from "../../assets/logo.svg";

const transitions = {
  hu: {
    pricing: "Árlista",
  },
  ro: {
    pricing: "Preturi",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("ro");
  const t = transitions[lang];

  return (
    <nav className="container mx-auto rounded relative">
      <div className="px-4 rounded flex items-center justify-between h-16 w-full relative z-50 bg-gray-800">
        {/* Logo / Language Selector */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img className="h-6 w-6" src={logo} alt="logo" />
            <span className="text-lg font-bold text-white">rhard DevLab</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors"
          >
            {t.pricing}
          </a>
        </div>

        {/* Language Selector */}
        <button
          onClick={() => setLang(lang === "hu" ? "ro" : "hu")}
          className="px-2 py-1 text-sm rounded text-white hover:text-black transition-colors border border-gray-600"
        >
          {lang.toUpperCase()}
        </button>

        {/* Hamburger Button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white transition-all duration-300 relative h-8 w-8 flex items-center justify-center"
          >
            <svg
              className={`h-6 w-6 text-gray-400 transition-all duration-300 ease-in-out transform absolute ${
                isOpen
                  ? "opacity-0 scale-90 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 text-gray-400 transition-all duration-300 ease-in-out transform absolute ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 -rotate-90"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          <a
            href="#pricing"
            className="py-3 text-lg text-white hover:text-gray-300 border-b border-gray-700 transition-colors"
          >
            {t.pricing}
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

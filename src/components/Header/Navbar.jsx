import { useState } from "react";
import logo from "../../assets/logo.svg";
import PropTypes from "prop-types";

const transitions = {
  hu: {
    pricing: "Árlista és Szolgáltatàsok",
  },
  ro: {
    pricing: "Planuri și Tarife",
  },
};

const Navbar = ( { lang, setLang } ) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = transitions[lang];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if(element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }

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
          <button
            onClick={() => scrollToSection("pricing")}
            className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
          >
            {t.pricing}
          </button>
        </div>

        {/* Language Selector */}
        <button
          onClick={() => setLang(lang === "hu" ? "ro" : "hu")}
          className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
        >
          {lang.toUpperCase()}
        </button>

        {/* Hamburger Button */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 rounded-md hover:bg-blue-500/10 transition-all duration-300 relative h-8 w-8 flex items-center justify-center"
          >
            <svg
              className={`h-8 w-8 text-blue-500 transition-all duration-300 ease-in-out transform absolute ${
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
              className={`h-8 w-8 text-blue-500 transition-all duration-300 ease-in-out transform absolute ${
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
        <div className="flex flex-col justify-center items-center h-full pt-20 px-4">
          <button
            onClick={() => scrollToSection("pricing")}
            className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
          >
            {t.pricing}
          </button>
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

Navbar.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired
}

export default Navbar;

import Navbar from "./Navbar";
import Hero from "../Hero/Hero";
import PropTypes from "prop-types";

const Header = ( { lang, setLang } ) => {
  return (
    <header className="w-full bg-gray-900 shadow-sm relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/50 to-gray-900/50 z-0"></div>
      <div className="relative">
        <Navbar lang={lang} setLang={setLang} />
        <div className="w-full container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[calc(100vh-4rem)] py-20">
            <Hero lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired
}

export default Header;
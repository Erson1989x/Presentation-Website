import Navbar from "./Navbar";
import { motion } from "framer-motion";
import developer from "../../assets/developer.svg";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 bg-gray-900 shadow-sm z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/50 to-gray-900/50"></div>
      <div className="relative">
        <Navbar />
        <div className="w-full container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[calc(100vh-4rem)] py-20">
            {/* Hero Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Inovatie Digitala
                </span>{" "}
                Cu Impact Real
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              Creăm site-uri și aplicații moderne care îți transformă viziunea în realitate. De la landing page-uri până la aplicații complexe, aducem proiectul tău la viață.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                  Vezi Proiectele
                </button>
                <button className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
                 Contacteaza-ma
                </button>
              </div>
            </motion.div>

            {/* Hero Visual - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20"></div>
                <img
                  src={developer}
                  alt="Developer Illustration"
                  className="w-full h-full object-contain z-10 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

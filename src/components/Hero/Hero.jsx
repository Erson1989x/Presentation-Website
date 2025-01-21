import { motion } from "framer-motion";
import developer from "../../assets/developer.svg";

const Hero = () => {
  return (
    <>
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
          Cream site-uri si aplicatii moderne care iti transforma viziunea in
          realitate. De la landing page-uri pana la aplicatii complexe, aducem
          proiectul tau la viata.
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
    </>
  );
};

export default Hero;

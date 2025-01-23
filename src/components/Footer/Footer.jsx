import {
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const translations = {
  ro: {
    slogan1: "Transformam idei in realitate digitala.",
    slogan2: "Inovatie si performanta in dezvoltare.",
    copyright: "Toate drepturile rezervate",
    designedBy: "Design si dezvoltare de",
  },
  hu: {
    slogan1: "Ötleteket digitális valósággá alakítunk.",
    slogan2: "Innováció és teljesítmény a fejlesztésben.",
    copyright: "Minden jog fenntartva",
    designedBy: "Tervezte és fejlesztette",
  }
};

const Footer = ( { lang } ) => {
  const t = translations[lang];

  return (
    <footer className="w-full bg-gray-900 py-8 px-4 border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col items-center space-y-8">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <h2 className="text-3xl font-bold text-white">Erhard DevLab</h2>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
            <motion.div
              className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaLaptopCode className="text-2xl text-blue-400" />
              <span className="text-sm text-gray-300">
                {t.slogan1}
              </span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3 bg-gray-800/30 p-4 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaRocket className="text-2xl text-purple-400" />
              <span className="text-sm text-gray-300">
                {t.slogan2}
              </span>
            </motion.div>
          </div>


          <motion.div
            className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />


          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Erhard DevLab. {t.copyright}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
}

export default Footer;

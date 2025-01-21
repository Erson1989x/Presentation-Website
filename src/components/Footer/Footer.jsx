import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-12 px-4 border-t border-gray-800 z-99">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo or Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Erhard DevLab
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaGithub className="text-xl cursor-pointer" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <FaTwitter className="text-xl" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              Made with <FaHeart className="inline-block text-red-500 mx-1" /> in Romania
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Erhard DevLab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
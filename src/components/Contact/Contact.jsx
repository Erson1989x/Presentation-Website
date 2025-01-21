import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import EarthCanvas from './Earth'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="w-full bg-gray-900 shadow-sm py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.15),transparent_50%)]"></div>
        
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Contacteaza-ma</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ai nevoie de un consultant IT personal sau ai o propunere de proiect? Nu ezita sa mii contacteaza prin orice canal.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div 
              variants={slideIn("left", "tween", 0.2, 1)}
              className="space-y-8 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
            >
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 text-lg text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MdLocationOn className="text-2xl text-blue-400" />
                  <span>Toplita Harghita, Romania</span>
                </motion.div>
                <motion.a 
                  href="mailto:R6VYU@example.com"
                  className="flex items-center gap-4 text-lg text-white hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MdEmail className="text-2xl text-blue-400" />
                  <span>Erson1989X@gmail.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+1 (123) 456-7890"
                  className="flex items-center gap-4 text-lg text-white hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <MdPhone className="text-2xl text-blue-400" />
                  <span>004072446429</span>
                </motion.a>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">Find me on social media:</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 text-white"
                    whileHover={{ y: -3 }}
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 text-white"
                    whileHover={{ y: -3 }}
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 text-white"
                    whileHover={{ y: -3 }}
                  >
                    <FaTwitter className="text-2xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <div className="w-full h-full min-h-[550px]">
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="w-full h-full"
              >
                <EarthCanvas />
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact

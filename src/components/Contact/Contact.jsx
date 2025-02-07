import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import EarthCanvas from './Earth'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import PropTypes from 'prop-types'

const translations = {
  ro: {
    title: "Contactează-mă",
    subtitle: "Ai nevoie de un consultant IT personal sau ai o propunere de proiect? Nu ezita și contactează-mă.",
    location: "Toplița Harghita, România",
    socialMedia: "Social Media:"
  },
  hu: {
    title: "Kapcsolat",
    subtitle: "Személyes IT tanácsadóra van szüksége vagy projektjavaslattal rendelkezik? Ne habozzon, vegye fel velem a kapcsolatot.",
    location: "Maroshévíz Hargita, Románia",
    socialMedia: "Közösségi média:"
  }
};


const Contact = ( { lang } ) => {
  const t = translations[lang];
  return (
    <section id="contact" className="w-full bg-gray-900 shadow-sm px-4 py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,64,175,0.15),transparent_50%)]"></div>
        
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div 
              variants={slideIn("left", "tween", 0.2, 1)}
              className="space-y-8 bg-gray-800/50 backdrop-blur-sm p-2 lg:p-8 rounded-2xl border border-gray-700"
            >
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-2 md:gap-4 text-lg text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MdLocationOn className="text-2xl text-blue-400" />
                  <span>{t.location}</span>
                </motion.div>
                <motion.a 
                  href="mailto:ErhardDeveloperLab@gmail.com"
                  className="flex items-center gap-2 md:gap-4 text-lg text-white hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MdEmail className="text-2xl text-blue-400" />
                  <span>ErhardDeveloperLab@gmail.com</span>
                </motion.a>
                <motion.a 
                  href="tel:0040724464296"
                  className="flex items-center gap-2 md:gap-4 text-lg text-white hover:text-blue-400 transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <MdPhone className="text-2xl text-blue-400" />
                  <span>0040724464296</span>
                </motion.a>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">{t.social}</p>
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
                    <FaFacebook className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 text-white"
                    whileHover={{ y: -3 }}
                  >
                    <FaInstagram className="text-2xl" />
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

Contact.propTypes = {
  lang: PropTypes.string.isRequired
}

export default Contact

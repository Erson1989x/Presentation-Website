import programmer from "../../assets/programmer.svg";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Plan de Bază 'Start-Up'",
    price: "500-800 RON",
    recommendedFor: "Ideal pentru start-up-uri și freelanceri la început de drum",
    features: [
      "Design curat și responsive",
      "Secțiuni de bază (Header, Hero, Descriere Servicii, Testimonial, Formular de Contact)",
      "Optimizat pentru dispozitive mobile",
      "Timp de execuție: 2-3 zile lucrătoare",
    ],
  },
  {
    title: "Plan Avansat 'Professional Landing'",
    price: "1.200-2.000 RON",
    recommendedFor: "Perfect pentru IMM-uri și afaceri locale care doresc o prezență online profesională",
    features: [
      "Design personalizat și grafică profesională",
      "Secțiuni extinse (Header, Hero cu slideshow, Descriere Detaliată, Testimoniale multiple, FAQ)",
      "Formular de contact avansat cu integrare email",
      "Optimizare SEO de bază",
      "Timp de execuție: 1-2 săptămâni",
    ],
  },
  {
    title: "Pagini Web 'Business Web'",
    price: "2.500-4.500 RON",
    recommendedFor: "Recomandat pentru companii mijlocii și afaceri cu nevoi complexe de prezentare",
    features: [
      "Design personalizat pentru toate paginile",
      "5-7 pagini (Acasă, Despre noi, Servicii, Blog, Contact)",
      "Sistem de administrare conținut (CMS)",
      "Optimizare SEO avansată",
      "Timp de execuție: 2-4 săptămâni",
    ],
  },
  {
    title: "Magazin Online 'E-shop'",
    price: "4.500-8.000 RON",
    recommendedFor: "Ideal pentru retaileri și comercianți care vor să vândă online",
    features: [
      "Design modern și adaptat pentru comerț electronic",
      "Sistem complet de magazin online",
      "Integrare procesator plăți (Card, PayPal)",
      "Panou de administrare produse și comenzi",
      "Sistem de reduceri și cupoane",
      "Optimizare SEO pentru e-commerce",
      "Timp de execuție: 4-6 săptămâni",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 flex flex-col"
        >
          <h2 className="text-4xl font-bold text-center lg:text-left mb-4 text-gray-800">
            Planuri și Tarife
          </h2>
          <p className="text-center lg:text-left text-gray-600 mb-8">
            Alegeți soluția potrivită pentru afacerea dumneavoastră. Prețurile
            sunt orientative și pot varia în funcție de complexitatea și cerințele
            specifice ale proiectului.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {plan.title}
                  </h3>
                  <div className="mb-2">
                    <span className="text-xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 italic">
                    {plan.recommendedFor}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/5 flex"
        >
          <div className="relative w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20"></div>
            <img
              src={programmer}
              alt="Programmer Illustration"
              className="w-full h-full object-contain z-10 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

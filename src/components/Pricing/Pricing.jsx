import programmer from "../../assets/programmer.svg";
import { motion } from "framer-motion";
import PropTypes from "prop-types"

const translations = {
  ro: {
    title: "Planuri si Tarife",
    subtitle: "Alegeti solutia potrivita pentru afacerea dumneavoastra. Preturile sunt orientative si pot varia in functie de complexitatea si cerintele specifice ale proiectului.",
    plans: [
      {
        title: "Plan de Baza 'Start-Up'",
        price: "500-800 RON",
        recommendedFor: "Ideal pentru start-up-uri și freelanceri la inceput de drum",
        features: [
          "Design curat si responsiv",
          "Sectiuni de baza (Header, Hero, Descriere Servicii, Testimonial, Formular de Contact)",
          "Optimizat pentru dispozitive mobile",
          "Timp de executie: 2-3 zile lucratoare",
        ],
      },
      {
        title: "Plan Avansat 'Professional Landing'",
        price: "1.200-2.000 RON",
        recommendedFor: "Perfect pentru afaceri mici si mijlocii, care doresc o prezentare profesionala si eficienta",
        features: [
          "Design personalizat si grafica profesionala",
          "Sectiuni extinse (Header, Hero cu slideshow, Descriere Detaliata, Testimoniale multiple, FAQ)",
          "Formular de contact avansat cu integrare email",
          "Optimizare SEO de baza",
          "Timp de executie: 1-2 saptamani",
        ],
      },
      {
        title: "Pagini Web 'Business Web'",
        price: "2.500-4.500 RON",
        recommendedFor: "Recomandat pentru companii mijlocii și afaceri cu nevoi complexe de prezentare",
        features: [
          "Design personalizat pentru toate paginile",
          "5-7 pagini (Acasa, Despre noi, Servicii, Blog, Contact)",
          "Sistem de administrare continut (CMS)",
          "Optimizare SEO avansata",
          "Timp de executie: 2-4 saptamani",
        ],
      },
      {
        title: "Magazin Online 'E-shop'",
        price: "4.500-8.000 RON",
        recommendedFor: "Ideal pentru retaileri și comercianți care vor sa vanda produse online",
        features: [
          "Design modern și adaptat pentru comert electronic",
          "Sistem complet de magazin online",
          "Integrare procesator plati (Card, PayPal)",
          "Panou de administrare produse și comenzi",
          "Sistem de reduceri și cupoane",
          "Optimizare SEO pentru e-commerce",
          "Timp de executie: 4-6 saptamani",
        ],
      },
    ]
  },
  hu: {
    title: "Csomagok és Árak",
    subtitle: "Válassza ki a vállalkozása számára megfelelő megoldást. Az árak tájékoztató jellegűek, és változhatnak a projekt összetettségétől és egyedi követelményeitől függően.",
    plans: [
      {
        title: "Alap 'Start-Up' Csomag",
        price: "500-800 RON",
        recommendedFor: "Ideális kezdő vállalkozások és szabadúszók számára",
        features: [
          "Tiszta és reszponzív dizájn",
          "Alapvető szekciók (Fejléc, Hero, Szolgáltatások leírása, Vélemények, Kapcsolatfelvételi űrlap)",
          "Mobileszközökre optimalizálva",
          "Elkészítési idő: 2-3 munkanap",
        ],
      },
      {
        title: "Haladó 'Professional Landing' Csomag",
        price: "1.200-2.000 RON",
        recommendedFor: "Tökéletes kis- és középvállalkozások számára, akik professzionális és hatékony bemutatkozást szeretnének",
        features: [
          "Egyedi dizájn és professzionális grafika",
          "Bővített szekciók (Fejléc, Hero diavetítéssel, Részletes leírás, Több vélemény, GYIK)",
          "Fejlett kapcsolatfelvételi űrlap email integrációval",
          "Alap SEO optimalizálás",
          "Elkészítési idő: 1-2 hét",
        ],
      },
      {
        title: "Weboldal 'Business Web' Csomag",
        price: "2.500-4.500 RON",
        recommendedFor: "Ajánlott középvállalatok és összetett bemutatkozási igényű vállalkozások számára",
        features: [
          "Egyedi dizájn minden oldalhoz",
          "5-7 oldal (Főoldal, Rólunk, Szolgáltatások, Blog, Kapcsolat)",
          "Tartalomkezelő rendszer (CMS)",
          "Haladó SEO optimalizálás",
          "Elkészítési idő: 2-4 hét",
        ],
      },
      {
        title: "Webáruház 'E-shop' Csomag",
        price: "4.500-8.000 RON",
        recommendedFor: "Ideális kiskereskedők és online értékesítők számára",
        features: [
          "Modern és e-kereskedelemre optimalizált dizájn",
          "Teljes webáruház rendszer",
          "Fizetési feldolgozó integráció (Kártya, PayPal)",
          "Termék- és rendeléskezelő felület",
          "Kedvezmény- és kuponrendszer",
          "E-kereskedelmi SEO optimalizálás",
          "Elkészítési idő: 4-6 hét",
        ],
      },
    ]
  }
};

const Pricing = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="pricing" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 flex flex-col"
        >
          <h2 className="text-4xl font-bold text-center lg:text-left mb-4 text-gray-800">
            {t.title}
          </h2>
          <p className="text-center lg:text-left text-gray-600 mb-8">
            {t.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {t.plans.map((plan, index) => (
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

Pricing.propTypes = {
  lang: PropTypes.string.isRequired
}

export default Pricing;

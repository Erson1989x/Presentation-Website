import ecommerce from "../../assets/Projects/ecommerce.png";
import mobix from "../../assets/Projects/mobix.png";
import space from "../../assets/Projects/space.png";
import todo from "../../assets/Projects/todo.png";
import paper from "../../assets/Projects/paper.png";
import landing from "../../assets/Projects/Landing1.png";
import pizzaApp from "../../assets/Projects/pizza.png";
import quiz from "../../assets/Projects/quizapp.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";

const translations = {
  ro: {
    projects: "Proiecte",
    myShop: {
      title: "MyShop",
      description:
        "Construită cu un design adaptabil, asigură o experiență de cumpărare fluidă pe toate dispozitivele. Perfectă pentru afacerile care doresc să-și stabilească o prezență puternică în comerțul online, cu o interfață curată și profesională.",
    },
    mobixMobila: {
      title: "Mobix Mobila",
      description:
        "MobixMobila este un website modern de prezentare și comerț pentru mobilă, construit folosind Next.js 15, conceput pentru a expune și promova o gamă largă de produse de mobilier. Website-ul prezintă un design curat și adaptabil.",
    },
    space: {
      title: "Website Multi-pagină",
      description:
        "Prezintă o interfață interactivă cu design-uri frumoase și layout-uri adaptabile care funcționează bine pe toate dispozitivele. Este conceput pentru a oferi utilizatorilor o experiență captivantă în timp ce explorează informații despre călătoriile spațiale.",
    },
    todo: {
      title: "Aplicație Todo",
      description:
        "Te ajută să ții evidența sarcinilor zilnice. Poți adăuga cu ușurință sarcini noi, le poți marca ca fiind complete când sunt terminate și poți filtra între toate sarcinile, cele active sau cele completate. De asemenea, îți arată câte sarcini mai ai de completat și poți șterge sarcinile terminate cu un singur click.",
    },
    paper: {
      title: "Paper Landing Page",
      description:
        "Este o pagină de prezentare cu un aspect modern. Are animații fluide la derulare și arată excelent atât pe telefoane, cât și pe calculatoare.",
    },
    landing: {
      title: "Landing Page",
      description:
        "O pagină de prezentare modernă și adaptabilă, cu un design curat, elemente interactive și navigare optimizată pentru dispozitive mobile.",
    },
    pizzaApp: {
      title: "Aplicație modernă de Rețete",
      description:
        "Permite utilizatorilor să vizualizeze, să gestioneze și să interacționeze cu rețetele. Construită cu JavaScript, oferă o interfață intuitivă pentru gestionarea măsurătorilor și ingredientelor rețetelor, făcând mai ușoară pentru utilizatori lucrul cu instrucțiunile de gătit.",
    },
    quiz: {
      title: "Aplicație Quiz",
      description:
        "Dezvoltată cu React și tehnologii web moderne. Este un joc interactiv de tip quiz care testează cunoștințele utilizatorilor despre React și concepte de dezvoltare web.",
    },
    button: "Vezi mai multe",
  },
  hu: {
    projects: "Projektek",
    myShop: {
      title: "MyShop",
      description:
        "Reszponzív dizájnnal készült, amely zökkenőmentes vásárlási élményt biztosít minden eszközön. Tökéletes olyan vállalkozások számára, amelyek erős online kereskedelmi jelenlétet szeretnének kialakítani, tiszta és professzionális felülettel.",
    },
    mobixMobila: {
      title: "Mobix Mobila",
      description:
        "A MobixMobila egy modern bútor bemutató és kereskedelmi weboldal, Next.js 15 segítségével épült, amelyet bútorok széles választékának bemutatására és népszerűsítésére terveztek. A weboldal tiszta és reszponzív dizájnnal rendelkezik.",
    },
    space: {
      title: "Többoldalas Weboldal",
      description:
        "Interaktív felületet kínál gyönyörű dizájnnal és reszponzív elrendezésekkel, amelyek minden eszközön jól működnek. Úgy tervezték, hogy lenyűgöző élményt nyújtson a felhasználóknak az űrutazási információk felfedezése közben.",
    },
    todo: {
      title: "Teendők Alkalmazás",
      description:
        "Segít a napi feladatok nyilvántartásában. Könnyen hozzáadhat új feladatokat, megjelölheti őket készként amikor elkészültek, és szűrhet az összes, aktív vagy befejezett feladat között. Emellett megmutatja, hány feladat van még hátra, és egy kattintással törölheti a befejezett feladatokat.",
    },
    paper: {
      title: "Paper Landing Page",
      description:
        "Egy nagyszerű kinézetű bemutatkozó weboldal. Gördülékeny animációkkal rendelkezik görgetéskor, és remekül néz ki mind telefonon, mind számítógépen.",
    },
    landing: {
      title: "Kezdőoldal",
      description:
        "Modern és reszponzív bemutatkozó oldal, tiszta dizájnnal, interaktív elemekkel és mobilbarát navigációval.",
    },
    pizzaApp: {
      title: "Modern Recept Alkalmazás",
      description:
        "Lehetővé teszi a felhasználók számára a receptek megtekintését, kezelését és használatát. JavaScript-tel építve, intuitív felületet kínál a receptek méréseinek és hozzávalóinak kezeléséhez, megkönnyítve a felhasználók számára a főzési utasítások követését.",
    },
    quiz: {
      title: "Kvíz Alkalmazás",
      description:
        "React és modern webtechnológiák segítségével fejlesztve. Egy interaktív kvízjáték, amely teszteli a felhasználók React és webfejlesztési ismereteit.",
    },
    button: "További információ",
  },
};

const Services = ({ lang }) => {
  const t = translations[lang];

  const projects = [
    {
      image: ecommerce,
      title: t.myShop.title,
      description: t.myShop.description,
    },
    {
      image: mobix,
      title: t.mobixMobila.title,
      description: t.mobixMobila.description,
    },
    { image: space, title: t.space.title, description: t.space.description },
    { image: todo, title: t.todo.title, description: t.todo.description },
    { image: paper, title: t.paper.title, description: t.paper.description },
    {
      image: landing,
      title: t.landing.title,
      description: t.landing.description,
    },
    {
      image: pizzaApp,
      title: t.pizzaApp.title,
      description: t.pizzaApp.description,
    },
    { image: quiz, title: t.quiz.title, description: t.quiz.description },
  ];

  return (
    <section
      id="services"
      className="w-full bg-gray-50 py-16 px-8 relative z-10"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        {t.projects}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="w-full">
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4 h-[420px] flex flex-col transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-blue-200">
              {/* Image Container */}
              <div className="relative w-full h-[180px] shrink-0 overflow-hidden rounded-xl cursor-pointer group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[180px] object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="mt-4">
                  <h3 className="text-xl text-gray-800 font-semibold text-center">
                    {project.title}
                  </h3>
                  <div className="relative group">
                    <p className="mt-2 text-gray-600 text-[13px] leading-relaxed line-clamp-4 overflow-hidden">
                      {project.description}
                    </p>
                    {/* Full description on hover */}
                    <div className="absolute left-0 right-0 -bottom-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white p-4 rounded-xl transition-all duration-300 z-20 text-gray-600 text-[13px] leading-relaxed text-left shadow-md border border-gray-200 cursor-pointer">
                      {project.description}
                    </div>
                  </div>
                </div>
                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="w-8 h-8 rounded-full flex justify-center items-center">
                    <a
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaFacebook size={24} />
                    </a>
                  </div>
                  <div className="w-8 h-8 rounded-full flex justify-center items-center">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-8">
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
          {t.button}
        </button>
      </div>
    </section>
  );
};

Services.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Services;

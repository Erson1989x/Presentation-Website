import ecommerce from "../../assets/Projects/ecommerce.png"
import mobix from "../../assets/Projects/mobix.png"
import space from "../../assets/Projects/space.png"
import todo from "../../assets/Projects/todo.png"
import iphone from "../../assets/Projects/iphone.png"
import landing from "../../assets/Projects/Landing1.png"
import pizzaApp from "../../assets/Projects/pizza.png"
import quiz from "../../assets/Projects/quizapp.png"
import { FaFacebook, FaInstagram } from "react-icons/fa"




const Services = () => {
    return (
        <section className="w-full bg-gray-50 py-16 px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Proiectele mele.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={ecommerce} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">MyShop</h3>
            <p className="text-gray-600">Construita cu un design adaptabil, asigura o experiența de cumparare fluida pe toate dispozitivele. Perfecta pentru afacerile care doresc sa-si stabileasca o prezenenta puternica in comertul online, cu o interfata curata si profesionala.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={mobix} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">MobixMobila</h3>
            <p className="text-gray-600">MobixMobila este un website modern de prezentare si comert pentru mobila, construit folosind Next.js 15, conceput pentru a expune si promova o gama larga de produse de mobilier. Website-ul prezintanta un design curat si adaptabil.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={space} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Website Multi-pagina</h3>
            <p className="text-gray-600">Prezinta o interfata interactiva cu design-uri frumoase si layout-uri adaptabile care functioneaza bine pe toate dispozitivele. Este conceput pentru a oferi utilizatorilor o experienta captivanta in timp ce exploreaza informatii despre calatoriile spatiale.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={quiz} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Aplicatie Quiz</h3>
            <p className="text-gray-600">Dezvoltata cu React si tehnologii web moderne. Este un joc interactiv de tip quiz care testeaza cunostintele utilizatorilor despre React si concepte de dezvoltare web.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={landing} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Landing Page</h3>
            <p className="text-gray-600">O pagina de prezentare moderna si adaptabila, cu un design curat, elemente interactive si navigare optimizata pentru dispozitive mobile.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={iphone} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">iPhone</h3>
            <p className="text-gray-600">O prezentare web imersiva a seriei iPhone 16 Pro cu un vizualizator interactiv 3D.Cu animații fluide și schimbarea dinamică a culorilor. Construit cu Next.js, Three.js si tehnologii web moderne pentru o experienta de vizualizare impecabila.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={pizzaApp} alt="ecommerce" className="w-full h-40 object-cover" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Aplicatie moderna de Retete</h3>
            <p className="text-gray-600">Permite utilizatorilor sa vizualizeze, sa gestioneze si sa interactioneze cu retetele. Construita cu JavaScript, ofera o interfata intuitiva pentru gestionarea masuratorilor si ingredientelor retetelor, facand mai usoara pentru utilizatori lucrul cu instructiunile de gatit.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md p-4">
            <img src={todo} alt="ecommerce" className="w-full h-40 object-cover " />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Aplicatie Todo</h3>
            <p className="text-gray-600">Te ajuta sa tii evidenta sarcinilor zilnice. Poti adauga cu usurinta sarcini noi, le poti marca ca fiind complete cand sunt terminate si poti filtra intre toate sarcinile, cele active sau cele completate. De asemenea, iti arata cate sarcini mai ai de completat si poti sterge sarcinile terminate cu un singur click.</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="http://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
          <div className="w-full flex justify-center mt-8">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">Vezi mai multe</button>
        </div>
      </section>
    )
  }
  
  export default Services
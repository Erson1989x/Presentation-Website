import './App.css'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("ro");
  return (
    <div className="relative">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Services lang={lang} />
        <Pricing lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default App

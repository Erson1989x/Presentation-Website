import './App.css'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

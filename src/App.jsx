import Navbar from './components/Navbar'
import './App.css'
import Mainmanager from './components/Mainmanager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="absolute inset-0 -z-10 min-h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar/>
        <Mainmanager/>
        <Footer/>
      </div>
    </>
  )
}

export default App

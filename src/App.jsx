import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problems from './components/Problems.jsx'
import Way from './components/Way.jsx'
import Standards from './components/Standards.jsx'
import HowWeWork from './components/HowWeWork.jsx'
import Portfolio from './components/Portfolio.jsx'
import DeliveryBand from './components/DeliveryBand.jsx'
import Notes from './components/Notes.jsx'
import CloseCta from './components/CloseCta.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.jsx'

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Way />
        <Standards />
        <HowWeWork />
        <Portfolio />
        <DeliveryBand />
        <Notes />
        <CloseCta />
      </main>
      <Footer />
    </>
  )
}

export default App
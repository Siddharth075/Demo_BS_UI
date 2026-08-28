import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Solutions from './pages/Solutions.jsx'
import Industries from './pages/Industries.jsx'
import Resources from './pages/Resources.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Consultation from './pages/Consultation.jsx'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Consultation />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
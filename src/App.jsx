import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Sermon from "./pages/Sermon";
import Hero from "./components/hero/Hero";


const App = () => {

  return (
    <Router>
      <NavBar />
      <Hero></Hero>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sermon" element={<Sermon/>} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

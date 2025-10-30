import React ,{useState}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Home/Homepage";
import AboutTemple from "./components/AboutTemple";
import VolunteerForm from "./components/VolunteerForm";
import BoardManagement from "./components/BoardManagement";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Governance from "./components/Governance";
import ELibrary from "./components/ELibrary";
import Appointment from "./components/Appointment";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Whatsapp from "./components/Whatsapp";
import Call from "./components/Call";
import ScrollToTop from "./components/ScrollToTop";
import Certificates from "./components/Certificates";
import WelcomeBanner from "./components/WelcomeBanner";

function App() {

    const [showWelcome, setShowWelcome] = useState(true);
  
  return (

    <div>
  {showWelcome && (
        <WelcomeBanner onClose={() => setShowWelcome(false)} delay={3000} />
      )}

      <Whatsapp />
      <Call />
      <Router>
        <ScrollToTop />

        <div className="min-h-screen bg-gray-50">
          {/* Navigation stays on top */}
          <Navigation />

          {/* Main content */}
          <main className="transition-all duration-500 ease-in-out">
            <Routes>
              <Route path="/" element={<Hero />} />
              {/* <Route path="/home" element={<Hero />} /> */}
              <Route path="/about" element={<AboutTemple />} />
              <Route path="/volunteer" element={<VolunteerForm />} />
              <Route path="/board" element={<BoardManagement />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/library" element={<ELibrary />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/certificates" element={<Certificates />} />


            </Routes>
          </main>

          {/* Footer can be enabled later */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

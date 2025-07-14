import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects"; // Assurez-vous que le chemin est correct

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

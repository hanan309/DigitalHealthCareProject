import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./layouts/Navbar";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor";
import BlogDetail from "./pages/BlogDetail";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-appointment" element={<Appointment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/team" element={<Doctor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

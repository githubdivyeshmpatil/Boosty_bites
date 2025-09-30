import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ContactUsSection from "./Components/ContactUsSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Testimonials from "./pages/Testimonials";
import Chocolates from "./pages/Chocolates";
import ReturnPolicy from "./pages/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import FAQ from "./pages/FAQ";
import Products from "./pages/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact_us" element={<ContactUsSection />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/chocolates" element={<Chocolates />} />
            <Route path="/products" element={<Products />} />
            <Route path="/terms&condition" element={<Terms />} />
            <Route path="/testimonial" element={<Testimonials />} />
            <Route path="/returnpolicy" element={<ReturnPolicy />} />
            <Route path="/shippingpolicy" element={<ShippingPolicy />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

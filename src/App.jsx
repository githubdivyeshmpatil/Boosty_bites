import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

import ContactUsSection from "./Components/ContactUsSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <>
    
      <Router>
        <Navbar />
        <div className="pt-20">
          {" "}
          {/* Fixed navbar ke liye padding */}
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
     
      
    </>
  );
}

export default App;







// h1	text-3xl sm:text-4xl md:text-5xl lg:text-6xl
// h2	text-2xl sm:text-3xl md:text-4xl lg:text-5xl
// h3 → text-lg sm:text-xl md:text-2xl lg:text-3xl
// h4 "text-base sm:text-lg md:text-xl lg:text-2xl font-medium

// p	text-base sm:text-lg md:text-xl text-justify
// p1 "text-sm sm:text-base md:text-lg text-justify

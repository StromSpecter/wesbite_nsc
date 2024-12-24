import { Route, Routes } from "react-router-dom";
import CompanyLayout from "./layouts/CompanyLayout";
import CMSLayout from "./layouts/CMSLayout";
import Home from "./pages/company/Home";
import NotFound from "./pages/error/NotFound";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS
import PersonalDataProtection from "./pages/company/PersonalDataProtection";
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Product from "./pages/company/Product";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Apakah animasi hanya terjadi sekali saat scroll
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<CompanyLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/personal-data-protection"
            element={<PersonalDataProtection />}
          />
          <Route path="/*" element={<NotFound />} />
        </Route>

        <Route path="/dashboard" element={<CMSLayout />}></Route>
      </Routes>
    </div>
  );
};

export default App;

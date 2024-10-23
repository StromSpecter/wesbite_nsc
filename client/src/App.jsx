import { Route, Routes } from "react-router-dom";
import CompanyLayout from "./layouts/CompanyLayout";
import CMSLayout from "./layouts/CMSLayout";
import Home from "./pages/company/Home";
import NotFound from "./pages/error/NotFound";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import file CSS AOS

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
          <Route path="/about" element={<NotFound />} />
          <Route path="/product" element={<NotFound />} />
          <Route path="/career" element={<NotFound />} />
          <Route path="/news" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
        </Route>

        <Route path="/dashboard" element={<CMSLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
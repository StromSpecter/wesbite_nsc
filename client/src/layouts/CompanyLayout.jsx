import { Outlet } from "react-router-dom";
import Navbar from "../components/company/Navbar";
import Footer from "../components/company/Footer";

const CompanyLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLayout;

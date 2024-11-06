import { RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import logoNsc from "../../assets/NSC_logo_1.svg";
import kominfo from "../../assets/kominfo.png";
import apjii from "../../assets/apjii.png";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-10 bg-[#02254F] text-white border-t md:px-0">
      <div className="container grid grid-cols-1 gap-10 mx-auto md:grid-cols-3 md:gap-20">
        {/* Logo & Address Section */}
        <div className="flex flex-col items-start">
          <img
            src={logoNsc}
            alt="logo-nsc"
            className="object-cover w-40 h-auto mb-4"
          />
          <p className="text-sm">
            Ruko Grand, Fatmawati Mas, Jl. RS. Fatmawati Raya Blok I/108, Cipete
            Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota
            Jakarta 12430
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#02254f] transition-transform duration-300 hover:scale-110"
            >
              <RiInstagramFill size={24} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#02254f] transition-transform duration-300 hover:scale-110"
            >
              <RiFacebookFill size={24} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full text-[#02254f] transition-transform duration-300 hover:scale-110"
            >
              <RiTwitterFill size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h4 className="pb-2 mb-4 text-xl font-bold text-orange-500 border-b-2 w-fit">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-orange-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-300">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-300">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-300">
                News
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-orange-300">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/personal-data-protection"
                className="transition-colors hover:text-orange-300"
              >
                Personal Data Protection / Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <h4 className="pb-2 mb-4 text-xl font-bold text-orange-500 border-b-2 w-fit">
            Subscribe to our Newsletter
          </h4>
          <p className="mb-4 text-sm">Get the latest updates and offers.</p>
          <div className="flex flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-500 text-[#02254f] font-semibold rounded-r-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="flex flex-row w-full h-40 gap-2 p-4 mt-4 bg-white rounded-xl">
            <div className="flex flex-row items-center justify-center w-1/2 h-full">
              <img
                src={kominfo}
                alt="kominfo"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
            <div className="h-full w-fit">
              <img
                src={apjii}
                alt="apjii"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-sm text-center text-gray-400">
        © 2024 NSC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { navbarItems } from "../../assets/data/Data";
import { useNavbarHooks } from "../../hooks/company/useNavbarHooks";
import { RiMenu3Fill } from "react-icons/ri";
import logo from "../../assets/Favicon 48x48.ico";

const Navbar = () => {
  const { isActive, isMenuOpen, toggleMenu } = useNavbarHooks(navbarItems);

  return (
    <div className="fixed top-0 z-50 w-full h-20 bg-white shadow-md">
      <div className="container flex items-center justify-between w-full h-full px-4 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4">
          <div className="h-10">
            <img
              src={logo}
              alt="logo-nsc"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-xl font-bold text-[#02254F]">
            Nusantara Star Connect
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden h-10 md:flex">
          <ul className="flex flex-row items-center justify-center w-full h-full gap-4">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={`p-2 rounded-full ${
                    isActive(item.path)
                      ? "bg-orange-400 text-white" // Active menu styles
                      : "bg-white text-black" // Inactive menu styles
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <RiMenu3Fill size={28} />
          </button>
        </div>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        <div
          className={`absolute left-0 w-full bg-white shadow-lg top-20 md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center justify-center w-full gap-4 p-4">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={`block p-2 w-full text-center rounded-full ${
                    isActive(item.path)
                      ? "bg-orange-400 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

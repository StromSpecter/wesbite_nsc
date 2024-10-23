import { useLocation } from "react-router-dom";
import { useState } from "react";

export const useNavbarHooks = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isActive, isMenuOpen, toggleMenu };
};

import { useState } from "react";
interface AnimatedHamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}
const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <button onClick={toggle}>
      <span
        className={`absolute h-0.5 w-6 bg-crayola transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-1"
        }`}
      ></span>
      <span
        className={`absolute h-0.5 w-6 bg-crayola transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-1"
        }`}
      ></span>
    </button>
  );
};

export default AnimatedHamburger;

import { X, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Contact",
      route: "/contact",
    },
    {
      label: "About",
      route: "/about",
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-950 to-teal-600">
      <div className="max-7xl max-auto flex justify-between item-center  p-4">
        <div className="flex item-center">
        </div>
        <div
          className="md:hidden flex item-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-white" size="24" />
          ) : (
            <Menu className="text-white" size="24" />
          )}
        </div>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={( { isActive } ) => isActive ? "text-white hover:text-gray-300 font-bold bg-teal-800 duration-300 px-2 rounded" : "text-white hover:text-gray-300 font-bold hover:bg-teal-500 duration-300 px-2 rounded"}
              to={item.route}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col ">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="text-teal-500 hover:text-teal-300 bg-blue-950 hover:bg-teal-800 p-4 py-2 hover:border-l-4 border-blue-400"
              href={item.route}
              onClick={handleNavigate}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
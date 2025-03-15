import { ArrowUpRight, Earth, Menu, X } from "lucide-react";
import { useState } from "react";

const NavbarItem = ({ label, hasIcon, href }) => (
  <li className="hover:text-[#0BA159]">
    <a href={href}>{label}</a>
    {hasIcon && <ArrowUpRight className="inline stroke-3 size-4.5 ml-2" />}
  </li>
);
const links = [
  { name: "Home", href: "#home", hasIcon: false },
  { name: "Programs", href: "#programs", hasIcon: false },
  { name: "NGOs", href: "#ngos", hasIcon: true },
  { name: "Contact", href: "#contact", hasIcon: true },
  { name: "Roadmap", href: "#roadmap", hasIcon: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed flex p-8 flex-row gap-8 items-center justify-between md:justify-start z-10 bg-white w-full shadow-md">
      <div className="flex flex-row gap-2 items-center">
        <Earth color="#0BA159" size={36} />
        <a className="font-bold text-xl">NatureTek Academy</a>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-8 font-bold text-lg text-[#63677A]">
          {links.map((link) => (
            <NavbarItem
              key={link.name}
              label={link.name}
              hasIcon={link.hasIcon}
              href={link.href}
            />
          ))}
        </ul>
      </div>
      <div className="md:hidden items-center">
        <button
          className="align-bottom cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <div className="flex justify-center w-screen absolute top-24 left-0 h-screen bg-white z-20">
            <ul className="px-8 py-5 flex flex-col gap-8 font-bold text-3xl text-[#63677A]">
              {links.map((link) => (
                <NavbarItem
                  key={link.name}
                  label={link.name}
                  hasIcon={link.hasIcon}
                  href={link.href}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

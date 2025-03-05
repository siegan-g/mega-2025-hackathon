import { ArrowUpRight, Earth,Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavbarItem = ({ label, hasIcon, href }) => (
    <li className="hover:text-[#0BA159]">
      <a href={href}>{label}</a>
      {hasIcon && <ArrowUpRight className="inline stroke-3 size-4.5 ml-2" />}
    </li>
  );
  return (
    <nav className="flex p-8 flex-row gap-8 items-center justify-between md:justify-start">
      <div className="flex flex-row gap-2 items-center">
        <Earth color="#0BA159" size={36} />
        <a className="font-bold text-xl">NatureTek Academy</a>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row gap-8 font-bold text-lg text-[#63677A]">
          <NavbarItem label="Home" hasIcon={false} href="#home" />
          <NavbarItem label="Programs" hasIcon={false} href="#Programs" />
          <NavbarItem label="Contact" hasIcon={true} href="#Contact" />
          <NavbarItem label="Roadmap" hasIcon={true} href="#Roadmap" />
        </ul>
      </div>
      <div className="md:hidden items-center">
        <button className="align-bottom" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
        {isOpen && <></>}
      </div>
    </nav>
  );
};
export default Navbar;

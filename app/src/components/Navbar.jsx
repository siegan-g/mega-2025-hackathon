export default function Navbar() {
  return (
    <nav className="flex md:flex-row lg:flex-row py-5 px-12 font-bold text-xl tracking-wider text-black items-center justify-between">
      <div>  
        <a>NatureTek Academy</a>
      </div>
      <div>
        <ul className="flex justify-end gap-20">
          <li><a>Learning Areas</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

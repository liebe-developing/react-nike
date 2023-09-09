import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`padding-x py-8 fixed z-20 w-full select-none
    ${scrolled ? "bg-white shadow-xl" : "bg-transparent"}
    `}
    >
      <nav className="flex justify-between items-center max-container">
        {/* Nike Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Navigation Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 max-lg:hidden pr-[64px]">
          <button className="font-palanquin tracking-wider text-lg font-semibold ">
            Sing in{" "}
          </button>
          <span>/</span>
          <button className="font-palanquin tracking-wider text-lg font-semibold ">
            Explore now
          </button>
        </div>

        {/* Mobile view */}
        <div className="hidden max-lg:flex">
          {toggle ? (
            <AiOutlineClose
              className="cursor-pointer w-7 h-7"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineMenu
              className="cursor-pointer w-7 h-7"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white shadow-xl absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}
          >
            <ul className="flex-1 flex flex-col items-start gap-10">
              {navLinks.map((link) => (
                <li key={link.label} onClick={() => setToggle(!toggle)}>
                  <a
                    href={link.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

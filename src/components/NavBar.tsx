import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 z-0";

  let navBarClasses = scrolled
    ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;

  return (
    <>
      <div
        className={`flex justify-between items-center sticky inset-x-0 top-0 w-full z-30 font-display py-2 ${navBarClasses}`}
      >
        <h1 className="text-3xl font-extrabold tracking-widest">LYFT</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-250}
                duration={1000}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
                className="cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="cursor-pointer"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <div className="space-x-2 hidden md:block">
          <a
            href=""
            className="bg-black text-white py-1 px-3 rounded-md cursor-pointer border border-white/30 hover:bg-gray-900 transition-colors duration-300"
          >
            Login
          </a>
          <a
            href=""
            className="bg-black text-white py-1 px-3 rounded-md cursor-pointer border border-white/30 hover:bg-gray-900 transition-colors duration-300"
          >
            SignUp
          </a>
        </div>
        <MobileMenu />
      </div>
    </>
  );
};

export default NavBar;

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    title: "AboutUs",
    url: "/",
  },
  {
    title: "Features",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/",
  },
  {
    title: "SignIn",
    url: "/",
  },
  {
    title: "SignUp",
    url: "/",
  },
];

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="block md:hidden">
      {!navOpen ? (
        <button onClick={() => setNavOpen(true)}>
          <Menu size={25} />
        </button>
      ) : (
        <>
          <button onClick={() => setNavOpen(false)}>
            <X size={25} />
          </button>
          <div className="absolute left-0 top-20 bg-white/60 backdrop-blur-md w-full py-4 border-y border-gray-400">
            <ul className="flex flex-col justify-center items-center ">
              {navItems.map((navItem, index) => (
                <a
                  key={index}
                  href={navItem.url}
                  className="block text-gray-600 p-4"
                >
                  {navItem.title}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;

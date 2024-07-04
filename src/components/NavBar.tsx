const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b pb-3 sticky inset-x-0 top-0 w-full z-30">
        <h1 className="text-3xl font-extrabold tracking-widest">LYFT</h1>
        <nav>
          <ul className="flex gap-2">
            <li>
              <a href="/">AboutUs</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </nav>
        <div className="space-x-2">
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
      </div>
    </>
  );
};

export default NavBar;

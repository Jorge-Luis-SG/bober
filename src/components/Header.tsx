import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <div>
      <div className="flex items-center justify-start h-20 mb-4 lg:hidden">
            <img src={logo} alt="Bober" />
        </div>
      <ul className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 text-center text-xl lg:text-lg space-y-4 lg:space-0 lg:space-y-0">
        <li>Home</li>
        <li>Service</li>
        <li>Feature</li>
        <li>Product</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </ul>
      <div className="login flex lg:hidden mt-8 space-x-4">
        <Link to={'login'} className="bg-transparent flex items-center justify-center text-[#FFA600] w-24 h-11 text-lg">Login</Link>
        <button className="bg-[#FFA600] text-white py-2 w-24 h-11 text-lg">
          Sign up
        </button>
      </div>
    </div>
  );
};

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <header className="py-5 bg-[#F5F7FA] pr-20 pl-4">
        <div className={`fixed lg:relative flex justify-between max-w-[1700px] mx-auto w-full left-0 top-0 ${menuIsOpen ? 'bg-[#ffffff90]' : 'bg-transparent'} lg:bg-transparent`}>
          <div className={`flex items-center justify-start h-20 ${menuIsOpen ? 'opacity-0' : 'opacity-100'} lg:opacity-100`}>
            <img src={logo} alt="Bober" />
          </div>
          <nav className={`absolute left-auto right-0 z-50 sm:relative max-w-xl lg:mx-auto flex flex-col items-center justify-center  h-screen  lg:w-auto lg:h-auto bg-[#efe7e7] lg:bg-transparent ${menuIsOpen ? 'w-full' : 'w-auto'} transition-all `}>
            <div className="absolute top-4 right-4 lg:hidden w-12 h-12">
              {menuIsOpen ? (
                <MdClose
                  className="w-12 h-12"
                  onClick={() => setMenuIsOpen(false)}
                />
              ) : (
                <FiMenu
                  className="w-12 h-12"
                  onClick={() => setMenuIsOpen(true)}
                />
              )}
            </div>
            <div className="hidden lg:block">
              <NavMenu />
            </div>
            <div className="lg:hidden">{menuIsOpen ? <NavMenu /> : <></>}</div>
          </nav>
          <div className="login hidden lg:flex lg:items-center">
            <Link to={'/login'} className="bg-transparent flex items-center justify-center text-[#FFA600] w-24 h-11">
              Login
            </Link>
            <Link to={'/register'} className="bg-[#FFA600] flex items-center justify-center text-white w-24 h-11">Sign up</Link>
          </div>
        </div>
      </header>
    </>
  );
}

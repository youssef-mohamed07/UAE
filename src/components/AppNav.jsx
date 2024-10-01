import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import logo from "../../public/assets/logo.png";
import { useState } from "react";
import { useAuth } from "../context/Auth";

function AppNav() {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <header className="bg-black text-white  md:text-[.8rem] xl:text-xl  font-bold">
        <nav className="flex items-center justify-between  w-[98.5%] mx-auto py-1">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <div
            className={`md:static md:min-h-fit md:w-auto absolute bg-black min-h-[50vh] left-0 ${
              showMenu ? "top-[17%]" : "top-[-100%]"
            } w-full flex items-center px-5 `}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-7 gap-4">
              <li>
                <a className="hover:text-gray-400 transi duration-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-400 transi duration-300"
                  href="/#About"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-400 transi duration-300"
                  href="/#Services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-400 transi duration-300"
                  href="/#Track"
                >
                  Track
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-400 transi duration-300"
                  href="/#Check"
                >
                  Check Freight
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-400 transi duration-300"
                  href="/#Contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center md:gap-4 gap-2">
            {!isAuthenticated && (
              <div className="flex gap-3">
                <Link
                  className="hover:text-gray-400 transi duration-300"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="hover:text-gray-400 transi duration-300"
                  to="/Register"
                >
                  Register
                </Link>
              </div>
            )}
            {isAuthenticated && <Link onClick={() => logout()}>Logout</Link>}

            <p>En🌐</p>
            {!showMenu && (
              <IoMenu
                className="md:hidden cursor-pointer"
                onClick={() => setShowMenu(true)}
              />
            )}
            {showMenu && (
              <IoClose
                className="md:hidden cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default AppNav;

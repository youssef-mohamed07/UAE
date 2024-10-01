/* eslint-disable react/prop-types */
// import icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function SubNav() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-5 py-2 border-b-2 border-white">
      <a className="text-sm" href="https://Info@EXPREES.Com" target="_blank">
        Info@EXPREES.Com
      </a>
      <nav>
        <ul className=" flex items-center justify-between md:gap-3 gap-2">
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
          <SocialIcon>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon>
            <FaGoogle />
          </SocialIcon>
          <SocialIcon>
            <FaTiktok />
          </SocialIcon>
          <SocialIcon>
            <RiTwitterXLine />
          </SocialIcon>
        </ul>
      </nav>
    </div>
  );
}

const SocialIcon = ({ children }) => {
  return (
    <li className="bg-white text-black p-1 text-sm rounded-full">
      <a href="#">{children}</a>
    </li>
  );
};

export default SubNav;

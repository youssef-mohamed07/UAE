// import icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="text-white bg-black   grid grid-cols-1 sm:grid-cols-2 text-center md:text-left  lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 px-14 py-10 lg:gap-4">
      <div>
        <img
          src="../../public/assets/logo.png"
          className=" mx-auto md:mx-0 w-[200px]"
          alt=""
        />
        <p className=" md:pr-20">
          For shipping and cargo transportation services,and car shipping to all
          parts of the world,and customs clearance services in the UAE.
        </p>
        <nav>
          <ul className=" flex items-center justify-center  md:justify-start md:gap-3 gap-2 mt-4">
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
      <div>
        <h2 className="font-bold text-[25px]  mb-1">Menu</h2>
        <span className="h-[1px] w-[100px] bg-[#F05B1F] md:mx-0 mx-auto mb-3 block"></span>
        <nav>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#About">About US</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Track</a>
            </li>

            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h2 className="font-bold text-[25px]  mb-1">Our Services</h2>
        <span className="h-[1px] w-[100px] bg-[#F05B1F] md:mx-0 mx-auto mb-3 block"></span>
        <ul className="flex flex-col gap-3">
          <li>Land transport</li>
          <li>Sea transport</li>
          <li>Air transport</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-[25px]  mb-1">Location</h2>
        <span className="h-[1px] w-[100px] bg-[#F05B1F] md:mx-0 mx-auto mb-3 block"></span>
        <ul className="flex flex-col gap-3">
          <li>Amwaj Al Bahar Cargo Transport</li>
          <li>T.0971 50209 1000</li>
          <li>
            <a href="Info@EXPREES.COM">Info@EXPREES.COM</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-[25px] mb-1">Download the app by :</h2>
        <span className="h-[1px] w-[100px] bg-[#F05B1F] md:mx-0 mx-auto mb-3 block"></span>
        <img
          src="../../public/assets/google-store.png"
          alt=""
          className="mb-4 mx-auto md:mx-0 "
        />
        <img
          src="../../public/assets/app-store.png"
          className="mb-4 mx-auto md:mx-0 "
          alt=""
        />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const SocialIcon = ({ children }) => {
  return (
    <li className="bg-white text-black p-1 text-sm rounded-full">
      <a href="#">{children}</a>
    </li>
  );
};

export default Footer;

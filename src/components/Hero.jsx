import Swiper from "./Swiper";

function Hero() {
  return (
    <div className="bg-[url('assets/Hero.png')]  h-[600px] w-full bg-cover bg-center text-white flex items-center px-16 ">
      <div className="text-center md:text-left">
        <h1 className="md:text-[32px] lg:text-[42px] text-[30px] font-[800] mb-5">
          Welcome{" "}
          <span className="block text-[#F05B1F] mt-3">INJAZ EXPREES!</span>
        </h1>
        <p className="md:text-[25px]  text-[20px] font-[700] lg:w-[40%] leading-loose">
          For shipping and cargo transportaion services,and car shipping to all
          parts of the world,and customs clearance services int the UAE.
        </p>
        <Swiper />
      </div>
    </div>
  );
}

export default Hero;

import Swiper from "./Swiper";

function Client() {
  return (
    <div className="px-8 flex flex-col items-center py-4">
      <h2 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-[#F05B1F] mb-7 mt-3">
        Our Client Say!
      </h2>
      <div className="flex gap-2 flex-wrap justify-center">
        <img src="../../public/assets/client-1.png" alt="" />
        <img src="../../public/assets/client-2.png" alt="" />
        <img src="../../public/assets/client-3.png" alt="" />
        <img src="../../public/assets/client-4.png" alt="" />
      </div>
      <Swiper />
    </div>
  );
}

export default Client;

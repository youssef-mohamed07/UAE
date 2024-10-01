function ContainerCar() {
  return (
    <div className="bg-[#F05B1F] mt-7 text-white font-bold md:flex lg:text-[30px]">
      <div className="px-4 py-5 self-center md:w-1/2 md:leading-[2] ">
        <p className="mb-3">
          Multi-modal container units: <br /> Efficient solutions for cargo
          transportation and management
        </p>
        <p>
          Multi-modal container units, designed as reusable carriers to
          facilitate unit laod handling of the goods contained , are also
          referred to as cargo , specially by shipping lines and logistics
          operatars.
        </p>
        <div className="flex gap-2 text-center mt-3 justify-center">
          <div className="w-3 h-3 rounded-[3px] bg-white"></div>
          <div className="w-3 h-3 rounded-[3px] bg-white"></div>
          <div className="w-3 h-3 rounded-[3px] bg-white"></div>
        </div>
      </div>
      <div className="p-2 lg:p-0  md:w-1/2">
        <img
          src="../../public/assets/container-car.png"
          alt=""
          className="rounded-[50px] lg:rounded-r-none w-full h-full "
        />
      </div>
    </div>
  );
}

export default ContainerCar;

// eslint-disable-next-line react/prop-types
function Modal({ onClose }) {
  return (
    <div className="bg-black bg-opacity-50 w-full h-full z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center rouneded-[4px] py-10 bg-white  md:w-[300px] w-[200px] lg:w-[400px]">
          <p className="mb-4 text-[#5f5f5f] text-[10px] md:text-base text-center font-[600]">
            Your data will be reviewed, and we <br /> will contact you via email
            or mobile <br /> phone
          </p>
          <button
            onClick={() => onClose(false)}
            className="bg-[#F05B1F] md:text-xl font-bold cursor-pointer px-3 py-1 rounded-[8px] lg:py-3 lg:px-7 text-white"
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

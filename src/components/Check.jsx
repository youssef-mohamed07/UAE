function Check() {
  return (
    <div id="Check">
      <div className="flex justify-center py-3 bg-[#1E1E1E]">
        <input
          className="font-sans font-semibold text-md px-8 py-1 rounded-[8px] mr-3 outline-none text-black lg:w-[500px] lg:py-3"
          type="text"
          name="track"
          placeholder="Insert tracking number here..."
        />
        <button
          type="submit"
          className="bg-[#F05B1F] font-bold cursor-pointer px-3 py-1 rounded-[8px] lg:py-3 lg:px-7 text-white"
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default Check;

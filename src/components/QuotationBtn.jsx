import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function QuotationBtn() {
  const [showDiv, setShowDiv] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 900) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showDiv && (
        <div className="bg-[#F05B1F] font-semibold px-6 py-2 rounded-full cursor-pointer md:mb-0 mb-2 inline-block fixed right-[5%] bottom-[5%] text-white ">
          <Link to="quotation">Get Quotation</Link>
        </div>
      )}
    </div>
  );
}

export default QuotationBtn;

// import Modal from "./Modal";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function Quotation() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  // error
  const [error, setError] = useState("");
  // show modal
  const [showModal, setShowModal] = useState(false);
  // formData
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    vin: "",
    fuel_type: "",
    engine_type: "",
    engine_capacity: "",
    mileage: "",
    conditon: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "brand" ||
        name === "year" ||
        name === "engine_capacity" ||
        name === "mileage"
          ? parseInt(value)
          : value,
    });
  };

  // handle error
  const validateForm = () => {
    if (
      !formData.brand ||
      !formData.model ||
      !formData.year ||
      !formData.conditon ||
      !formData.engine_capacity ||
      !formData.mileage ||
      !formData.engine_type ||
      !formData.vin ||
      !formData.color
    ) {
      setError("Invalid quotation order");
      return false;
    }
    return true;
  };

  // cancel
  const handleCancel = () => {
    setFormData({
      brand: "",
      model: "",
      year: "",
      color: "",
      vin: "",
      fuel_type: "",
      engine_type: "",
      engine_capacity: "",
      mileage: "",
      conditon: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch("127.0.0.1:8000/shipping/shipping-request/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setShowModal(true);
      handleCancel();

      if (res.ok) {
        // eslint-disable-next-line no-unused-vars
        const data = await res.json();
      }
    } catch (e) {
      console.error("Error submitting form data: ", e);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) navigate("/login", { replace: true });
  }, [isAuthenticated]);

  return (
    <div>
      <header className="bg-[url(/assets/quotation.png)] bg-cover bg-center h-[400px] flex items-center px-6">
        <h2 className="font-bold text-4xl text-[#F05B1F]"> Get Quotation</h2>
      </header>
      <form onSubmit={handleSubmit} className=" p-4">
        <h3 className="flex gap-1 text-[#F05B1F] font-bold">
          <img src="../../public/assets/car.png" alt="" />
          Car Data
        </h3>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 mt-5">
          <div>
            <div>
              <label className="font-semibold text-xl mb-2 block">Brand</label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="number"
                placeholder="ID Brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">
                Vehicle Identification Number (VIN)
              </label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="text"
                placeholder="Vehicle Identification Number (VIN)"
                name="vin"
                value={formData.vin}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">
                Fuel Type
              </label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="text"
                placeholder="Fuel Type"
                name="fuel_type"
                value={formData.fuel_type}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">
                Conditon (New/Used)
              </label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="text"
                placeholder="Conditon (New/Used)"
                name="conditon"
                value={formData.conditon}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label className="font-semibold text-xl mb-2 block">Modal</label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="text"
                placeholder="Modal"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">Color</label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="text"
                placeholder="Color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">
                Engin Capacity
              </label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="nubmer"
                placeholder="Engin Capacity"
                name="engine_capacity"
                value={formData.engine_capacity}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div>
              <label className="font-semibold text-xl mb-2 block">Year</label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none font-[600] "
                type="number"
                placeholder="Year"
                name="year"
                value={parseInt(formData.year)}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">
                Engine Type
              </label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none "
                type="text"
                placeholder="Engine Type"
                name="engine_type"
                value={formData.engine_type}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="font-semibold text-xl mb-2 block">
                Mileage
              </label>
              <input
                className="border-[1px]  border-[#5f5f5f] block md:px-4 md:py-3 px-3 py-2 w-full mb-5 outline-none "
                type="number"
                placeholder="Mileage"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 ">
          <button className="bg-black md:text-xl font-bold cursor-pointer px-3 py-1 rounded-[8px] lg:py-3 lg:px-7 text-white">
            Cancel
          </button>
          <button className="bg-[#F05B1F] md:text-xl font-bold cursor-pointer px-3 py-1 rounded-[8px] lg:py-3 lg:px-7 text-white">
            Send
          </button>
        </div>
      </form>
      {error && (
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "600",
          }}
        >
          {error}
        </p>
      )}
      {showModal && <Modal onClose={setShowModal} />}
    </div>
  );
}

export default Quotation;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for show/hide password

function Register() {
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState(null); // State to hold image file

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set selected image file
  };

  // Handle error
  const validateForm = () => {
    setError(""); // Clear previous error

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.phone_number ||
      !formData.password ||
      !confirmPassword
    ) {
      setError("Please fill out the entire form");
      return false;
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email address");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    if (formData.password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    const formDataToSend = new FormData(); // Use FormData to handle image uploads
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    formDataToSend.append("image", image); // Append image file

    try {
      const res = await fetch("http://127.0.0.1:8000/core/register/", {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        console.log("Registered successfully");
        navigate("/login");
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      console.error("Error submitting registration: " + err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[url('/assets/register.png')] bg-cover bg-center overflow-x-hidden text-white py-16 px-12">
      <h2 className="text-center font-bold text-[42px] mb-8">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start"
      >
        <div>
          <label className="font-semibold text-xl mb-2 block">Full Name</label>
          <input
            className="block px-4 py-2 w-[300px] md:w-[400px] outline-none mb-5 text-black"
            type="text"
            placeholder="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          
          <label className="font-semibold text-xl mb-2 block">Email</label>
          <input
            className="block px-4 py-2 w-[300px] md:w-[400px] outline-none mb-5 text-black"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label className="font-semibold text-xl mb-2 block">Phone Number</label>
          <input
            className="block px-4 py-2 w-[300px] md:w-[400px] outline-none mb-5 text-black"
            type="tel"
            placeholder="Phone"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label className="font-semibold text-xl mb-2 block">Image</label>
          <input
            className="block px-4 py-2 w-[300px] md:w-[400px] outline-none mb-5 text-black"
            type="file"
            onChange={handleImageChange}
            accept="image/*" // Accept only image files
            required
          />
          
          <label className="font-semibold text-xl mb-2 block">Password</label>
          <div className="relative mb-5">
            <input
              className="block px-4 py-2 w-[300px] md:w-[400px] outline-none text-black"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          
          <label className="font-semibold text-xl mb-2 block">Confirm Password</label>
          <div className="relative mb-5">
            <input
              className="block px-4 py-2 w-[300px] md:w-[400px] outline-none text-black"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#F05B1F] mx-auto block lg:mx-0 w-[300px] md:w-[400px] px-4 py-2 font-bold mt-5 mb-10"
          >
            Register
          </button>
          <p className="w-[400px] text-center text-lg">
            Already have an account?
            <span>
              {" "}
              <Link to="/login" className="text-[#F05B1F] font-bold">
                Log in
              </Link>
            </span>
          </p>
        </div>
      </form>
      {error && (
        <p className="text-red-500 text-center text-xl mt-5">{error}</p>
      )}
    </div>
  );
}

export default Register;

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // data from form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/core/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        login(data); // Assuming login is a function that saves user data
        navigate("/");
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (err) {
      console.error("Error submitting login: " + err);
    }
  };

  return (
    <div className="bg-[url('/assets/login.jpg')] bg-cover bg-center text-white py-9 px-8 md:px-12">
      <h2 className="text-center font-bold text-[32px] mb-4">Log in</h2>
      <div className="flex justify-between gap-[200px]">
        <form
          onSubmit={handleSubmit}
          className="flex-grow flex flex-col md:gap-5 gap-3 md:self-center"
        >
          <div>
            <label className="font-[500] lg:text-[25px] mb-[2px] block">Email</label>
            <input
              className="border-[1px] border-black block md:px-4 md:py-3 text-black px-3 py-2 mx-auto outline-none w-full"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="relative">
            <label className="font-[500] lg:text-[25px] mb-[2px] block">Password</label>
            <input
              className="border-[1px] border-black block px-3 py-2 md:px-4 md:py-3 text-black mx-auto outline-none w-full"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <p className="text-right text-[#F05B1F] font-bold cursor-pointer">
            Forget Password
          </p>
          <button
            className="bg-[#F05B1F] md:text-xl font-bold cursor-pointer px-3 py-1 rounded-[8px] lg:py-3 lg:px-7 text-white"
            type="submit"
          >
            Log in
          </button>

          <p className="text-center md:text-xl">
            Don’t have an account?{" "}
            <Link className="font-bold text-[#F05B1F]" to="/register">
              Register
            </Link>
          </p>
        </form>

        <img
          src="../../public/assets/login-s.png"
          className="hidden lg:block md:w-1/2 lg:w-[595px] lg:mr-9"
          alt="Login Illustration"
        />
      </div>
    </div>
  );
}

export default Login;

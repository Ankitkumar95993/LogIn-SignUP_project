import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    // event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    console.log("printing the form data");
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full mt-6">
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          type="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={changeHandler}
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 "
        />
      </label>

      <br />

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
          Password<sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={formData.password}
          onChange={changeHandler}
          name="password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2"
        />

        <span
          className='right-3 top-[38px] cursor-pointer absolute'
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 w-full max-w-max ml-auto">Forgot Password</p>
        </Link>
      </label>

      <button className="bg-yellow-600 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-4">Sign In</button>
    </form>
  );
};

export default LoginForm;

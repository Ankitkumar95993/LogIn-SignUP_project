import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const SignupForm = ({setLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    // event.preventDefault();
    setFormData((prevData)=>({
        ...prevData, [event.target.name]:event.target.value
    }));
}

  const [showPassword, setShowPassword] = useState(false);
  const [accountType,setAccountType] = useState("student");
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  function submitHandler(event)
  {
     event.preventDefault();
     if(formData.password !== formData.confirmPassword){
        toast.error("password doesn't match")
        return ;
     }
     setLoggedIn(true);
     toast.success("Account created");
     const accountData = {
        ...formData
     };
     console.log('printing account data');
     console.log(accountData);

     navigate("/dashboard");


  }

  return (
    <div>
      {/* Student-instructor tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button  onClick={()=>setAccountType("student")}    
        className={`${accountType==="student"?
        "bg-richblack-900 text-richblack-5" : 
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>

        <button className={`${accountType==="instructor"?
        "bg-richblack-900 text-richblack-5" : 
        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        
        onClick={()=>setAccountType("instructor")} >Instructor</button>
      </div>


      <form onSubmit={submitHandler}>
        {/* first name and last name */}

        <div className="flex justify-between mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter First Name"
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 "

            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter last Name"
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 "

            />
          </label>
        </div>

        {/* email address */}
       <div className="mt-[20px]">
       <label>
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

       </div>
       
        {/* password and comfirm password */}

        <div className="flex justify-between mt-[20px]">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="enter password"
              value={formData.password}
              onChange={changeHandler}
              name="password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 "

            />

            <span
              className='right-3 top-[38px] cursor-pointer absolute'
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 "

            />
            <span
              className='right-3 top-[38px] cursor-pointer absolute'
              onClick={() => {
                setShowConfirmPassword((prev) => !prev);
              }}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"  /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>
        </div>

        <button className= "bg-yellow-600 font-medium w-full rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-[40px]">Create Account</button>

      </form>
    </div>
  );
};

export default SignupForm;
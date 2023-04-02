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

  const navigate = useNavigate();

  function submitHandler(event)
  {
     event.preventDefault();
     if(formData.password != formData.confirmPassword){
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
      <div>
        <button>Student</button>

        <button>Instructor</button>
      </div>


      <form onSubmit={submitHandler}>
        {/* first name and last name */}

        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="Enter First Name"
              onChange={changeHandler}
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter last Name"
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* email address */}

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={changeHandler}
            name="email"
          />
        </label>

        {/* password and comfirm password */}

        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="enter password"
              value={formData.password}
              onChange={changeHandler}
              name="password"
            />

            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
            />
            <span
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>

      </form>
    </div>
  );
};

export default SignupForm;
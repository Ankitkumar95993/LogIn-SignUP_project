import { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const LoginForm = ({setLoggedIn}) => {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    // event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]:event.target.value,
    }));
  }

  function submitHandler(event)
  {
     event.preventDefault();
     setLoggedIn(true);
     toast.success("logged In");
     navigate("/dashboard");

  }

  return (
    <form onSubmit={submitHandler}>
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

      <br />

      <label>
        <p>
          Password<sup>*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder="enter password"
          value={formData.password}
          onChange={changeHandler}
          name="password"
        />

        <span onClick={()=>{
            setShowPassword((prev)=>!prev)}}>
            { showPassword  ?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/> ) }
        </span>
       
       <Link to="#">
        <p>Forgot Password</p>
       </Link>
      </label>

      <button>Sign In</button>

    </form>
  )
}

export default LoginForm;

import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";


const Signup = ({setLoggedIn})=>{
    return(

    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skill for today, tomorrow and beyond."
      desc2="Education to future-proof your career"
      image={signupImg}
      formType="signup"
      setLoggedIn={setLoggedIn}
    />

    );
}

export default Signup;
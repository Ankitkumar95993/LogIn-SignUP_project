import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template=({title,desc1,desc2,image,formType,setLoggedIn})=>{

    return(
        <div className="flex w-9/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 ">
            <div>
            <h1 className="font-semibold text-4xl leading-[2.375rem] text-yellow-600">{title}</h1>
            <p className="text-[1.25rem] leading-[1.625] mt-3">
                <span className= "text-richblack-100">{desc1}</span>
                <br/>
                <span className="text-blue-100 italic">{desc2}</span>
            </p>

            {formType==="signup"?
            (<SignupForm setLoggedIn = {setLoggedIn}/>):
            (<LoginForm setLoggedIn = {setLoggedIn}/>)}

            <div className="flex w-full item-center my-4 gap-x-2">
                <div className="h-[1px] bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[1px] bg-richblack-700"></div>
            </div>

            <button>
                <p>Sign Up with Goggle</p>
            </button>
        </div>


        <div>
           <img src={frameImage} alt="pattern" height={504} width={558} loading="lazy"/>
           <img src={image} alt="pattern" height={504} width={558} loading="lazy"/>

        </div>

   </div>
            

       
    );

}

export  default Template
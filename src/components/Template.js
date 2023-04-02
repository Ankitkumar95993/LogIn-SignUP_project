import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setLoggedIn }) => {
  return (
    <div className="flex w-9/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
      <div className="max-w-[450px] w-11/12">
        <h1 className="font-semibold text-3xl leading-[2.375rem] text-yellow-600">
          {title}
        </h1>
        <p className="text-[1.25rem] leading-[1.625] mt-3">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForm setLoggedIn={setLoggedIn} />
        )}

        <div className="flex w-full item-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem] relative -top-3">
            OR
          </p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button className="w-full flex items-center  justify-center border border-richblack-700 rounded-[8px]
        font-medium text-richblack-100 pc-12px] py-[8px] gap-x-2 mt-6 ">
          <FcGoogle />
          <p>Sign Up with Goggle</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] ">
        <img
          src={frameImage}
          alt="pattern"
          height={504}
          width={558}
          loading="lazy "
          className="mt-12"
        />
        <img
          src={image}
          alt="pattern"
          height={504}
          width={558}
          loading="lazy"
          className="absolute -top-4 right-4 mt-12"
        />
      </div>
    </div>
  );
};

export default Template;

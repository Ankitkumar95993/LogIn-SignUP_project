
import React  from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = (props)=>{

    const loggedIn = props.loggedIn;
    const setLoggedIn = props.setLoggedIn;

    return(
        <div className="flex justify-evenly bg-cyan-500  items-center">

            <Link to="/">
                <img src={logo} alt="logo" width={160} height={48} loading="lazy"/>
            </Link>
            <nav>
                <ul className="flex space-x-10 text-2xl gap-x-6 " >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-5 ml-4 mr-4 text-1xl items-center">
               { !loggedIn &&
                <Link to="/login">
               <button className=" bg-cyan-200 text-black py-[8px] px-[12px] rounded-[8px] border border-cyan-100">Log in</button>
               </Link>
               }

               { !loggedIn &&
                <Link to="/signup">
               <botton className= "bg-cyan-200 text-black py-[8px] px-[12px] rounded-[8px] border border-cyan-100">
                Sign up
               </botton>
               </Link>
               }

               { loggedIn &&
                <Link to="/">
               <button className=" bg-cyan-200 text-black py-[8px] px-[12px] rounded-[8px] border border-cyan-100" onClick={()=>{
                setLoggedIn(false)
                toast.success("Logged Out")
               }}>Logout</button>
               </Link>
               }

              { loggedIn &&
              <Link to="/dashboard">
               <button className=" bg-cyan-200 text-black py-[8px] px-[12px] rounded-[8px] border border-cyan-100" >dashboard</button>
               </Link>
               }

               
            </div>
        </div>
    );
}

export default Navbar;
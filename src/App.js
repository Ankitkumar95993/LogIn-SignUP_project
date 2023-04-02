import "./App.css";
import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {

  const [loggedIn,setLoggedIn] = useState(false);
  return(
    <div className="w-screen h-screen bg-richblack-900  flex flex-col">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route> 
      </Routes>

    </div>
  );
}

export default App;

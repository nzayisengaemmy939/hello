import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseconfig/config";

const LogIn = () => {
  const [isOpen ,setIsOpen]=useState(true)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setErorr]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate();
  const handleBack=()=>{
    setIsOpen(!isOpen)
    navigate('/')
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    setErorr("")
    try {
      const {user}=await signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
      console.log(user)
      navigate('/')
      alert("Congulaturation Login Successfull!!")
    } catch (error) {
      console.log(error)
      setErorr("Wrong email or Password!..")
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className=" bg-black min-h-screen w-screen ">
    {isOpen && (<div className=" fixed top-[12vh] md:right-10 right-1">
    <IoCloseSharp onClick={handleBack}
      className=" text-white h-10 w-10 cursor-pointer hover:text-red-700" />
    </div>)}
    {isOpen && <div className="flex flex-row flex-wrap gap-20 justify-center pt-[14vh] font-inter  bg-black text-white h-[87vh] ">
      
        <form className="flex flex-col gap-2 text-xl">
          <h1 className="text-2xl mb-10 font-[500] text-white text-start leading-10">Login</h1>
          
          

          <label className="flex justify-start flex-col gap-2 font-[450] text-gray-300">
            Email address:
            <input value={email} onChange={(e)=>setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              type="email"
              className="border border-orange-100 h-10 bg-gray-100 w-64 md:w-80 rounded-xl px-4 font-[300] font-sans text-gray-950"
            />
          </label>
          <label className="flex justify-start flex-col gap-2 font-[450] text-gray-300">
            Password:
            <input value={password} onChange={(e)=>setPassword(e.target.value)}
              required
              placeholder="Write strong password"
              type="password"
              className="border border-orange-100 h-10 bg-gray-100 w-64 md:w-80 rounded-xl px-4 font-[300] font-sans text-gray-950"
            />
          </label>
          <button onClick={(e)=>handleSubmit(e)}
            type="submit"
            className="px-4 py-2 bg-red-600 rounded-xl mt-8 hover:cursor-pointer text-white text-2xl
             font-[500] max-w-[320px]" disabled={loading}
          >
            {loading?"Logging in...":"Login"}
          </button>
          {error && <p className="text-red-600 mt-4">{error}</p>}
          <p className=""> Or <Link className="text-red-600 hover:text-blue-700"
           to='/signup'>Create account here</Link></p>
        </form>
      
    </div>}</div>
  );
};

export default LogIn;

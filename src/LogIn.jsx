import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseconfig/config";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleBack = () => {
    setIsOpen(!isOpen);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { user } = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log(user);
      navigate("/");
      alert("Congratulations, Login Successful!");
    } catch (error) {
      console.log(error);
      setError("Wrong email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen w-screen flex flex-col items-center mt-10 h-screen">
      {isOpen && (
        <div className="fixed top-4 right-4">
          <IoCloseSharp
            onClick={handleBack}
            className="text-white h-10 w-10 cursor-pointer hover:text-red-700"
          />
        </div>
      )}
      {isOpen && (
        <div className="flex  items-center  justify-center pt-16 font-inter text-white  mt-20">
          <form className="flex flex-col gap-6 text-xl p-8 border border-gray-700 rounded-2xl shadow-lg h-[75vh]">
            <h1 className="text-3xl mb-3  text-white text-start text-[17px]">
              Login to your Account
            </h1>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              type="email"
              className="border border-gray-600 rounded-lg h-12
               bg-transparent w-64 md:w-80 text-gray-300 placeholder-gray-500 
              focus:outline-none focus:border-red-500 text-[16px] p-3"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Write strong password"
              type="password"
              className="border border-gray-600 rounded-lg
               h-12 bg-transparent w-64 md:w-80 text-gray-300 
               placeholder-gray-500 focus:outline-none 
               focus:border-red-500 text-[16px] p-3"
               
            />

            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="px-6 py-3 bg-red-600 rounded-md  mt-4 hover:cursor-pointer text-white text-[16px] hover:bg-red-800 font-semibold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p className="text-red-600 mt-3 text-[15px]">{error}</p>}
            <p className="text-[14px]">
              Or{" "}
              <Link className="hover:text-blue-700 " to="/signup">
                Create account here
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LogIn;

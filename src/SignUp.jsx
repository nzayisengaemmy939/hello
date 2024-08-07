import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FIREBASE_AUTH } from "../firebaseconfig/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    setIsOpen(!isOpen);
    navigate(-1);
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Check for a strong password (minimum 8 characters, including at least one number and one special character)
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check if any field is empty
    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setLoading(false);
      return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include at least one number and one special character."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      await updateProfile(response.user, { displayName: name });
      alert("Registration successful, please login");
      navigate(-1);
    } catch (error) {
      console.log(error);
      setError("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen w-screen">
      {isOpen && (
        <div className="fixed top-4 right-4">
          <IoCloseSharp
            onClick={handleBack}
            className="text-white h-10 w-10 cursor-pointer hover:text-red-700"
          />
        </div>
      )}
      {isOpen && (
        <div className="flex flex-row flex-wrap gap-20 justify-center pt-16 font-inter bg-black text-white mt-9 h-screen">
          <form
            className="flex flex-col gap-6 text-xl p-8 border border-gray-700 rounded-2xl shadow-lg h-[80vh]"
          >
            <h1 className="text-3xl mb-4  text-white text-start text-[17px]">
              Signup to your Account
            </h1>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your user name"
              type="text"
              className="border border-gray-600 rounded-lg h-12
               bg-transparent w-64 md:w-80 text-gray-300 placeholder-gray-500 
              focus:outline-none focus:border-red-500 text-[16px] p-3"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              type="email"
              className="
            border border-gray-600 rounded-lg h-12
               bg-transparent w-64 md:w-80 text-gray-300 placeholder-gray-500 
              focus:outline-none focus:border-red-500 text-[16px] p-3"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Write strong password"
              type="password"
              className="
             border border-gray-600 rounded-lg h-12
               bg-transparent w-64 md:w-80 text-gray-300 placeholder-gray-500 
              focus:outline-none focus:border-red-500 text-[16px] p-3"
            />

            {error && <p className="text-red-600 mt-3 text-[15px]">{error}</p>}

            <button
              onClick={(e) => handleData(e)}
              type="submit"
              className="
             px-6 py-3 bg-red-600 rounded-md mt-4 hover:cursor-pointer text-white text-[16px] hover:bg-red-800 font-semibold"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;

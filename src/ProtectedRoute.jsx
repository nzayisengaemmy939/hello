import { FIREBASE_AUTH } from "../firebaseconfig/config";
import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ component }) => {
  const user = useContext(AuthContext);
  const [isEmailVerified, setIsEmailVerified] = useState(null);

  useEffect(() => {
    if (user) {
      // Check if the user has an email
      const checkEmail = async () => {
        try {
          const userData = await FIREBASE_AUTH.currentUser;
          setIsEmailVerified(userData.email ? true : false);
        } catch (error) {
          setIsEmailVerified(false);
        }
      };
      checkEmail();
    } else {
      setIsEmailVerified(false);
    }
  }, [user]);

  if (isEmailVerified === null) {
    return <div className="text-white bg-black text-2xl">Loading...</div>; // Loading state while checking
  }

  return isEmailVerified ? component : <Navigate to="/login" />;
};

export default ProtectedRoute;

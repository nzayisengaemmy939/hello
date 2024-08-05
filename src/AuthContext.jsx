
import React, { createContext, useState, useEffect } from "react";
import { FIREBASE_AUTH } from "../firebaseconfig/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

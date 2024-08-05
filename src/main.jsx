import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Films from "./components/Films/Films.jsx";
import SingleMovie from "./SingleMovie.jsx";
import FullMovie from "./FullMovie.jsx";
import Home from "./components/Home/Home.jsx";
import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/films",
        element: <Films />,
      },
      {
        path: "/films/:id",
        element: <SingleMovie />,
      },
      {
        path: "/playvid/:id",
        element: <ProtectedRoute component={<FullMovie />} />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

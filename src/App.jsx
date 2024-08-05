import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import "./App.css";
import Films from "./components/Films/Films.jsx";
import SingleMovie from "./SingleMovie.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
function App() {
  return (
    <>
       <Header />
       <Outlet/>
       <Footer/>
    </>
  );
}
export default App;

import { useEffect, useState } from "react";
import "./NewReleased.css";
import axios from "axios";
import { GrLinkNext } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Recommended({ timeSrc, btn1, btn2, ep }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;
  const fetchNewMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDc2M2ViMjE5NTFjZTExNjc3NGVkMjRiZWVmZjNmOSIsIm5iZiI6MTcyMTk3NTg4MC43NTM4OTEsInN1YiI6IjY2YTMzOTMwMGZjODMyMDJjMzQ2OTg5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2986_3_YCjkqbPvFYKOKcdHCUPPTY9sonhnlJL-X7AI",
      },
    };
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options
    );
    setData(response.data.results);
  };
  useEffect(() => {
    fetchNewMovies();
  }, []);
  // console.log(data);
  const totalPages = Math.ceil(data.length / itemPerPage);
  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const startIndex = (currentPage - 1) * itemPerPage;
  const currentData = data.slice(startIndex, startIndex + itemPerPage);
  return (
    <div className="">
      <div className="tranding-container flex justify-between items-center mt-10 pb-6 w-[98%]">
        <div className="flex  flex-wrap gap-5 justify-center items-center">
          <h2>Recommended</h2>
          <button className="lbutton active">Movies</button>
          <button className="lbutton">Series</button>
          <button className="lbutton">Animation</button>
        </div>
        <div
          onClick={handleClickNext}
          className=" flex flex-row justify-center items-center gap-3 hover:cursor-pointer"
        >
          <h3 style={{ color: "gray" }}>View All</h3>
          <GrLinkNext />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-3 justify-center items-center ">
        {currentData.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              key={item.id}
              className=" md:w-[250px] mb-5"
            >
              <div style={{ position: "relative" }} className="profile">
              <Link to={`/films/${item.id}`}>
                <img
                  className="md:w-[250px] md:h-[330px] rounded-[10px]"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                />
                </Link>
                {ep && (
                  <p
                    style={{
                      position: "absolute",
                      background: "red",
                      color: "white",
                      top: "10px",
                      left: "10px",
                      borderRadius: "5px",
                      fontWeight: "500",
                      padding: "5px",
                    }}
                  >
                    {ep}
                  </p>
                )}
              </div>
              <div className="new-descript mt-4">
                <p className="w-[130px] h-16 ">{item.title}</p>
                <div className="flex flex-row justify-center items-center">
                  <button className="hd-btn">{btn1}</button>
                  <button className=" flex flex-row ">
                    {btn2 && <img src={timeSrc} alt="" />}
                    {btn2}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default Recommended;

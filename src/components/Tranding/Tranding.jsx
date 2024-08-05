import React, { useEffect, useState } from "react";
import "./Tranding.css";
import axios from "axios";
import { motion } from "framer-motion";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
const Tranding = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 3;

  const [data, setData] = useState([]);
  const fetchTrendings = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDc2M2ViMjE5NTFjZTExNjc3NGVkMjRiZWVmZjNmOSIsIm5iZiI6MTcyMTk3NTg4MC43NTM4OTEsInN1YiI6IjY2YTMzOTMwMGZjODMyMDJjMzQ2OTg5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2986_3_YCjkqbPvFYKOKcdHCUPPTY9sonhnlJL-X7AI",
      },
    };

    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );
    setData(response.data.results);
  };
  useEffect(() => {
    fetchTrendings();
  }, []);
  const totalPage = Math.ceil(data.length / itemPerPage);
  const handleClickNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const startIndex = (currentPage - 1) * itemPerPage;
  const currentData = data.slice(startIndex, startIndex + itemPerPage);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-10 pb-6 w-[98%]">
        <div className="">
          <h2 className="text-xl font-semibold">Trending</h2>
        </div>
        <div
          onClick={handleClickNext}
          className=" flex flex-row justify-center items-center gap-3 hover:cursor-pointer hover:text-red-500"
        >
          <h3 className=" text-gray-500">View All</h3>
          <GrLinkNext className="text-gray-500" />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap gap-5">
        {currentData.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              key={item.id}
              className="trandings-info"
            >
              <div>
              <Link to={`/films/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className=" rounded-[10px] md:w-[340px] md:h-[320px] w-[90%] h-[80%] "
                  alt=""
                />
                </Link>
                <Link to={`/playvid/${item.id}`}>
                <button className="play-button">
                  <img src={props.playImgsrc} alt="" />
                </button></Link>
                <div className="time-star">
                  <p>
                    <img src={props.timeSrc} alt="" />
                    {props.time}
                  </p>
                  <p>
                    <img src={props.starSrc} alt="" />
                    {props.star}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>{item.title}</h3>
                <div className="cont-button">
                  {props.btn1 && <button>{props.btn1}</button>}
                  {props.btn2 && <button>{props.btn2}</button>}
                  {props.btn3 && <button>{props.btn3}</button>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tranding;

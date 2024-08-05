import React, { useEffect, useState } from "react";
import "./Recent.css";
import axios from "axios";
import { motion } from "framer-motion";

import NextIcon from "../../assets/nextAllow.png";
import { Link } from "react-router-dom";

const Recent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchRecent = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDc2M2ViMjE5NTFjZTExNjc3NGVkMjRiZWVmZjNmOSIsIm5iZiI6MTcyMTk3NzQ5NS4yOTU1Nywic3ViIjoiNjZhMzM5MzAwZmM4MzIwMmMzNDY5ODk1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.U7ZPHBPcZSYuuVNORW3eyhff7DW1BrZZm9dilKmHNfg",
      },
    };
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    // console.log(response.data.results)
    setData(response.data.results);
  };
  useEffect(() => {
    fetchRecent();
  }, []);
  const itemPerPage = 4;
  const totalPages = Math.ceil(data.length / itemPerPage);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const startIndex = (currentPage - 1) * itemPerPage;
  const currentData = data.slice(startIndex, startIndex + itemPerPage);
  // console.log(data);
  return (
    <div className="flex flex-row flex-wrap gap-3  ">
      {currentData.map((item) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            key={item.id}
            className="flex w-[225px] gap-2 h-[110px]"
          >
            <div className="">
              <Link to={`/films/${item.id}`} state={{ item }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                  className="w-[100px] h-[108px] rounded-[5px]"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2 font-poppian font-[250] text-[15px] leading-5 mt-3">
              <p>{item.original_title}</p>
              <p>Series/S 1/EP 8</p>
              <p>{item.release_date}</p>
            </div>
          </motion.div>
        );
      })}
      <div className="next-arrow  ">
        <div
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
          className="hover:bg-gray-200 hover:cursor-pointer"
        >
          <img src={NextIcon} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Recent;

import React, { useState,useEffect } from "react";
import "./home.css";
import WatchImg from "../../assets/watchNow.png";
import WatchImg1 from "../../assets/watchLater.png";
import Calendar from "../../assets/calend.png";
import Time from "../../assets/time.png";
import Star from "../../assets/star.png";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Films from "../Films/Films";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);

const FetchNowPlaying = async () => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDc2M2ViMjE5NTFjZTExNjc3NGVkMjRiZWVmZjNmOSIsIm5iZiI6MTcyMjIzMjY5OS4yODM5NTEsInN1YiI6IjY2YTMzOTMwMGZjODMyMDJjMzQ2OTg5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G2AkB5uaazkzPRBG4fvtsdMtZjtCRIHXlqNy2CqmpR4'
    }
  };
  
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    setData(response.data.results);
    // console.log(response.data.results);
  } catch (e) {
    console.log('Error is: ' + e);
  }
};
  useEffect(()=>{
    FetchNowPlaying()
  },[])
  // console.log(data)
  return (<>
    <div className="relative z-10"><Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
  >
      { 
        data.map((item)=>{
          return(
          <SwiperSlide key={item.id}>
            
    <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${item.poster_path}')` }}
    className="home-container mt-[75px]">
    <div
      className="flex flex-row flex-wrap md:top-[240px] md:left-[440px] md:gap-10
    left-[100px] top-[190px] gap-5 relative"
    >
      <Link to={`/playvid/${item.id}`}>
      <button className="watch-now">
        Whatch Now <img src={WatchImg} alt="" />
      </button>
      </Link>
      <Link to={`/films/${item.id}`}>
      <button className="watch-leter">
        Whatch Later <img src={WatchImg1} alt="" />{" "}
      </button>
      </Link>
    </div>
    <div className="relative md:top-[240px] top-48 md:left-[100px] left-3 flex flex-col gap-5 ">
      <div className="title md:text-[30px] text-[20px] ">
        <p>{item.original_title}</p>
      </div>
      <div className="about-movie ">
        <button className="bg-white">Action</button>
        <button className="bg-white">Adventure</button>
        <button className="bg-white">Science Friction</button>
        <p className="flex flex-row justify-center items-center">
          <img src={Calendar} alt="" />
          2022
        </p>
        <p className="flex flex-row  justify-center items-center">
          <img src={Time} alt="" />
          3:12:00
        </p>
        <p className="flex flex-row justify-center items-center">
          <img src={Star} alt="" />
          8.5
        </p>
      </div>
      <div className="description ">
        <p>{item.overview} </p>
      </div>
    </div>
    {/* <div
      className="move-next
relative md:top-[250px] top-56 md:left-[600px] left-20 w-[184px]  h-5 flex  flex-row justify-center items-center gap-4

}
  "
    >
      <div className="active"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}
  </div>
  </SwiperSlide> 
          )
        })
      }
    </Swiper>
    </div>
      <Films/>
    </>
  );
};

export default Home;

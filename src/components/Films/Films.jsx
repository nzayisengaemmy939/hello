import React from "react";
import "./Films.css";
import Recent from "../Recent/Recent";
import Tranding from "../Tranding/Tranding";
import Flash from "../../assets/flash.png";
import Medellin from "../../assets/medellin.png";
import Play from "../../assets/play-button.png";
import Time from "../../assets/time.png";
import Star from "../../assets/star.png";
import NewReleased from "../NewReleased/NewReleased";
import SiloS from "../../assets/siloSeries.png";
import Series from "../NewReleased/Series";
import Recommended from "../NewReleased/Recommended";

const Films = () => {
  return (
    <>
      <div className="films-container md:px-24 p-10 overflow-x-hidden ">
        <div style={{ paddingBottom: "20px", width: "200px" }}>
          <h2 className=" text-xl">Recent Updated</h2>
        </div>
        <div className="recent-container ">
          <Recent
            imgsrc={Flash}
            title="The Flash"
            episode="Series/S 2/EP 9"
            date="11/05/23"
          />
        </div>

        <div className="trandings/">
          <Tranding
            imageSrc={Medellin}
            playImgsrc={Play}
            timeSrc={Time}
            time="3:12:00"
            starSrc={Star}
            star="8.0"
            title="Madellin"
            btn1=""
            btn2="Action"
            btn3="Comedy"
          />
        </div>

        <div className="flex flex-row flex-wrap">
          <NewReleased timeSrc={Time} btn1="HD" btn2="3:12:00" ep="" />
        </div>

        <div className="flex flex-row flex-wrap">
          <Series
            profSrc={SiloS}
            title="Silo"
            timeSrc=""
            btn1="HD"
            btn2="Season 1"
            ep="EP 6"
          />
        </div>

        <div className="new-container">
          <Recommended timeSrc={Time} btn1="CAM" btn2="3:12:00" ep="" />
        </div>
      </div>
      
    </>
  );
};

export default Films;

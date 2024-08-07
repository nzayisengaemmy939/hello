import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import Recent from './components/Recent/Recent'
import { motion } from 'framer-motion'
const FullMovie = () => {
  const {id}=useParams()
  const [data,setData]=useState([])
  useEffect(()=>{
    const playMovie=async ()=>{
      const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=00763eb21951ce116774ed24beeff3f9`)
    setData(response.data?.results[1])
    }
    playMovie()
  },[])
  const opts={
    height:"500px",
    width:"600px",
    playerVars:{
      autoplay:1,
    }
  }
  return (
    <div className='flex md:flex-row flex-col items-center pt-[14vh]  min-h-screen bg-black md:pl-20 '>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0, x:-100}}
      animate={{opacity:1 ,x:0}}
      transition={{duration:0.5}}
      className="w-[70%] mt-[-20px]">
    <YouTube videoId={`${data.key}`} opts={opts}/>
      </motion.div>
     
    </div>
  )
}

export default FullMovie

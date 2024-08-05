import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
function SingleMovie() {
  const[data,setData]=useState([])
  const {id}=useParams()
  console.log(data)
  useEffect(()=>{
    const fetchMovieDetail= async()=>{
      const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=00763eb21951ce116774ed24beeff3f9`)
      setData(response.data)

    }
    fetchMovieDetail();
  },[])

  return (
    <div className=' bg-black flex p-5 mt-[12vh] h-full md:h-screen  justify-center md:flex-row flex-col  '>
    <motion.div 
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.7}}
    className="flex flex-col gap-5 w-[80%] items-center  md:items-end">
      <Link to={`/playvid/${data.id}`}>
      <img className='md:w-[400px] h-[400px] rounded-xl' 
      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}  />
      <p className=" text-2xl font-bold hover:cursor-pointer hover:text-blue-500">
        {data.original_title} 
      </p>  
      </Link>
      
    </motion.div>
    
    <motion.div
    initial={{opacity:0,y:500}}
    animate={{opacity:1,y:0}}
    transition={{duration:1.5}}
    className="w-[80%] h-2/3 p-10 flex flex-col gap-2 ">
    <p className="text-[20px] text-gray-400 font-bold">{data.original_title} </p>
    <p className="text-gray-400">Country: {data.origin_country} </p>
    <p className="text-gray-400">Date: {data.release_date} </p>
    <p className="text-[20px] text-gray-400 font-bold">{data.tagline} </p>
    <p className="">{data.overview}</p>

    <Link to={`/playvid/${data.id}`}>
    <button className='px-8 py-5 text-black bg-white border-none hover:bg-gray-200 rounded-xl 
    text-xl font-bold hover:text-red-700 mt-4'>Play Now</button>
    </Link>
    </motion.div>
    </div>

  )
}

export default SingleMovie

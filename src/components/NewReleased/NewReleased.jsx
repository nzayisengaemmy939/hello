import { useEffect, useState } from 'react'
import './NewReleased.css'
import axios from 'axios'
import { motion } from 'framer-motion'
import { GrLinkNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'
function NewReleased({timeSrc,btn1,btn2,ep}){
  const [data ,setData]=useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const itemPerPage=4
  const fetchNewMovies=async ()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDc2M2ViMjE5NTFjZTExNjc3NGVkMjRiZWVmZjNmOSIsIm5iZiI6MTcyMTk3NTg4MC43NTM4OTEsInN1YiI6IjY2YTMzOTMwMGZjODMyMDJjMzQ2OTg5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2986_3_YCjkqbPvFYKOKcdHCUPPTY9sonhnlJL-X7AI'
      }
    };
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    setData(response.data.results)
  }
  useEffect(()=>{
    fetchNewMovies()
  },[])
  // console.log(data)
  const totalPages=Math.ceil(data.length/itemPerPage)
  const handleClickNext=()=>{
    if(currentPage<totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const startIndex=(currentPage-1)*itemPerPage
  const currentData=data.slice(startIndex,startIndex+itemPerPage)
  return(
  <>
  <div className="flex justify-between items-center mt-10 pb-6 w-[98%]">
  <div className="">
    <h2 className="text-xl font-semibold">New Release - Movies</h2>
  </div>
  <div onClick={handleClickNext}
   className=" flex flex-row justify-center items-center gap-3 hover:cursor-pointer">
    <h3 style={{ color: "gray" }}>View All</h3>
    <GrLinkNext />
  </div>
</div>
  <div className='flex flex-row flex-wrap gap-3 justify-center items-center'>
    {
      currentData.map((item)=>{
        return(
          <motion.div 
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.7}}
          key={item.id} className="md:w-[255px]">
            
          <Link to={`/films/${item.id}`}>
          <div style={{position:"relative"}} className='profile'>
      <img className='md:w-[250px] md:h-[330px] rounded-[10px]'
      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
      {ep&&(<p style={{
        position:"absolute",
        background:"red",
        color:"white",
        top:"10px",
        left:"10px",
        borderRadius:"5px",
        fontWeight:"500",
        padding:"5px"
      }}>{ep}</p>)}
    </div>
          </Link>

    <div className='new-descript mt-4'>
      <p>{item.title}</p>
      <div className='flex flex-row justify-center items-center'>
      <button className='hd-btn'>{btn1}</button>
      <button className=' flex flex-row '>{btn2&&(<img src={timeSrc} alt="" />)}{btn2}</button>
      </div>
      </div>
          </motion.div>
        )
      })
    }
  </div>
  </>)
}
export default NewReleased
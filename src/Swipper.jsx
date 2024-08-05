import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Swipper =() => {
  return (
    <Swiper 
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide className=' text-black w-screen h-screen bg-slate-400'>Slide 1</SwiperSlide>
      <SwiperSlide className=' text-black w-screen h-screen bg-slate-400'>Slide 2</SwiperSlide>
      <SwiperSlide className=' text-black w-screen h-screen bg-slate-400'>Slide 3</SwiperSlide>
      <SwiperSlide className=' text-black w-screen h-screen bg-slate-400'>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Swipper
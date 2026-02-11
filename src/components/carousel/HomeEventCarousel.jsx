import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeEventCarousel.css";

import { Navigation, Pagination } from "swiper/modules";
import HomeEventCard from "../EventsCards/HomeEventCard";
import { EventData } from "../../../public/assets/EventData";

function HomeEventCarousel() {
  return (
    <div className="w-full  relative ">
      <div className="cursor-pointer font-medium carousel-previous-container rounded-full absolute -left-6 text-black text-center bg-[#ffb76e] top-1/2 -translate-y-1/2 font-poppins leading-10 text-2xl shadow-md w-10 h-10 z-10">
        &lt;
      </div>
      <div className="cursor-pointer font-medium carousel-next-container rounded-full absolute -right-6 text-black text-center bg-[#ffb76e] top-1/2 -translate-y-1/2 font-poppins leading-10 text-2xl shadow-md w-10 h-10 z-10">
        &gt;
      </div>
      <div className="w-full">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".carousel-next-container",
            prevEl: ".carousel-previous-container",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper pb-16 pt-4"
        >
          {EventData.map((event) => (
            <SwiperSlide className="flex justify-center">
              <HomeEventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeEventCarousel;

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./HomeEventCarousel.css";

import { Navigation, Pagination } from "swiper/modules";
import TeamCards from "../TeamCards/TeamCrads";
import HomeEventCard from "../EventsCard/HomeEventCard";

function HomeEventCarousel() {
  return (
    <div className="w-full relative">
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
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".carousel-next-container",
            prevEl: ".carousel-previous-container",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper pb-12"
        >
          <SwiperSlide className="flex justify-center">
            <HomeEventCard event={event} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <HomeEventCard event={event} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <HomeEventCard event={event} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <HomeEventCard event={event} />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <HomeEventCard event={event} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeEventCarousel;
const event = {
  title: "Old Age Home Visit",
  image:
    "data:image/jpeg;base64,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",
  venue: "Central Park",
  location: "New York City, United States",
  date: "Sunday, January 01, 2023 - 06:00 PM",
  price: "99.99",
};

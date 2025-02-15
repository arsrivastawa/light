import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeTeamCarousel.css";


import { Autoplay, Navigation } from "swiper/modules";
import TeamCards from "../TeamCards/TeamCrads";



function HomeTeamCarousel({images}) {
  return (
    <div className="home-team-carousel-container w-80">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index} className="m-0">
              <TeamCards
                animate={false}
                name={`${image.name} Team`}
                ImgUrl={`/assets/teamLogos/${image.url}.png`}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}

export default HomeTeamCarousel;

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeTeamCarousel.css";

import { Autoplay, Navigation } from "swiper/modules";
import TeamCards from "../TeamCards/TeamCrads";

function HomeTeamCarousel() {
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
        <SwiperSlide className="m-0">
          <TeamCards
            animate={false}
            name={"Web Development Team"}
            ImgUrl={
              "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <TeamCards
            animate={false}
            name={"Content Team"}
            ImgUrl={
              "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <TeamCards
            animate={false}
            name={"SSD Team"}
            ImgUrl={
              "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <TeamCards
            animate={false}
            name={"design team"}
            ImgUrl={
              "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="m-0">
          <TeamCards
            animate={false}
            name={"Sponsorship team"}
            ImgUrl={
              "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeTeamCarousel;

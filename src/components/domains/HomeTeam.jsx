import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import MembersCard from "../membersCard/MembersCard";
import Title from "../titles/Title";

export default function () {
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (document.documentElement.clientWidth < 640) {
      setMobileWidth(true);
    }
  }, []);
  return (
    <>
      <div className="w-full grid place-items-center">
        <div className="members-heading-container">
          <Title content={"Our Team"} capitalize={true} />
        </div>
        {mobileWidth ? (
          <div className="w-80">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
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
                <MembersCard
                  name={"Web Development Team"}
                  ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
                />
              </SwiperSlide>
              <SwiperSlide className="m-0">
                <MembersCard
                  name={"Content Team"}
                  ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
                />
              </SwiperSlide>
              <SwiperSlide className="m-0">
                <MembersCard
                  name={"SSD Team"}
                  ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
                />
              </SwiperSlide>
              <SwiperSlide className="m-0">
                <MembersCard
                  name={"design team"}
                  ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
                />
              </SwiperSlide>
              <SwiperSlide className="m-0">
                <MembersCard
                  name={"Sponsorship team"}
                  ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        ) : (
          <div className="w-full grid place-items-center">
            <div className="MembersCard-container grid place-items-center">
              <MembersCard
                name={"Web Development Team"}
                ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
              />
              <MembersCard
                name={"Content Team"}
                ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
              />
              <MembersCard
                name={"SSD Team"}
                ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
              />
              <MembersCard
                name={"Sponsorship Team"}
                ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
              />
              <MembersCard
                name={"Design Team"}
                ImgUrl={"https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

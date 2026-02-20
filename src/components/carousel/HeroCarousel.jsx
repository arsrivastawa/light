import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = ["CaImg1", "CaImg2", "CaImg3", "CaImg4"];

function HeroCarousel() {
  return (
    <>
      <div className="w-full overflow-hidden relative max-h-[90vh] mb-4">
        <div className="grid place-items-center w-full h-full bg-[#00000097] absolute top-0 left-0">
          <h1 className="text-[#fff] capitalize text-center font-roboto my-6 font-medium text-2xl sm:text-6xl">
            Building a Brighter Tomorrow
            <br /> Together
          </h1>
        </div>
        <Carousel
          stopOnHover={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          swipeable={false}
          animationHandler={"fade"}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={`/assets/carouseLImg/${image}.jpg`} alt="carousel" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default HeroCarousel;

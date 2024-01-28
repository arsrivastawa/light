import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../../assets/carouseLImg/CaImg1.jpg";
import Img2 from "../../assets/carouseLImg/CaImg2.jpg";
import Img3 from "../../assets/carouseLImg/CaImg3.jpg";
import Img4 from "../../assets/carouseLImg/CaImg4.jpg";

function HeroCarousel() {
  return (
    <>
      <div className="w-full overflow-hidden relative max-h-[90vh] mb-4">
        <div className="grid place-items-center w-full h-full bg-[#00000078] absolute top-0 left-0">
          <h1 class="text-[#fff] capitalize text-center font-roboto my-6 font-semibold text-4xl sm:text-6xl">
            A text after discussions
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
          <div>
            <img src={Img1} />
          </div>
          <div>
            <img src={Img2} />
          </div>
          <div>
            <img src={Img3} />
          </div>
          <div>
            <img src={Img4} />
          </div>
          <div>
            <img src={Img2} />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HeroCarousel;

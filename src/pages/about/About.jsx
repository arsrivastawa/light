import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import "./About.css";
import Title, { SubTitle } from "../../components/titles/Title";
import Img from "../../assets/carouseLImg/CaImg3.jpg";

function About() {
  useEffect(() => {
    document.title = "About LiGHT Sindri";
  });
  return (
    <Container>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full">
          <Title
            content={"About Light Sindri"}
            uppercase={true}
            align={"center"}
          />
        </div>
        <div className="blurred-wrapper z-50 w-full relative bg-transparent before:top-[10%] desktop:before:w-64 before:w-40 desktop:before:top-[20%] before:left-[5%]">
          <div className="about-hero flex flex-col desktop:flex-row items- gap-3 w-full py-5 lg:py-12 h-full px-4 md:px-12 lg:px-20 xl:px-32">
            <div className="w-full desktop:w-[60%] flex flex-col justify-center">
              <div className="w-full">
                <SubTitle marginY={"5"} content={"About Us"} align={"start"} />
              </div>
              <p className="py-5 font-roboto w-full text-sm sm:text-base sm:leading-5">
                LiGHT Sindri is an NGO committed to community upliftment and
                sustainable development. They provide vital services, education,
                and opportunities to disadvantaged communities, aiming to create
                positive change and enhance quality of life for all individuals,
                regardless of their socio-economic status. Through diverse
                programs and initiatives, LiGHT Sindri endeavors to empower
                communities, encourage innovation, and shape a promising future
                for generations to come. LiGHT Sindri is an NGO committed to
                community upliftment and sustainable development. They provide
                vital services, education, and opportunities to disadvantaged
                communities, aiming to create positive change and enhance
                quality of life for all individuals, regardless of their
                socio-economic status. Through diverse programs and initiatives,
                LiGHT Sindri endeavors to empower communities, encourage
                innovation, and shape a promising future for generations to
                come.
              </p>
            </div>
            <div className="w-full desktop:w-[40%] grid place-items-center">
              <div className="w-full overflow-hidden rounded-xl">
                <img className="w-full" src={Img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="blurred-wrapper z-50 w-full relative bg-transparent before:top-[20%] desktop:before:w-64 before:w-32 desktop:before:top-[20%] before:left-[65%]">
          <div className="about-hero flex gap-3 flex-col desktop:flex-row-reverse w-full py-5 lg:py-12 h-full sm:px-4 md:px-12 lg:px-20 xl:px-32">
            <div className="w-full desktop:w-[60%] flex flex-col justify-center">
              <div className="w-full">
                <SubTitle
                  marginY={"5"}
                  content={"Our Mission"}
                  align={"start"}
                />
              </div>
              <p className="py-5 font-roboto w-full text-sm sm:text-base sm:leading-5">
                LiGHT Sindri is an NGO committed to community upliftment and
                sustainable development. They provide vital services, education,
                and opportunities to disadvantaged communities, aiming to create
                positive change and enhance quality of life for all individuals,
                regardless of their socio-economic status. Through diverse
                programs and initiatives, LiGHT Sindri endeavors to empower
                communities, encourage innovation, and shape a promising future
                for generations to come. LiGHT Sindri is an NGO committed to
                community upliftment and sustainable development. They provide
                vital services, education, and opportunities to disadvantaged
                communities, aiming to create positive change and enhance
                quality of life for all individuals, regardless of their
                socio-economic status. Through diverse programs and initiatives,
                LiGHT Sindri endeavors to empower communities, encourage
                innovation, and shape a promising future for generations to
                come.
              </p>
            </div>
            <div className="w-full desktop:w-[40%] grid place-items-center">
              <div className="w-full overflow-hidden rounded-xl">
                <img className="w-full" src={Img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;

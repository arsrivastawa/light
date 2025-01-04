import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import "./About.css";
import Title, { SubTitle } from "../../components/titles/Title";

function About() {
  useEffect(() => {
    document.title = "About LiGHT Sindri";
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full">
          <Title
            content={"About LiGHT Sindri"}
            // uppercase={true}
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
                Since its founding in May 2021 with just nine members, LiGHT
                Sindri has quickly grown to become a powerful organization with
                31 active members who are dedicated to upholding their purpose
                of uplifting underprivileged communities. Their effective
                completion of five events throughout their 2022–2023 reign is
                evidence of their commitment to bringing about constructive
                change. LiGHT Sindri is now prepared to start a new chapter of
                influence and expansion as they look forward to the future with
                great anticipation. They want to further establish themselves as
                an independent hub committed to promoting a better, more
                inclusive society, and they have big aspirations for the Sindri
                region and beyond. Their story serves as a tribute to the
                strength of group effort and steadfast dedication to changing
                the world.
              </p>
            </div>
            <div className="w-full desktop:w-[40%] grid place-items-center">
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  className="w-full"
                  src="/assets/carouselImg/CaImg3.jpg"
                  alt=""
                />
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
                <img
                  className="w-full"
                  src="/assets/carouselImg/CaImg4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blurred-wrapper z-50 w-full relative bg-transparent before:top-[20%] desktop:before:w-64 before:w-32 desktop:before:top-[20%] before:left-[65%]">
          <div className="about-hero flex gap-3 flex-col desktop:flex-row w-full py-5 lg:py-12 h-full sm:px-4 md:px-12 lg:px-20 xl:px-32">
            <div className="w-full desktop:w-[60%] flex flex-col justify-center">
              <div className="w-full">
                <SubTitle
                  marginY={"5"}
                  content={"Our Vision"}
                  align={"start"}
                />
              </div>
              <p className="py-5 font-roboto w-full text-sm sm:text-base sm:leading-5">
                LiGHT Sindri envisions a world where every individual,
                regardless of their socio-economic background, has access to
                education, resources, and opportunities to lead a dignified and
                fulfilling life. By fostering an environment of inclusivity and
                innovation, the organization aspires to create a ripple effect
                of sustainable progress that transcends boundaries and
                generations. LiGHT Sindri aims to become a beacon of hope and
                transformation, inspiring communities to unite and tackle
                challenges with collective strength and resilience. Their vision
                extends beyond immediate aid, striving to build self-sustaining
                ecosystems where empowerment and equality pave the way for a
                brighter, more compassionate society. As a cornerstone of
                positive change, LiGHT Sindri seeks to leave an indelible impact
                on the Sindri region and beyond, driving humanity toward a
                shared vision of prosperity and harmony.
              </p>
            </div>
            <div className="w-full desktop:w-[40%] grid place-items-center">
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  className="w-full"
                  src="/assets/carouselImg/CaImg2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;

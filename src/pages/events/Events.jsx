import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import Title, { SubTitle } from "../../components/titles/Title";
import Img1 from "../../assets/carouseLImg/CaImg1.jpg";
import Img2 from "../../assets/carouseLImg/CaImg2.jpg";

function Events() {
  useEffect(() => {
    document.title = "Our Events";
  });
  return (
    <Container>
      <div className="grid place-items-center">
        <div>
          <Title content={"Our Events"} uppercase={true} />
        </div>
        <div className="w-full events-container px-20 py-10">
          <div className="w-full individual-event">
            <SubTitle
              align={"start"}
              capitalize={true}
              content={"Old Age home Visit"}
            />
          </div>
          <div className="w-full">
            <section class="bg-white">
              <div class="gap-16 items-center py-8 px-4 w-full lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl font-josefin tracking-tight font-medium text-gray-900 dark:text-white">
                    LiGHT Sindri's Heartwarming Visit to Old Age Home Brightens
                    Residents' Day!
                  </h2>
                  <p class="mb-4 font-roboto font-normal">
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick, but
                    big enough to deliver the scope you want at the pace you
                    need. Small enough to be simple and quick, but big enough to
                    deliver the scope you want at the pace you need.
                  </p>
                  <p className="font-roboto font-normal">
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick.
                  </p>
                </div>
                <div class="grid h-full grid-cols-2 gap-4 mt-8">
                  <img
                    class="h-full object-cover rounded-lg"
                    src={Img1}
                    alt="office content 1"
                  />
                  <img
                    class="mt-4 h-full object-cover lg:mt-10 rounded-lg"
                    src={Img2}
                    alt="office content 2"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="w-full events-container px-20 py-10">
          <div className="w-full individual-event">
            <SubTitle
              align={"start"}
              capitalize={true}
              content={"Old Age home Visit"}
            />
          </div>
          <div className="w-full">
            <section class="bg-white">
              <div class="gap-16 items-center py-8 px-4 w-full lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="grid h-full grid-cols-2 gap-4 mt-8">
                  <img
                    class="h-full object-cover rounded-lg"
                    src={Img1}
                    alt="office content 1"
                  />
                  <img
                    class="mt-4 h-full object-cover lg:mt-10 rounded-lg"
                    src={Img2}
                    alt="office content 2"
                  />
                </div>
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl font-josefin tracking-tight font-medium text-gray-900 dark:text-white">
                    LiGHT Sindri's Heartwarming Visit to Old Age Home Brightens
                    Residents' Day!
                  </h2>
                  <p class="mb-4 font-normal">
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick, but
                    big enough to deliver the scope you want at the pace you
                    need. Small enough to be simple and quick, but big enough to
                    deliver the scope you want at the pace you need.
                  </p>
                  <p className="font-normal">
                    We are strategists, designers and developers. Innovators and
                    problem solvers. Small enough to be simple and quick.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
}
let data = [
  {
    title: "Old Age home Visit",
    images: [Img1, Img2],
    description:
      "LiGHT Sindri's Heartwarming Visit to Old Age Home Brightens Residents' Day!",
    content: [
      "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough todeliver the scope you want at the pace you need.",
      "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
    ],
  },
];

export default Events;

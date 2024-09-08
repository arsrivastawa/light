import React from "react";
import { SubTitle } from "../titles/Title";

function EventCard({ title, brief, index, content, Imgs }) {
  console.log(typeof index);
  return (
    <div className="w-full events-container px-5 xs:px-12 sm:px-16 desktop:px-20 py-10">
      <div className="w-full individual-event">
        <SubTitle align={"start"} capitalize={true} content={title} />
      </div>
      <div className="w-full">
        <section class="bg-white">
          <div
            class={`gap-10 xs:gap-12 sm:gap-14 desktop:gap-16 flex items-center flex-col ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            } justify-between py-8 px-4 w-full lg:py-16 lg:px-6`}
          >
            <div class="font-light w-full text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-4xl font-josefin tracking-tight font-medium text-gray-900 dark:text-white">
                {brief}
              </h2>
              {content &&
                content.map((eventContent, index) => (
                  <p
                    className={`${
                      index && index == 0 ? "mb-4" : ""
                    } font-roboto font-normal`}
                  >
                    {eventContent}
                  </p>
                ))}
            </div>
            <div class="grid w-full h-full grid-cols-2 gap-4 mt-8">
              {Imgs.map((Img, indx) => (
                <img
                  class={`h-full ${
                    indx % 2 == 0 ? "mt-6" : "mb-6"
                  } object-cover rounded-lg`}
                  src={`/assets/Gallery/${Img}.jpg`}
                  alt="office content 1"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventCard;

import React from "react";
import { SubTitle } from "../titles/Title";

function EventCard({ title, brief, index, content, Imgs }) {
  return (
    <div className="w-full px-5 xs:px-12 sm:px-16 desktop:px-20 py-14">
     
      <div className="mb-8">
        <SubTitle align="start" capitalize={true} content={title} />
      </div>

      
      <section className="bg-yellow-200 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:bg-yellow-300 transition-all duration-500">
        <div
          className={`flex flex-col gap-12 xs:gap-14 sm:gap-16 xl:gap-20
          ${
            index % 2 === 0
              ? "xl:flex-row"
              : "xl:flex-row-reverse"
          }
          items-center justify-between px-6 sm:px-10 py-12`}
        >
         
          <div className="w-full xl:w-1/2 text-gray-600">
            <h2 className="mb-6 text-3xl sm:text-4xl font-josefin font-semibold tracking-tight text-gray-900 leading-snug">
              {brief}
            </h2>

            {content &&
              content.map((eventContent, i) => (
                <p
                  key={i}
                  className={`font-roboto text-base sm:text-lg leading-relaxed ${
                    i !== content.length - 1 ? "mb-4" : ""
                  }`}
                >
                  {eventContent}
                </p>
              ))}
          </div>

          
          <div className="w-full xl:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
            {Imgs.map((Img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl group"
              >
                <img
                  src={`/assets/Gallery/${Img}.jpg`}
                  alt="event gallery"
                  className="h-full w-full object-cover
                  transform transition-all duration-500
                  group-hover:scale-110
                  group-hover:shadow-[0_0_40px_rgba(255,170,85,0.55)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventCard;


import React from "react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

function MediaCoverageSectionCard({ event }) {
  return (
    <div
      className="
      group relative w-full max-w-[22rem] sm:max-w-[24rem] h-[320px]
      bg-white/80 backdrop-blur
      border border-gray-200 rounded-2xl p-4 mb-6
      shadow-md hover:shadow-2xl
      transition-all duration-300
      hover:-translate-y-2
      overflow-hidden
      hover:bg-orange-200"
    >
      

     
      <div className="flex flex-col h-full gap-4">
     
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={`/assets/mediaCoverages/${event.image}`}
            alt={event.title}
            className="
            w-full aspect-[1.7] object-contain
            transition-transform duration-300
            group-hover:scale-105
            "
          />
        </div>

        <div className="flex-1 flex items-center justify-center px-2">
          <h2 className="text-xl sm:text-2xl font-bold capitalize font-poppins text-center leading-snug">
            {event.title}
          </h2>
        </div>
      </div>
    </div>
  );
}


export default MediaCoverageSectionCard;

import React from "react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";

function MediaCoverageSectionCard({ event }) {
  return (
    <>
      <div className="bg-white border w-full xs:w-96 sm:w-[98%] lg:w-96 border-gray-200 rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <img
              src={`/assets/mediaCoverages/${event.image}`}
              alt={event.title}
              className="w-full aspect-[1.7] object-contain rounded-lg mr-4"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-bold capitalize font-poppins">
              {event.title}
            </h2>
            {/* <div className="flex text-base items-center">{event.breif}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaCoverageSectionCard;

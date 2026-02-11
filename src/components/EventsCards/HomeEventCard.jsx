import React from "react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import NavButton from "../navButtons/NavButton";

function HomeEventCard({ event }) {
 return (
  <div
    className="
    relative h-[520px] w-full xs:w-96 rounded-2xl p-[2px]
    bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300
    animate-gradient-x
    hover:scale-[1.06] transition-all duration-300
    "
  >
    
    <div
      className="
      relative h-full w-full rounded-2xl p-4
      bg-yellow-200
      shadow-xl hover:shadow-2xl
      flex flex-col overflow-hidden group
      "
    >
      
      <div
        className="
        absolute -top-1/2 -left-1/2 w-[200%] h-[200%]
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        rotate-12 opacity-0 group-hover:opacity-100
        transition duration-700
        "
      />

      <div className="relative overflow-hidden rounded-xl">
        <img
          src={event.image}
          alt={event.title}
          className="
          w-full aspect-[1.7] object-cover rounded-xl
          transition-transform duration-500
          group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      </div>

      <div className="relative flex flex-col gap-2 flex-1 mt-4">
        <h2 className="text-2xl font-bold capitalize font-poppins">
          {event.title}
        </h2>

        <div className="flex items-center text-lg">
          <IoLocationOutline />
          <span className="ml-3 capitalize font-roboto text-sm text-slate-700">
            {event.location}
          </span>
        </div>

        <div className="flex items-center text-lg">
          <IoCalendarOutline />
          <span className="ml-3 font-roboto text-sm text-slate-700">
            {event.date}
          </span>
        </div>

        <div className="text-sm text-slate-800 leading-relaxed line-clamp-3">
          {event.breif}
        </div>

      
        <div className="mt-auto mb-6 w-full flex justify-center gap-3">
          <NavButton navigateTo="/events" title="Know More" />
          <NavButton
            title="See Post"
            linkTo={
              event.instaLink
                ? event.instaLink
                : "https://www.instagram.com/light.sindri/"
            }
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default HomeEventCard;

import React from "react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import NavButton from "../navButtons/NavButton";

function HomeEventCard({ event }) {
  return (
    <>
      <div className="bg-white border w-full xs:w-96 border-gray-200 rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <img
              src={event.image}
              alt={event.title}
              className="w-full aspect-[1.7] object-cover rounded-lg mr-4"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-bold capitalize font-poppins">
              {event.title}
            </h2>
            <div className="flex text-xl items-center">
              <IoLocationOutline />
              <span className="ml-5 capitalize font-roboto text-base text-slate-500">
                {event.location}
              </span>
            </div>
            <div className="flex text-xl items-center">
              <IoCalendarOutline />
              <span className="ml-5 font-roboto text-base text-slate-500">
                {event.date}
              </span>
            </div>
            <div className="flex text-base items-center">{event.breif}</div>
            <div className="w-full mt-4 gap-2 flex justify-center">
              <div className="w-fit">
                <NavButton navigateTo={"/events"} title={"Know More"} />
              </div>
              <div className="w-fit">
                <NavButton
                  title={"See Post"}
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
      </div>
    </>
  );
}

export default HomeEventCard;

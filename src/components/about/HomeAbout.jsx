import React from "react";
import Title from "../titles/Title";
import NavButton from "../navButtons/NavButton";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <div className="w-full p-5 sm:p-10 flex flex-col justify-center items-center">
      <Title content={"about us"} capitalize={true} align={"center"} />
      <div className="font-roboto lg:w-3/5 text-sm sm:text-xl sm:leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit
        totam modi ducimus ea error vel voluptate sint? Quidem ex eum delectus
        illum officia facilis inventore esse deserunt quam repellat molestias
        labore fugiat accusantium a nostrum odit dolor, nulla voluptatibus.
        Ullam, quia commodi possimus incidunt expedita veniam nam unde et
        aliquid tempore iste?
        <div className="w-fit mt-4">
          <Link to={"/about"}>
            <h1 className="cursor-pointer uppercase duration-150 border-2 border-[#ffa4476b] py-1 px-4 focus:outline-none hover:bg-[#ffa4476b] rounded text-lg">
              know more{" "}
              <span className="font-semibold text-xl -mb-1">&gt;</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;

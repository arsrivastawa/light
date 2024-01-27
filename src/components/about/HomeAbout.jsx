import React from "react";
import Title from "../titles/Title";

function HomeAbout() {
  return (
    <div className="w-full p-10 flex flex-col justify-center items-center">
      <Title content={"about us"} capitalize={true} align={"center"} />
      <div className="font-roboto lg:w-3/5 text-sm sm:text-xl sm:leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit totam modi ducimus ea error vel voluptate sint? Quidem ex eum delectus illum officia facilis inventore esse deserunt quam repellat molestias labore fugiat accusantium a nostrum odit dolor, nulla voluptatibus. Ullam, quia commodi possimus incidunt expedita veniam nam unde et aliquid tempore iste? </div>
    </div>
  );
}

export default HomeAbout;

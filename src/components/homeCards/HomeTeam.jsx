import React from "react";
import MembersCard from "../membersCard/MembersCard";
import "./HomeTeam.css";

function HomeTeam({ images }) {
  return (
    <div className="w-full flex justify-center py-10">
      <div
        className="
        MembersCard-container
        w-full max-w-7xl
        flex flex-wrap
        justify-center
        gap-8
        px-4
        "
      >
        {images.map((image, index) => (
          <MembersCard
            key={index}
            animate={false}
            name={`${image.name} Team`}
            ImgUrl={`/assets/teamLogos/${image.url}.png`}
          />
        ))}
      </div>
    </div>
  );
}


export default HomeTeam;

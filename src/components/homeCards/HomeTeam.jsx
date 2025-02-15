import React from "react";
import MembersCard from "../membersCard/MembersCard";
import "./HomeTeam.css";

function HomeTeam({ images }) {
  return (
    <div className="home-team-container w-full grid place-items-center">
      <div className="MembersCard-container grid place-items-center">
        {images.map((image, index) => (
          <MembersCard
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

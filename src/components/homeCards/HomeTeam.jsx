import React from "react";
import MembersCard from "../membersCard/MembersCard";
import { useNavigate } from "react-router-dom";
import "./HomeTeam.css";

function HomeTeam({ images }) {

   const navigate = useNavigate();

  const handleTeamClick = (teamName) => {
    navigate(`/members?team=${encodeURIComponent(teamName)}`);
  };


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
          <div
            key={index}
            onClick={() => handleTeamClick(image.name)}
            className="cursor-pointer"
          >
            <MembersCard
              animate={false}
              name={`${image.name} Team`}
              ImgUrl={`/assets/teamLogos/${image.url}.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default HomeTeam;

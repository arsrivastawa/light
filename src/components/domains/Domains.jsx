import React, { useEffect, useRef, useState } from "react";
import Title from "../titles/Title";
import HomeTeamCarousel from "../carousel/HomeTeamCarousel";
import HomeTeam from "../homeCards/HomeTeam";

export default function Domains() {
  return (
    <>
      <div className="w-full grid place-items-center">
        <div className="members-heading-container">
          <Title content={"Our Team"} capitalize={true} />
        </div>
        <HomeTeamCarousel />
        <HomeTeam />
      </div>
    </>
  );
}

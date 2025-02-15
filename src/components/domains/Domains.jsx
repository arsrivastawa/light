import React, { useEffect, useRef, useState } from "react";
import Title from "../titles/Title";
import HomeTeamCarousel from "../carousel/HomeTeamCarousel";
import HomeTeam from "../homeCards/HomeTeam";

const images = [
  {
    name:"Web Development",
    url:"webd"
  },
  {
    name:"SSD",
    url:"ssd"
  },
  {
    name:"Sponsorship",
    url:"sponsorship"
  },
  {
    name:"Media & Content",
    url:"media"
  },
  {
    name:"Design",
    url:"design"
  }
]

export default function Domains() {
  return (
    <>
      <div className="w-full grid place-items-center">
        <div className="members-heading-container">
          <Title content={"Our Teams"} capitalize={true} />
        </div>
        <HomeTeamCarousel images={images} />
        <HomeTeam images={images} />
      </div>
    </>
  );
}

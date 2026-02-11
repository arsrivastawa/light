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
    <section className="w-full">

      
      <div className="members-heading-container w-full my-10">
  <Title content={"Our Teams"} capitalize={true} align="center" />
</div>


{/*       
      <div className="w-full">
        <HomeTeamCarousel images={images} />
      </div> */}

      <div className="w-full">
        <HomeTeam images={images} />
      </div>

    </section>
  );
}


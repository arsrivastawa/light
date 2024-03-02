import React from "react";
import MembersCard from "../membersCard/MembersCard";
import "./HomeTeam.css";

function HomeTeam() {
  return (
    <div className="home-team-container w-full grid place-items-center">
      <div className="MembersCard-container grid place-items-center">
        <MembersCard
          animate={true}
          name={"Web Development Team"}
          ImgUrl={
            "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
          }
        />
        <MembersCard
          animate={true}
          name={"Content Team"}
          ImgUrl={
            "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
          }
        />
        <MembersCard
          animate={true}
          name={"SSD Team"}
          ImgUrl={
            "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
          }
        />
        <MembersCard
          animate={true}
          name={"Sponsorship Team"}
          ImgUrl={
            "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
          }
        />
        <MembersCard
          animate={true}
          name={"Design Team"}
          ImgUrl={
            "https://e7.pngegg.com/pngimages/285/477/png-clipart-web-development-web-design-internet-web-hosting-service-world-wide-web-logo-symmetry.png"
          }
        />
      </div>
    </div>
  );
}

export default HomeTeam;

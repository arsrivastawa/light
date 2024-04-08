import React, { useEffect } from "react";
import MembersCard from "../../components/membersCard/MembersCard";
import Container from "../../components/container/Container";
import "./Members.css";
import Img from "../../assets/memberImgs/aditya.jpg";
import Title, { SubTitle } from "../../components/titles/Title";
import { TeamData } from "../../../public/assets/TeamData";

function Members() {
  useEffect(() => {
    document.title = "Our Team";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div className="grid place-items-center">
        <div className="members-heading-container">
          <Title content={"Our Team"} uppercase={true} />
          <SubTitle align={"start"} content={"Founding Members"} />
        </div>
        <div className="MembersCard-container grid place-items-center">
          {TeamData.slice(0, 8).map((item, index) => {
            console.log(item, index);
            return (
              <MembersCard
                ImgUrl={
                  "/assets/TeamProfile/Founding-Members/" +
                  item.ImgPath +
                  ".jpg"
                }
                domainOrBranch={
                  item.branch + " - " + String(item.batch).replace("0", "k")
                }
                email={item.email}
                instaUrl={item.insta}
                linkedinUrl={item.linkedIn}
                name={item.name}
              />
            );
          })}
        </div>
        <div className="members-heading-container">
          <h1 className="font-semibold font-roboto capitalize my-10 text-3xl sm:text-5xl text-start">
            CC's & Team Heads
          </h1>
        </div>
        <div className="MembersCard-container grid place-items-center my-4">
          {TeamData.slice(8, 19)
            .sort((a, b) => a.position.localeCompare(b.position))
            .map((item) => {
              return (
                <MembersCard
                  ImgUrl={
                    "/assets/TeamProfile/Heads-CCs/" + item.ImgPath + ".jpg"
                  }
                  domainOrBranch={item.position}
                  email={item.email}
                  instaUrl={item.insta}
                  linkedinUrl={item.linkedIn}
                  name={item.name}
                />
              );
            })}
        </div>
        <div className="members-heading-container">
          <h1 className="font-semibold font-roboto my-10 text-3xl sm:text-5xl text-start">
            Associative Members
          </h1>
        </div>
        <div className="MembersCard-container my-4 grid place-items-center">
          {TeamData.slice(19).map((item) => {
            return (
              <MembersCard
                ImgUrl={"/assets/TeamProfile/CTMs/" + item.ImgPath + ".jpg"}
                domainOrBranch={item.position}
                email={item.email}
                instaUrl={item.insta}
                linkedinUrl={item.linkedIn}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Members;

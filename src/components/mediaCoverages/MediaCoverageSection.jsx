import React from "react";
import MembersCard from "../membersCard/MembersCard";
import "./MediaCoverageSection.css";
import MediaCoverageSectionCard from "./MediaCoverageSectionCard";
import Title from "../titles/Title";
import mediaCoverageData from "../../../public/assets/MediaCoverageData";

function MediaCoverageSection() {
  return (
    <div className="media-coverage-container w-full grid place-items-center">
      <Title content={"Media Coverages"} capitalize={true} align={"center"} />
      <div className="media-coverage grid place-items-center">
        {mediaCoverageData.map((event) => (
          <MediaCoverageSectionCard event={event} />
        ))}
      </div>
    </div>
  );
}

export default MediaCoverageSection;

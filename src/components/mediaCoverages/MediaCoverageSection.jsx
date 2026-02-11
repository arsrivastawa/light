import React from "react";
import MembersCard from "../membersCard/MembersCard";
import "./MediaCoverageSection.css";
import MediaCoverageSectionCard from "./MediaCoverageSectionCard";
import Title from "../titles/Title";
import mediaCoverageData from "../../../public/assets/MediaCoverageData";

function MediaCoverageSection() {
  return (
  <div className="media-coverage-container w-full flex flex-col items-center">
    <Title content="Media Coverages" capitalize align="center" />

    <div className="media-coverage flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
      {mediaCoverageData.map((event) => (
        <MediaCoverageSectionCard key={event.id} event={event} />
      ))}
    </div>
  </div>
);

}

export default MediaCoverageSection;

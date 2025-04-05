import React, { useEffect } from "react";
import { SubTitle } from "../../components/titles/Title";
import GalleryCard from "./GalleryCard";

function GallerySection() {
  useEffect(() => {
      document.title = "Gallery of Memories";
    });
  return (
    <div class="container w-[98%] mx-auto px-4 py-16">
      {data.map((data) => (
        <>
          <SubTitle hyperlink={data.hyperlink} align={"start"} capitalize={true} content={data.title} />
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {data.images.map((image, index) => (
              <GalleryCard
                ImgUrl={image.link + (index == 0 ? "" : index)}
                alt={image.alt}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

const data = [
  {
    hyperlink: "",
    title: "Blanket Distribution Drive",
    images: [
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
      { link: "blanket-distribution", alt: "blanket-distribution" },
    ],
  },
  {
    hyperlink: "",
    title: "Deepotsav",
    images: [
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
      { link: "deepotsav", alt: "deepotsav" },
    ],
  },
  {
    hyperlink: "",
    title: "Celebration Shorts",
    images: [
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
      { link: "celebshots", alt: "celebshots" },
    ],
  },
  {
    hyperlink: "",
    title: "Rakshak ko Rakhi",
    images: [
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
      { link: "rkr", alt: "rkr" },
    ],
  },
  {
    hyperlink: "",
    title: "Ballot Brilliance",
    images: [
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
      { link: "ballotbrilliance", alt: "ballotbrilliance" },
    ],
  },
  {
    hyperlink: "",
    title: "Bacchon Ki Holi",
    images: [
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
      { link: "holi", alt: "holi7" },
    ],
  },
  {
    hyperlink: "",
    title: "Satarkata",
    images: [
      { link: "satarkata", alt: "satarkata" },
      { link: "satarkata", alt: "satarkata" },
    ],
  },
  {
  hyperlink: "",
    title: "Pre-Diwali Celebration",
  images: [
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    { link: "oldage", alt: "oldage" },
    ],
  },
  {
    hyperlink: "",
    title: "Anubhuti",
    images: [
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
      { link: "anubhuti", alt: "anubhuti" },
    ],
  },
  {
    hyperlink: "",
    title: "Umang'23",
    images: [
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
    ],
  },
  {
    hyperlink: "",
    title: "Unnati",
    images: [
      { link: "unnati", alt: "unnati" },
      { link: "unnati", alt: "unnati" },
    ],
  },
  {
    hyperlink: "",
    title: "Umang'22",
    images: [
      { link: "umang'22", alt: "umang'22" },
      { link: "umang'22", alt: "umang'22" },
      { link: "umang'22", alt: "umang'22" },
      { link: "umang'22", alt: "umang'22" },
      { link: "umang'22", alt: "umang'22" },
    ],
  },
];

export default GallerySection;

import React from "react";
import { SubTitle } from "../../components/titles/Title";
import GalleryCard from "./GalleryCard";

function GallerySection() {
  return (
    <div class="container w-[98%] mx-auto px-4 py-16">
      {data.map((data) => (
        <>
          <SubTitle align={"start"} capitalize={true} content={data.title} />
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
    title: "Umang",
    images: [
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
    ],
  },
  {
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
    title: "Satarkata",
    images: [
      { link: "satarkata", alt: "satarkata" },
      { link: "satarkata", alt: "satarkata" },
    ],
  },
  {
    title: "Unnati",
    images: [
      { link: "unnati", alt: "unnati" },
      { link: "unnati", alt: "unnati" },
    ],
  },
];

export default GallerySection;

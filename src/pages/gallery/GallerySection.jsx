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
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
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
  hyperlink: "https://www.instagram.com/p/DPQiwIrk_5a/",
  title: "SAMADHAN 2025",
  images: [
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    { link: "samadhan", alt: "samadhan" },
    
  ],
},

{
  hyperlink: "https://www.instagram.com/p/DUKbeacD___/",
  title: "Career Guidance Session",
  images: [
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    { link: "career-guidance", alt: "career-guidance" },
    
    
  ],
},

{
  hyperlink: "https://www.instagram.com/p/DSKTdwFE67B/",
  title: "Blanket Distribution Drive",
  images: [
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    { link: "blanket-drive", alt: "blanket-drive" },
    
  ],
},

{
  hyperlink: "https://www.instagram.com/p/DPD6YTAk-fc/",
  title: "Tripti",
  images: [
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    { link: "tripti", alt: "tripti" },
    
  ],
},

{
  hyperlink: "https://www.instagram.com/light.sindri/",
  title: "Sparsh",
  images: [
    { link: "sparsh", alt: "sparsh" },
    { link: "sparsh", alt: "sparsh" },
    { link: "sparsh", alt: "sparsh" },
    { link: "sparsh", alt: "sparsh" },
    { link: "sparsh", alt: "sparsh" },
    { link: "sparsh", alt: "sparsh" },
     { link: "sparsh", alt: "sparsh" },
    { link: "sparsh", alt: "sparsh" },
    
  ],
},

// {
//   hyperlink: "https://www.instagram.com/p/DIqJgPXzrE6/",
//   title: "Samavesh",
//   images: [
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//     { link: "samavesh", alt: "samavesh" },
//   ],
// },

{
  hyperlink: "https://www.instagram.com/p/DHDkzRtzfwX/",
  title: "Aarogya Sindri",
  images: [
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
    { link: "aarogya-sindri", alt: "aarogya-sindri" },
  ],
},

{
  hyperlink: "https://www.instagram.com/p/DHSoPx0zpG4/",
  title: "Rangotsav",
  images: [
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
    { link: "rangotsav", alt: "rangotsav" },
  ],
},

{
  hyperlink: "https://www.instagram.com/p/DE6p8MpTIpO/",
  title: "AI Awareness Program",
  images: [
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
    { link: "ai-awareness", alt: "ai-awareness" },
  ],
},


  {
    hyperlink: "https://www.instagram.com/p/DEFC6njzTaN/",
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
    hyperlink: "https://www.instagram.com/p/DBtUfv4z_N1/",
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
    hyperlink: "https://www.instagram.com/p/DBqVZc_zKQo/",
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
    hyperlink: "https://www.instagram.com/p/C-4D_Wvv2ZI/",
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
    hyperlink: "https://www.instagram.com/p/C6VueMjP4z1/",
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
    hyperlink: "https://www.instagram.com/p/C4zveXev72N/",
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
    hyperlink: "https://www.instagram.com/p/C2hA6e_vzge/",
    title: "Satarkata",
    images: [
      { link: "satarkata", alt: "satarkata" },
      { link: "satarkata", alt: "satarkata" },
    ],
  },
  {
  hyperlink: "https://www.instagram.com/p/Cz3c1Gqve0W/",
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
    hyperlink: "https://www.instagram.com/p/CzlpoZUuHoG/",
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
    hyperlink: "https://www.instagram.com/p/Cog0uLYgnSr/",
    title: "Umang'23",
    images: [
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
      { link: "umang", alt: "umang" },
    ],
  },
  {
    hyperlink: "https://www.instagram.com/p/CnZc-m_AYhD/",
    title: "Unnati",
    images: [
      { link: "unnati", alt: "unnati" },
      { link: "unnati", alt: "unnati" },
    ],
  },
  {
    hyperlink: "https://www.instagram.com/p/CZRr_g1J-Wo/",
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

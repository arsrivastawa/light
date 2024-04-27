import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import Title, { SubTitle } from "../../components/titles/Title";
import Img1 from "../../assets/carouseLImg/CaImg1.jpg";
import Img2 from "../../assets/carouseLImg/CaImg2.jpg";
import EventCard from "../../components/EventsCard/EventCard";

function Events() {
  useEffect(() => {
    document.title = "Our Events";
  });
  return (
    <Container>
      <div className="grid place-items-center">
        <div>
          <Title content={"Our Events"} uppercase={true} />
        </div>
        {data.map((item, index) => (
          <EventCard
            index={index}
            title={item.title}
            brief={item.brief}
            content={item.content}
            Img1={Img1}
            Img2={Img2}
          />
        ))}
      </div>
    </Container>
  );
}
let data = [
  {
    title: "Anubhuti Awareness Seminar",
    images: [Img1, Img2],
    brief:
      "LiGHT Sindri's Heartwarming Visit to Old Age Home Brightens Residents' Day!",
    content: [
      "On 6 November 2023, Light Sindri successfully conducted a children awareness seminar titled 'Abnubhuti' at Saraswati Vidya Mandir in Saharpura, Sindri. The primary aim of the seminar was to educate participants about good   and bad touch,  to  create awareness and promote child safety.",
      "The seminar aimed to empower attendees with knowledge on recognizing and responding to inappropriate touch, gestures, remarks and comments; ultimately fostering a safer environment for children. Through informative sessions, the organizers sought to eradicate misconceptions and equip participants with the tools to protect themselves and others.",
      "'Anubhuti' served as a crucial platform for raising awareness about good  and bad touch, providing valuable insights and tools to safeguard children. The collaborative effort of Light Sindri, the speakers, and the participants contributed to the success of this seminar, fostering a sense of responsibility and commitment towards the well-being of children in the community.",
    ],
  },
  {
    title: "Umang'23",
    images: [Img1, Img2],
    brief:
      "Umang: A Cultural Extravaganza Honoring Brilliance, Nationalism, and Memories",
    content: [
      "In a delightful celebration of talent that unfolded from January 17th to January 27th, 2023, LIGHT Sindri proudly presented 'Umang.' This online cultural event, echoing themes of patriotism and retro, left an indelible mark on the hearts of participants and spectators alike.",
      "The event encompassed two main themes - Patriotic and Retro. The Patriotic theme encouraged participants to express their unwavering devotion and emotional support for their country, while the Retro theme allowed them to immerse in a nostalgic trend, adding a touch of classic charm to their performances.",
      "Umang featured four exciting segments, each designed to bring out unique talents:",
      "i. Nagma – It’s a singing competition in which participants had to send their entries in video format.",
      "ii. Kalakriti – In this segment, the participants had to show their artistic side by showcasing their talent in creating handmade or digital art.",
      "iii. Kavya- This section allowed the participants to express their thoughts through the medium of poetry (Kavita) in the language of their own choice (Hindi or English). The submission was made either in the form of text or video.",
      "iv. Chalchitra – Participants portrayed their acting talent in the provided themes in the form of short videos of 30-60 sec.",
      "'Umang' wasn't just an event; it was a journey of self-discovery and growth. Participants not only showcased their talents but also experienced personal transformations. The virtual stage became a platform for exploration, connection, and cultural immersion.",
      "Umang, as a cultural spectacle, not only encouraged participants to explore their interests but also provided a medium for skill development and meaningful connections among like-minded individuals. The echoes of Umang continue to resonate, marking it as an unforgettable chapter in LIGHT Sindri's cultural legacy.",
    ],
  },
  {
    title: "Old Age home Visit",
    images: [Img1, Img2],
    brief:
      "LiGHT Sindri's Heartwarming Visit to Old Age Home Brightens Residents' Day!",
    content: [
      "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough todeliver the scope you want at the pace you need.",
      "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
    ],
  },
];

export default Events;

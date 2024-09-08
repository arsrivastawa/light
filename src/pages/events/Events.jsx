import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import Title, { SubTitle } from "../../components/titles/Title";

import EventCard from "../../components/EventsCards/EventCard";

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
            Imgs={item.images}
          />
        ))}
      </div>
    </Container>
  );
}
let data = [
  {
    title: "Ballot Brilliance",
    images: ["ballotbrilliance4", "ballotbrilliance7"],
    brief:
      "LiGHT Sindri Empowers Students with Educational Programs at DAV High School, Tasra",
    content: [
      "LiGHT Sindri took pride in the fantastic success of its recent educational programs, activities that were really captivating and thought-provoking for young minds. On April 25th, 2024, DAV HIGH SCHOOL, TASRA reverberated with excitement as pupils from classes’ sixth to tenth engaged in a thrilling quiz contest and essay marathon. This exceptional event was an excellent opportunity for competitors to exhibit their knowledge, inventiveness. Also, our “Ballot Brilliance” was a major highlight that introduced students to voting rights and electoral processes. Using dynamic quizzes, provocative essay contests and enlightening seminar sessions they gained insights into the importance of civic engagement.A heartfelt congratulations to everyone who participated in this activity for their enthusiasm, commitment and outstanding performance. LiGHT Sindri looks forward to continuing on this path of empowerment and inspiration by nurturing tomorrow’s thinkers through future events.",
    ],
  },
  {
    title: "Pre-Holi Celebration",
    images: ["holi1", "holi3"],
    brief:
      'LiGHT Sindri Spreads Joy at "Bachcho Ki Holi" Celebration at Hindu Mission Orphanage',
    content: [
      'On March 19, 2024, LiGHT Sindri organized a heartwarming Pre-Holi celebration at the Hindu Mission Orphanage in Dhanbad. The team aimed to spread joy and smiles among the children by distributing sweets, gifts, water guns, and vibrant colors. The event was filled with fun activities, including exhilarating games like musical chairs, which added an extra layer of excitement. The sheer delight on the children\'s faces was a testament to the success of their efforts. The media coverage of "Bachcho Ki Holi" showcased the impact of the celebration. Holi, a festival symbolizing the arrival of spring and the victory of good over evil, allowed LIGHT Sindri to foster a sense of unity and joy among the children. LiGHT Sindri remained committed to spreading happiness and positivity. They celebrated Holi with love, laughter, and togetherness. Happy Holi!',
    ],
  },
  {
    title: "Satarkta",
    images: ["satarkata", "satarkata1"],
    brief:
      "Satarkta: LiGHT Sindri's Innovative Platform for Tackling Social Issues",
    content: [
      "Light Sindri hosted the Satarkta event, a platform where groups were invited to identify and address social issues. The initiative began with the distribution of a Google form across various groups, prompting them to submit their chosen social problems. Serving as the judging panel, Light Sindri evaluated the submissions, ultimately selecting the top 20 teams for the second round.",
      "In the subsequent phase, these chosen teams presented their identified problems along with proposed solutions in video format. This allowed for a more dynamic and comprehensive exploration of the societal challenges at hand. The culminating decision on the winners rested with Light Kharagpur, the central hub overseeing all Light branches. The event, therefore, not only encouraged social consciousness but also fostered creative problem-solving and effective communication through the medium of video presentations.",
      "Satarkta, in essence, exemplified a multi-staged approach to addressing social issues, encompassing identification, analysis, and presentation of solutions. The collaborative effort between Light Sindri and Light Kharagpur showcased a commitment to nurturing innovative ideas and promoting positive change within the community.",
    ],
  },
  {
    title: "Anubhuti Awareness Seminar",
    images: ["anubhuti6", "anubhuti1"],
    brief:
      "LiGHT Sindri's Heartwarming Visit to Old Age Home Brightens Residents' Day!",
    content: [
      "On 6 November 2023, Light Sindri successfully conducted a children awareness seminar titled 'Abnubhuti' at Saraswati Vidya Mandir in Saharpura, Sindri. The primary aim of the seminar was to educate participants about good   and bad touch,  to  create awareness and promote child safety.",
      "The seminar aimed to empower attendees with knowledge on recognizing and responding to inappropriate touch, gestures, remarks and comments; ultimately fostering a safer environment for children. Through informative sessions, the organizers sought to eradicate misconceptions and equip participants with the tools to protect themselves and others.",
      "'Anubhuti' served as a crucial platform for raising awareness about good  and bad touch, providing valuable insights and tools to safeguard children. The collaborative effort of Light Sindri, the speakers, and the participants contributed to the success of this seminar, fostering a sense of responsibility and commitment towards the well-being of children in the community.",
    ],
  },
  {
    title: "Pre-Diwali Celebration",
    images: ["oldage3", "oldage7"],
    brief:
      "LiGHT Sindri Brings Joy to Elders with Heartwarming Pre-Diwali Celebration",
    content: [
      "In a heartwarming act of compassion LiGHT Sindri organized a pre-Diwali celebration at a local old age home. Amidst the glow of diyas and shared laughter, stories were exchanged, creating lasting memories that will forever warm our hearts. The invaluable lessons and love from our elders filled us with gratitude, highlighting their timeless wisdom. Our team shared sweets, gave winter blankets. We extended a warm welcome to these elderly members of the LiGHT SINDRI family, treating them with affection and decency. Let's continue this giving and compassionate mentality as we approach the holiday season, knowing that when we band together, we can make every moment a bit better for those around us.",
    ],
  },
  {
    title: "Umang'23",
    images: ["umang", "umang2"],
    brief:
      "Umang: A Cultural Extravaganza Honoring Brilliance, Nationalism, and Memories",
    content: [
      "From January 17th to 27th, 2023, LIGHT Sindri proudly presented Umang, an online cultural event celebrating patriotism and retro themes. Participants expressed their love for their country and embraced nostalgia through various performances.",

      "Umang featured four segments:",

      "i. Nagma: A singing competition with video submissions.",
      "ii. Kalakriti: Showcasing artistic talent in handmade or digital art.",
      "iii. Kavya: Poetry entries in Hindi or English, submitted as text or video.",
      "iv. Chalchitra: Short acting performances in video format.",
      "This event was more than just a competition; it was a journey of self-discovery, skill development, and cultural immersion. Umang created a vibrant platform for connection and personal growth, leaving a lasting impact on participants and spectators alike.",
    ],
  },
];

export default Events;

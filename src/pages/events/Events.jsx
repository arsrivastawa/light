import React from "react";
import Container from "../../components/container/Container";
import Title from "../../components/titles/Title";
import EventCard from "../../components/EventsCards/EventCard";
import { events } from "../../../public/assets/EventData";
import { Helmet } from "react-helmet-async";

function Events() {
  return (
    <>
      <Helmet>
        <title>Events & Initiatives | LiGHT Sindri NGO</title>
        <meta
          name="description"
          content="Explore LiGHT Sindri’s initiatives including Tripti, Rangotsav, Sparsh, Aarogya Sindri, AI Awareness Program, and Samavesh."
        />
        <meta
          name="keywords"
          content="LiGHT Sindri events, NGO events Sindri, social initiatives Dhanbad, student NGO activities"
        />
      </Helmet>

      <Container>
        <div className="grid place-items-center">
          <Title content="Our Events" uppercase={true} />

          {events.map((item, index) => (
            <EventCard
              key={index}
              index={index}
              title={item.title}
              brief={item.brief}
              content={item.content}
              Imgs={item.images}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Events;



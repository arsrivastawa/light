import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import Title from "../../components/titles/Title";

import EventCard from "../../components/EventsCards/EventCard";
import { events } from "../../../public/assets/EventData";

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
        {events.map((item, index) => (
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

export default Events;

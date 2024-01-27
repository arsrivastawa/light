import React from "react";
import Section from "../../components/container/Container";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import HomeAbout from "../../components/about/HomeAbout";

function HomePage() {
  return (
    <Section>
      <HeroCarousel />
      <HomeAbout />
    </Section>
  );
}

export default HomePage;

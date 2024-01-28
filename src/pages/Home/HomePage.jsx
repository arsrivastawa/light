import React, { useEffect } from "react";
import Section from "../../components/container/Container";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import HomeAbout from "../../components/about/HomeAbout";
import HomeTeam from "../../components/domains/HomeTeam";

function HomePage() {
  useEffect(() => {
    document.title = "Welcome to LiGHT Sindri";
  }, []);

  return (
    <Section>
      <HeroCarousel />
      <HomeAbout />
      <HomeTeam />
    </Section>
  );
}

export default HomePage;

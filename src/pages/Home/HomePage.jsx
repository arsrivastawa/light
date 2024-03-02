import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import HomeAbout from "../../components/about/HomeAbout";
import Domains from "../../components/domains/Domains";
import HomeEvent from "../../components/homeEvents/HomeEvent";

function HomePage() {
  useEffect(() => {
    document.title = "Welcome to LiGHT Sindri";
  }, []);

  return (
    <Container>
      <HeroCarousel />
      <HomeAbout />
      <HomeEvent />
      <Domains />
    </Container>
  );
}

export default HomePage;

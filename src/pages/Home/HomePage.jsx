import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import HomeAbout from "../../components/about/HomeAbout";
import Domains from "../../components/domains/Domains";
import HomeEvent from "../../components/homeEvents/HomeEvent";
import ContactUs from "../../components/contactUs/ContactUs";
import MediaCoverageSection from "../../components/mediaCoverages/MediaCoverageSection";

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
      <MediaCoverageSection />
      <ContactUs />
    </Container>
  );
}

export default HomePage;

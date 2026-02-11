import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import HomeAbout from "../../components/about/HomeAbout";
import Domains from "../../components/domains/Domains";
import HomeEvent from "../../components/homeEvents/HomeEvent";
import ContactUs from "../../components/contactUs/ContactUs";
import MediaCoverageSection from "../../components/mediaCoverages/MediaCoverageSection";
import { Helmet } from "react-helmet-async";

function HomePage() {

  return (
    <>
     <Helmet>
        <title>LiGHT Sindri | Empowering Communities Through Action</title>
        <meta
          name="description"
          content="LiGHT Sindri is a student-led NGO working in education, healthcare, AI awareness, food drives, and community welfare in Sindri and Dhanbad."
        />
        <meta name="keywords" content="LiGHT Sindri NGO, NGO in Sindri, social work Dhanbad, student NGO Jharkhand" />
      </Helmet>

    <Container>
      <HeroCarousel />
      <HomeAbout />
      <HomeEvent />
      <Domains />
      <MediaCoverageSection />
      {/* <ContactUs /> */}
    </Container>
    </>
  );
}

export default HomePage;

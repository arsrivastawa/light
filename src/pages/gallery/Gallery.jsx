import React from "react";
import Title, { SubTitle } from "../../components/titles/Title";
import Container from "../../components/container/Container";
import GallerySection from "./GallerySection";
import { Helmet } from "react-helmet-async";

function Gallery() {
  return (
    <>
    <Helmet>
        <title>Gallery | LiGHT Sindri NGO</title>
        <meta
          name="description"
          content="Explore moments from LiGHT Sindri’s events and initiatives, showcasing education drives, healthcare programs, celebrations, and community service."
        />
        <meta
          name="keywords"
          content="LiGHT Sindri gallery, NGO event photos, social work images Sindri, student NGO gallery"
        />
      </Helmet>
    <Container>
      <section className=" bg-white body-font">
        <Title content={"Gallery"} />
        <GallerySection />
      </section>
    </Container>
    </>
  );
}

export default Gallery;

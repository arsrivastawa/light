import React from "react";
import Title, { SubTitle } from "../../components/titles/Title";
import Container from "../../components/container/Container";
import GallerySection from "./GallerySection";

function Gallery() {
  return (
    <Container>
      <section class=" bg-white body-font">
        <Title content={"Gallery"} />
        <GallerySection />
      </section>
    </Container>
  );
}

export default Gallery;

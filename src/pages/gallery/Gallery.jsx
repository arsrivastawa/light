import React from "react";
import Title, { SubTitle } from "../../components/titles/Title";
import Container from "../../components/container/Container";
import Img2 from "../../assets/carouseLImg/CaImg2.jpg";

function Gallery() {
  return (
    <Container>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi3.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi10.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="/assets/Gallery/holi3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <section class=" bg-white body-font">
        <Title content={"Gallery"} />
        <div class="container w-2/3 mx-auto px-4 py-16">
          <SubTitle
            align={"start"}
            capitalize={true}
            content={"Bacchon ki holi"}
          />
          <div class="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              class="w-full rounded-xl h-full object-cover object-center block"
              src="/assets/Gallery/holi1.jpg"
            />
          </div>
          <div className="w-full flex flex-row">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full rounded-xl object-cover h-full object-center block"
                src="/assets/Gallery/holi7.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full rounded-xl object-cover h-full object-center block"
                src="/assets/Gallery/holi8.jpg"
              />
            </div>
          </div>
        </div>
        <div class=" w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="/assets/Gallery/holi6.jpg"
              alt="Image 1"
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="/assets/Gallery/holi5.jpg"
              alt="Image 2"
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="/assets/Gallery/holi4.jpg"
              alt="Image 3"
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <img
              src="/assets/Gallery/holi2.jpg"
              alt="Image 4"
              class="w-full h-64 object-cover"
            />
          </div>
        </div>
        <div class="container px-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap flex-col justify-center items-center m-auto">
            <div class="flex flex-wrap w-1/2 md:w-2/3">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full rounded-xl object-cover h-full object-center block"
                  src="/assets/Gallery/holi10.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full rounded-xl object-cover h-full object-center block"
                  src="/assets/Gallery/holi1.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-2/3">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full rounded-xl h-full object-cover object-center block"
                  src="/assets/Gallery/holi9.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Gallery;

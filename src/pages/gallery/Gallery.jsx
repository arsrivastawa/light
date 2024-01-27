import React from "react";
import Title from "../../components/titles/Title";
import Container from "../../components/container/Container";

function Gallery() {
  return (
    <Container>
      <section class=" bg-white body-font">
        <div class="container w-2/3 mx-auto px-4 py-16">
          <Title content={"Gallery"} />
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                alt="Image 1"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                alt="Image 2"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                alt="Image 3"
                class="w-full h-64 object-cover"
              />
            </div>
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                alt="Image 4"
                class="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        <div class="container px-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap flex-col justify-center items-center m-auto">
            <div class="flex flex-wrap w-1/2 md:w-2/3">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full rounded-xl object-cover h-full object-center block"
                  src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full rounded-xl object-cover h-full object-center block"
                  src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full rounded-xl h-full object-cover object-center block"
                  src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-2/3">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full rounded-xl h-full object-cover object-center block"
                  src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full rounded-xl object-cover h-full object-center block"
                  src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full rounded-xl object-cover h-full object-center block"
                  src="https://m.media-amazon.com/images/I/71CjIlXj+kL._AC_UF1000,1000_QL80_.jpg"
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

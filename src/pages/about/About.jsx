import React from "react";
import Container from "../../components/container/Container";
import "./About.css";
import Title from "../../components/titles/Title";

function About() {
  return (
    <Container>
      <div className="blurred-wrapper z-50 w-screen relative bg-transparent h-screen">
        <div className="about-hero w-full h-full px-32 py-10 -z-50">
          <Title content={"About Us"} align={"start"} />
          <h1 className="font-roboto w-full text-sm sm:text-xl sm:leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam recusandae in suscipit tenetur officiis odit reiciendis culpa ipsa reprehenderit mollitia, ratione possimus. Nisi ut sequi perspiciatis fuga! Vitae sapiente quibusdam nulla reprehenderit vero a earum adipisci incidunt sit rerum laborum, impedit accusamus laudantium quos, eum ea accusantium! Animi quae corrupti, accusamus quaerat, nostrum omnis rem praesentium perspiciatis cumque tenetur quam facilis magni natus dolorum autem eveniet assumenda ad doloremque magnam? Velit eveniet voluptate quam blanditiis, corrupti asperiores obcaecati praesentium architecto dolores, porro et quae quos consectetur debitis. Magnam dolor doloremque et blanditiis ipsa voluptatem dicta eos aliquid ab deleniti assumenda, perferendis inventore repellendus exercitationem, fugit modi? Eum, perspiciatis asperiores sit laboriosam dolor inventore reprehenderit nemo necessitatibus commodi odio tempora ipsam at! Excepturi alias, rerum velit dicta totam ipsa fugiat. Veniam voluptas obcaecati cupiditate voluptate accusamus reiciendis neque ipsum. Molestias cupiditate totam laudantium tempora quod officia veniam unde, quae accusantium voluptate et dicta alias quam excepturi! Assumenda, voluptatem quam ipsum, unde officia, sequi ab placeat atque dolorum deleniti reiciendis dicta reprehenderit quibusdam rem laudantium inventore blanditiis? Omnis, neque. Aliquam alias voluptate libero enim officia culpa perspiciatis facilis. Nostrum, laborum. Voluptates repudiandae magnam, facere nam temporibus ut debitis corrupti dolor exercitationem omnis?
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default About;

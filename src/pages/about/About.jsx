import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import Title, { SubTitle } from "../../components/titles/Title";
import { Helmet } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Helmet>
        <title>About Us | LiGHT Sindri NGO</title>
        <meta
          name="description"
          content="Learn about LiGHT Sindri, a student-led NGO dedicated to education, healthcare, AI awareness, and community development in Sindri and Dhanbad."
        />
        <meta
          name="keywords"
          content="About LiGHT Sindri, student NGO Jharkhand, social work Sindri, NGO in Dhanbad"
        />
      </Helmet>
    <Container>
      <section className="w-full px-4 py-10">
        <Title content="About LiGHT Sindri" align="center" />

        <div className="max-w-6xl mx-auto space-y-16 mt-12">

          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SubTitle content="About Us" align="start" />
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Founded in May 2021 with just nine passionate members, LiGHT
                Sindri has grown into a strong organization of more than 48 active
                members. The group has successfully organized multiple
                community-driven initiatives focused on education, social
                welfare, and upliftment of underprivileged sections of society.
                Through consistent efforts and meaningful engagement, LiGHT
                Sindri continues to expand its reach and create a lasting
                positive impact across the Sindri region and beyond.
              </p>
            </div>

         
            <div className="group perspective-1000">
              <div
                className="
                  rounded-2xl overflow-hidden border
                  transform-gpu transition-all duration-300 ease-out
                  shadow-[0_15px_35px_rgba(0,0,0,0.2)]
                  group-hover:-translate-y-2
                  group-hover:rotate-x-2
                  group-hover:rotate-y-2
                  group-hover:shadow-[0_0_35px_rgba(255,170,85,0.6)]
                "
              >
                <img
                  className="w-full h-full object-cover"
                  src="/assets/carouseLImg/CaImg3.jpg"
                  alt="About LiGHT Sindri"
                />
              </div>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="group perspective-1000">
              <div
                className="
                  rounded-2xl overflow-hidden border
                  transform-gpu transition-all duration-300 ease-out
                  shadow-[0_15px_35px_rgba(0,0,0,0.2)]
                  group-hover:-translate-y-2
                  group-hover:rotate-x-2
                  group-hover:-rotate-y-2
                  group-hover:shadow-[0_0_35px_rgba(255,170,85,0.6)]
                "
              >
                <img
                  className="w-full h-full object-cover"
                  src="/assets/carouseLImg/CaImg4.jpg"
                  alt="Our Mission"
                />
              </div>
            </div>

            <div>
              <SubTitle content="Our Mission" align="start" />
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                LiGHT Sindri is dedicated to empowering communities through
                education, essential services, and sustainable development
                initiatives. By addressing real-world challenges and
                encouraging innovation at the grassroots level, the
                organization strives to improve quality of life and foster
                inclusive growth. Its mission is rooted in compassion,
                responsibility, and the belief that collective action can drive
                meaningful change.
              </p>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <SubTitle content="Our Vision" align="start" />
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                LiGHT Sindri envisions a future where every individual,
                regardless of background, has access to opportunities, dignity,
                and resources. The organization aims to build resilient,
                self-sustaining communities that thrive through unity,
                awareness, and social responsibility. By nurturing leadership
                and collaboration, LiGHT Sindri seeks to inspire long-term
                transformation for generations to come.
              </p>
            </div>

            
            <div className="group perspective-1000">
              <div
                className="
                  rounded-2xl overflow-hidden border
                  transform-gpu transition-all duration-300 ease-out
                  shadow-[0_15px_35px_rgba(0,0,0,0.2)]
                  group-hover:-translate-y-2
                  group-hover:-rotate-x-2
                  group-hover:rotate-y-2
                  group-hover:shadow-[0_0_35px_rgba(255,170,85,0.6)]
                "
              >
                <img
                  className="w-full h-full object-cover"
                  src="/assets/carouseLImg/CaImg2.jpg"
                  alt="Our Vision"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </Container>
    </>
  );
}

export default About;



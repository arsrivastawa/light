import React, { useEffect } from "react";
import Container from "../../components/container/Container";
import Title, { SubTitle } from "../../components/titles/Title";
import { Helmet } from "react-helmet-async";

function GYWS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About GYWS | Gopali Youth Welfare Society – IIT Kharagpur</title>
        <meta
          name="description"
          content="Learn about GYWS – the Gopali Youth Welfare Society of IIT Kharagpur, a student-led initiative dedicated to education, healthcare, and community development in Gopali village."
        />
        <meta
          name="keywords"
          content="GYWS, Gopali Youth Welfare Society, IIT Kharagpur NGO, student social initiative, community development Jharkhand"
        />
      </Helmet>

      <Container>
        <section className="w-full px-4 py-10">
          <Title content="About GYWS" align="center" />
          <p className="text-center text-sm text-slate-500 mt-2 tracking-widest uppercase">
            Gopali Youth Welfare Society · IIT Kharagpur
          </p>

          <div className="max-w-6xl mx-auto space-y-16 mt-12">

            {/* ── About GYWS ── */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <SubTitle content="What is GYWS?" align="start" />
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  The Gopali Youth Welfare Society (GYWS) is a student-run social
                  initiative under the banner of IIT Kharagpur. Founded with a
                  commitment to serve the underserved, GYWS bridges the gap between
                  the campus and the surrounding rural community of Gopali village.
                  Through sustained grassroots engagement, the society works to create
                  measurable change in education, health, and livelihood — bringing
                  the resources of one of India's premier institutions directly to
                  those who need it most.
                </p>

                <div className="mt-6 flex flex-wrap gap-6">
                  {[
                    { num: "500+", label: "Students Reached" },
                    { num: "16",  label: "LiGHT Centers" },
                    { num: "10+",  label: "Years of Impact" },
                  ].map(({ num, label }) => (
                    <div key={label} className="flex flex-col">
                      <span className="text-2xl font-bold text-amber-500">{num}</span>
                      <span className="text-xs uppercase tracking-widest text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>
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
                    src="/assets/gyws/community.jpg"
                    alt="GYWS Community"
                  />
                </div>
              </div>
            </div>

            {/* ──  Mission ── */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="group perspective-500 ">
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
                    className="w-1/2 h-1/2 object-cover mx-auto"
                    src="/assets/gyws/mission.png"
                    alt="Our Mission"
                  />
                </div>
              </div>

              <div>
                <SubTitle content=" Mission" align="start" />
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  GYWS is driven by the mission to empower the youth and families of
                  Gopali through education, skill development, and community
                  healthcare. Leveraging the intellectual capital of IIT Kharagpur,
                  the society designs and delivers programs that are practical,
                  sustainable, and deeply human. Every initiative is rooted in the
                  belief that knowledge shared freely is the most powerful tool for
                  social equity and lasting transformation.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <SubTitle content=" Vision" align="start" />
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  GYWS envisions a future where no village adjacent to India's premier
                  institutions remains invisible to progress. The society aspires to
                  build a self-reliant, educated, and health-conscious Gopali — a model
                  that campus-community partnerships across the country can look to and
                  replicate. Through sustained mentorship and collaborative leadership,
                  GYWS seeks to make impact not just felt, but generational.
                </p>
              </div>

              <div className="group perspective-200">
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
                    className="w-1/2 h-1/2 object-cover mx-auto"
                    src="/assets/gyws/vision.png"
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

export default GYWS;
import React from "react";
import Title from "../titles/Title";
import NavButton from "../navButtons/NavButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutVariants, cardVariants } from "../variants/variants";

function HomeAbout() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        variants={aboutVariants}
        initial="offscreen"
        animate={inView ? "onscreen" : "offscreen"}
        className="w-full p-5 sm:p-10 flex flex-col justify-center items-center"
      >
        <Title content={"about us"} capitalize={true} align={"center"} />
        <div className="font-roboto lg:w-3/5 text-sm sm:text-xl sm:leading-7">
          Since its founding in May 2021 with just nine members, LiGHT Sindri
          has quickly grown to become a powerful organization with 31 active
          members who are dedicated to upholding their purpose of uplifting
          underprivileged communities. Their effective completion of five events
          throughout their 2022–2023 reign is evidence of their commitment to
          bringing about constructive change.
          <div className="w-fit mt-4">
            <Link to={"/about"}>
              <h1 className="cursor-pointer uppercase duration-150 border-2 border-[#ffa4476b] py-1 px-4 focus:outline-none hover:bg-[#ffa4476b] rounded text-lg">
                know more{" "}
                <span className="font-semibold text-xl -mb-1">&gt;</span>
              </h1>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeAbout;

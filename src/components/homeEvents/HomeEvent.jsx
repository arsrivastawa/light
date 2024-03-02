import React from "react";
import Title from "../titles/Title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { eventVariants } from "../variants/variants";

function HomeEvent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });
  return (
    <div className="w-full ">
      <motion.div
        ref={ref}
        variants={eventVariants}
        initial="offscreen"
        animate={inView ? "onscreen" : "offscreen"}
        className="w-full p-5 sm:p-10 flex flex-col justify-center items-center"
      >
        <Title content={"our Events"} capitalize={true} align={"center"} />
      </motion.div>
    </div>
  );
}

export default HomeEvent;

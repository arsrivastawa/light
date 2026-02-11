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
    <div className="w-full overflow-hidden flex justify-center py-20 ">
      <motion.div
        ref={ref}
        variants={aboutVariants}
        initial="offscreen"
        animate={inView ? "onscreen" : "offscreen"}
        className="w-full flex justify-center px-4"
      >
     
        <div
          className="
          relative max-w-4xl w-full p-8 sm:p-12
          bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-400
          rounded-3xl border border-black/10
          shadow-2xl flex flex-col items-center text-justify
          group overflow-hidden
          "
        >
         
          <div
            className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-r from-yellow-100/40 via-orange-200/40 to-pink-200/40
            blur-2xl transition duration-300
            "
          />

          
          <div
            className="
            absolute -top-1/2 -left-1/2 w-[200%] h-[200%]
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            rotate-12 opacity-0 group-hover:opacity-100
            transition duration-700
            "
          />

         
          <div className="relative">
            <Title content={"about us"} capitalize={true} align={"center"} />

            <p
              className="
              font-roboto text-sm sm:text-lg leading-7 sm:leading-8
              text-gray-800 mt-6 max-w-3xl
              "
            >
              Founded in May 2021, LiGHT Sindri started as a group of nine dedicated volunteers committed to social welfare and community development. Today, the organization comprises more than 48 active members and has successfully conducted more than 15 impactful events, reflecting its sustained commitment to meaningful and inclusive social change.
            </p>

            <div className="mt-8 flex justify-center">
              <Link to={"/about"}>
                <button
                  className="
                  uppercase tracking-widest
                  px-8 py-3 rounded-full text-sm sm:text-base font-semibold
                  border-2 border-black
                  bg-transparent
                  hover:bg-black hover:text-white
                  transition-all duration-300
                  hover:scale-105
                  "
                >
                  Know More <span className="ml-1 text-lg">›</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


export default HomeAbout;

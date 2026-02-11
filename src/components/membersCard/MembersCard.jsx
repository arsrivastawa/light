import React, { useState } from "react";
import "./MembersCard.css";
import { motion } from "framer-motion";
import { cardVariants } from "../variants/variants";
import { useInView } from "react-intersection-observer";
function MembersCard({
  name,
  domainOrBranch,
  linkedinUrl,
  instaUrl,
  email,
  ImgUrl,
}) {
  //creating URL for blurred loading Image
  let urlArray = ImgUrl.split("/");
  let name1 = urlArray.pop();
  urlArray.push(urlArray[urlArray.length - 1] + "-min");
  urlArray.push(name1.split(".")[0] + "-min.jpg");
  let loaderImageUrl = urlArray.join("/");
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
 return (
  <motion.div
    ref={ref}
    variants={cardVariants}
    initial="offscreen"
    animate={!inView ? "offscreen" : "onscreen"}
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="relative rounded-3xl h-[500px] w-[320px] m-4
    bg-gradient-to-br from-white via-slate-50 to-yellow-100
    shadow-lg border border-slate-200 overflow-hidden 
    hover:border-yellow-400 hover:shadow-2xl duration-300 group"
  >
  
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
    bg-gradient-to-r from-yellow-200/40 via-orange-200/40 to-pink-200/40 
    blur-2xl transition duration-300"></div>

    <div className="relative h-full w-full">
      <div className="px-1 py-14 h-full cursor-pointer">
        <div className="flex flex-col gap-4 items-center px-6 w-full h-full text-center">

        
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-300 blur-md opacity-0 group-hover:opacity-60 transition"></div>

            <img
              className={`${
                loaded ? "" : "hidden"
              } w-[220px] object-cover rounded-full aspect-square 
              ring-4 ring-yellow-200 group-hover:ring-yellow-400
              transition duration-300 group-hover:scale-105`}
              src={ImgUrl}
              onLoad={() => setLoaded(true)}
              alt="Member_Img"
            />

            {!loaded && (
              <img
                className="w-[220px] blur-md object-cover rounded-full aspect-square"
                src={loaderImageUrl}
                alt="Member_Img"
              />
            )}
          </div>

        
          <h1 className="font-josefin font-bold text-2xl uppercase tracking-wide">
            {name}
          </h1>

          
          <p className="font-josefin text-lg font-semibold text-slate-600 capitalize">
            {domainOrBranch}
          </p>

          
          <div className="w-16 h-[3px] bg-yellow-400 rounded-full flex-shrink-0"></div>


          
          <div className="text-2xl flex gap-4 mt-2">
            {email && (
              <a href={`mailto:${email}`}>
                <i className="bi bi-envelope-at-fill 
                hover:text-yellow-500 hover:scale-125 
                transition duration-200"></i>
              </a>
            )}

            {instaUrl && (
              <a href={instaUrl} target="_blank">
                <i className="bi bi-instagram 
                hover:text-pink-500 hover:scale-125 
                transition duration-200"></i>
              </a>
            )}

            {linkedinUrl && (
              <a href={linkedinUrl} target="_blank">
                <i className="bi bi-linkedin 
                hover:text-blue-600 hover:scale-125 
                transition duration-200"></i>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  </motion.div>
);
}

export default MembersCard;

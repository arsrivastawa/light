import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoWithoutText.png";
import { createPortal } from "react-dom";
import "./SideBar.css";
import NavButton from "../navButtons/NavButton";

function SideBar({ isMounted, unMount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      document.body.classList.add("scroll-lock");
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove("scroll-lock");
      }, 300);
    }
    return () => {
      if (
        document.body.classList.contains("scroll-lock") &&
        isTransitioning
      ) {
        document.body.classList.remove("scroll-lock");
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <div
      className={`sidebar-container z-[100] top-0 left-0 fixed ${
        isTransitioning && isMounted ? "translate-x-0" : "-translate-x-full"
      } w-full h-full bg-white duration-300`}
    >
      <div className="sidebar-navbar w-full flex flex-row justify-center border-b border-b-slate-300">
        <div className="px-4 w-[80%] flex justify-between">
          <Link to={"/"}>
            <div className="logo-container py-2 h-full w-[70px] bg-black grid place-items-center rounded-b-2xl">
              <img src={Logo} className="w-[60%]" alt="Logo_Img" />
            </div>
          </Link>
          <div
            onClick={unMount}
            className="close-logo text-2xl p-3 sm:text-3xl border-none cursor-pointer duration-150"
          >
            <i class="bi bi-x-lg duration-300 focus:outline-none active:bg-slate-200 rounded-full"></i>
          </div>
        </div>
      </div>
      <div className="grid place-content-center font-medium gap-y-4 p-4 text-base sm:text-lg">
        <NavButton title={"Home"} navigateTo={"/"} classname={"text-center"} />
        <NavButton
          title={"About"}
          navigateTo={"/about"}
          classname={"text-center"}
        />
        <NavButton
          title={"Events"}
          navigateTo={"/events"}
          classname={"text-center"}
        />
        <NavButton
          title={"Members"}
          navigateTo={"/members"}
          classname={"text-center"}
        />
        <NavButton
          title={"Gallery"}
          navigateTo={"/gallery"}
          classname={"text-center"}
        />
      </div>
    </div>,
    document.getElementById("overlay")
  );
}

export default SideBar;

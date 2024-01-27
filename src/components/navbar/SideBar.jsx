import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoWithoutText.png";
import { createPortal } from "react-dom";
import "./SideBar.css";

function SideBar({ isMounted, unMount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      document.documentElement.classList.add("scroll-lock");
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove("scroll-lock");
      }, 300);
    }
    return () => {
      if (
        document.documentElement.classList.contains("scroll-lock") &&
        isTransitioning
      ) {
        document.documentElement.classList.remove("scroll-lock");
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
      <div className="sidebar-navbar w-full flex flex-row justify-center border-b border-b-slate-300 pb-2">
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
        <div class="cursor-pointer text-center duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
          <Link to="/">HOME</Link>
        </div>
        <div class="cursor-pointer text-center duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
          <Link to="/about">ABOUT</Link>
        </div>
        <div class="cursor-pointer text-center duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
          <Link to="/events">EVENTS</Link>
        </div>
        <div class="cursor-pointer text-center duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
          <Link to="/members">MEMBERS</Link>
        </div>
        <div class="cursor-pointer text-center duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded">
          <Link to="/gallery">GALLERY</Link>
        </div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
}

export default SideBar;

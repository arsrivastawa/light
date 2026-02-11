import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import NavButton from "../navButtons/NavButton";

function SideBar({ isMounted, unMount }) {
  useEffect(() => {
    if (isMounted) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMounted]);

  if (!isMounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      
      
      <div
        className={`absolute top-0 right-0 h-full w-full bg-orange-400
        transition-transform duration-300 ease-in-out
        ${isMounted ? "translate-x-0" : "translate-x-full"}`}
      >
      
        <div className="flex items-center justify-between px-4 h-[70px] border-b-4 border-white/30 mb-10">
          <div className="flex items-center gap-5">
            <img
              src="/assets/logoWithoutText.png"
              alt="logo"
              className="h-15 w-12 rounded-full bg-orange-300 p-1"
            />
            <span className="text-slate-800 text-xl font-semibold">
              LiGHT Sindri
            </span>
          </div>

          <button
            onClick={unMount}
            className="text-slate-800 text-2xl p-2"
          >
            ✕
          </button>
        </div>

        
        <div className="flex flex-col items-center justify-center gap-20 text-slate-800 text-lg font-semibold tracking-wide h-[calc(100%-180px)]">
          <Link to="/" onClick={unMount} >
            HOME
          </Link>
          <Link to="/about" onClick={unMount}>
            ABOUT US
          </Link>
          <Link to="/events" onClick={unMount}>
            INITIATIVES
          </Link>
          <Link to="/gallery" onClick={unMount}>
            MEDIA
          </Link>
          <Link to="/members" onClick={unMount}>
            MEMBERS
          </Link>
          {/* <Link to="" onClick={unMount}>
          DONATE</Link> */}
        </div>

        
      </div>
    </div>,
    document.body
  );
}

export default SideBar;


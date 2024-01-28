import React, { useEffect, useState } from "react";
import Logo from "../../assets/logoWithoutText.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SideBar from "./SideBar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.body.appendChild(div);
    return () => div.remove();
  }, []);
  return (
    <>
      <div className=" w-full border-b border-b-slate-300 flex justify-center">
        <div class="nav-container items-stretch px-4 flex justify-between w-[90%] sm:w-[80%]">
          <Link to="/" className=" flex flex-row items-center">
            <div class="logo-container py-2 h-full w-[70px] bg-black grid place-items-center rounded-b-2xl">
              <img src={Logo} className="w-[60%]" alt="logo" />
            </div>
            <h1 className="sm:text-2xl text-xl font-roboto font-semibold ml-2">
              LiGHT Sindri
            </h1>
          </Link>
          <div class="lower-navbar bg-white font-roboto font-medium my-auto text-black sm:bg-white flex flex-row justify-start py-2">
            <div class="mx-1 cursor-pointer  duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-[#f4f4ff] rounded text-lg">
              <Link to="/">HOME</Link>
            </div>
            <div class="mx-1 cursor-pointer  duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-[#f4f4ff] rounded text-lg">
              <Link to="/about">ABOUT</Link>
            </div>
            <div class="mx-1 cursor-pointer duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-[#f4f4ff] rounded text-lg">
              <Link to="/events">EVENTS</Link>
            </div>
            <div class="mx-1 cursor-pointer duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-[#f4f4ff] rounded text-lg">
              <Link to="/members">MEMBERS</Link>
            </div>
            <div class="mx-1 cursor-pointer duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-[#f4f4ff] rounded text-lg">
              <Link to="/gallery">GALLERY</Link>
            </div>
          </div>
          {/* <div class="sidebar-container relative px-1 bg-white flex sm:hidden flex-row justify-between w-full items-stretch">
          <div class="sidebar-content -left-[110%] bg-white duration-300 fixed pt-24 h-screen w-1/2">
            <div class="mx-1 cursor-pointer text-black duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded text-lg">
              <a href="./index.html">Home</a>
            </div>
            <div class="mx-1 cursor-pointer text-black duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded text-lg">
              About Us
            </div>
            <div class="mx-1 cursor-pointer text-black duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded text-lg">
              <a href="./events.html">Events</a>
            </div>
            <div class="mx-1 cursor-pointer text-black duration-150 border-0 py-1 px-4 focus:outline-none hover:bg-slate-200 rounded text-lg">
              <a href="./members.html">Members</a>
            </div>
          </div>
          <div class="logo-container w-[80px] bg-black grid place-items-center py-3 rounded-b-2xl">
          <img
          src="./assets/IMG-20230606-WA0006.png"
          class="w-[60px]"
          alt="logo"
          />
          </div>
        </div> */}
          <div
            onClick={() => setIsOpen(true)}
            class="ham-burger p-3 text-2xl sm:text-3xl border-none duration-150"
          >
            <i class="hamberger-lines bi bi-list duration-300 focus:outline-none active:bg-slate-200 rounded-full"></i>
          </div>
        </div>
        <SideBar isMounted={isOpen} unMount={() => setIsOpen(false)} />
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import Logo from "../../assets/logoWithoutText.png";
import { Link } from "react-router-dom";
import FooterLink from "../footerButtons/FooterLink";

function Footer() {
  return (
    <>
      <footer class="p-4 bg-[#FFA447] sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
          <div class="flex flex-col md:justify-between">
            <div class="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:p-6 px-6 gap-4 sm:gap-6">
              <div class="md:mb-0">
                <Link
                  to="/"
                  class="border-b-2 border-b-black w-fit p-1 flex items-center"
                >
                  <img src={Logo} class="mr-1 h-7" alt="Light_Logo" />
                  <span class="self-end text-xl sm:text-2xl -mb-1 font-semibold whitespace-nowrap dark:text-white">
                    LiGHT Sindri
                  </span>
                </Link>
                <h1 className="text-[11px] sm:text-xs italic">
                  An Expansion Initiative of{" "}
                  <span className=" hover:underline cursor-pointer">
                    <a target="_blank" href="https://gyws.org/">
                      GYWS<i class="bi bi-link-45deg"></i>
                    </a>
                  </span>
                </h1>
              </div>
              <div className="w-full flex font-roboto flex-row justify-between">
                <div>
                  <div>
                    <FooterLink to={"/"} title={"home"} />
                    <FooterLink to={"/about"} title={"About us"} />
                    <FooterLink to={"/events"} title={"Events"} />
                  </div>
                </div>
                <div>
                  <div>
                    <FooterLink to={"/members"} title={"Members"} />
                    <FooterLink to={"/gallery"} title={"Gallery"} />
                    <div class="mb-4 w-[78px] cursor-pointer h-[22px] relative group overflow-hidden">
                      <a href="mailto:lightsindri@gmail.com">
                        <div className="absolute duration-300 group-hover:bottom-[0%] ease-out -bottom-[115%] left-0">
                          <span className="block uppercase">Mail us</span>
                          <span className="block uppercase">Mail us</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col-reverse sm:flex-row px-6 sm:items-center sm:justify-between">
            <span class="text-sm text-gray-700 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link to="/" class="hover:underline">
                LiGHT
              </Link>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-black hover:text-slate-500 dark:hover:text-white"
              >
                <i class="text-xl bi bi-instagram"></i>
              </a>
              <a
                href="#"
                class="text-black hover:text-slate-500 dark:hover:text-white"
              >
                <i class="text-xl bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

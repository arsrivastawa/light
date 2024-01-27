import React from "react";
import Logo from "../../assets/logoWithoutText.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="p-4 bg-[#DCF2F1] sm:p-6 dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl">
          <div class="flex flex-col md:justify-between">
            <div class="grid grid-cols-3 gap-8 sm:gap-6">
              <div class="mb-6 md:mb-0">
                <Link
                  to="/"
                  class="border-b-2 border-b-black w-fit p-1 flex items-center"
                >
                  <img src={Logo} class="mr-3 h-8" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    LiGHT Sindri
                  </span>
                </Link>
                <h1 className="text-sm italic">
                  An Expansion Initiative of{" "}
                  <span className=" hover:underline cursor-pointer">
                    <a target="_blank" href="https://gyws.org/">
                      GYWS<i class="bi bi-link-45deg"></i>
                    </a>
                  </span>
                </h1>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a href="https://flowbite.com" class="hover:underline">
                      LiGHT
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link to="/" class="hover:underline">
                LiGHT
              </Link>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-[#365486] dark:hover:text-white"
              >
                <i class="text-xl bi bi-facebook"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-[#365486] dark:hover:text-white"
              >
                <i class="text-xl bi bi-instagram"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-[#365486] dark:hover:text-white"
              >
                <i class="text-xl bi bi-twitter-x"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-[#365486] dark:hover:text-white"
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

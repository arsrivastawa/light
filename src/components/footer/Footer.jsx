import React from "react";
import { Link } from "react-router-dom";
import FooterLink from "../footerButtons/FooterLink";

function Footer() {
  return (
    <footer className="relative bg-orange-400 text-slate-800 overflow-hidden mt-16">
      
      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-transparent to-pink-200/20 blur-3xl"></div>

      <div className="relative max-w-screen-xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* LOGO + MISSION */}
          <div>
            <Link
              to="/"
              className="flex items-center w-fit border-b-2 border-black pb-1 hover:gap-3 transition-all"
            >
              <img
                src="/assets/logoWithoutText.png"
                alt="LiGHT Sindri Logo"
                className="h-9 mr-2"
              />
              <span className="text-2xl font-semibold tracking-wide">
                LiGHT Sindri
              </span>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-slate-800">
              Empowering youth through education, awareness, and
              community-driven initiatives in Sindri.
            </p>

            <p className="mt-4 text-xs italic">
              An expansion initiative of{" "}
              <a
                href="https://gyws.org/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-black transition"
              >
                GYWS
              </a>
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <FooterLink to="/" title="Home" />
            <FooterLink to="/about" title="About Us" />
            <FooterLink to="/events" title="Events" />
            <FooterLink to="/gallery" title="Gallery" />
          </div>

          {/* OUR WORK */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wider">
              Our Work
            </h3>
            <ul className="space-y-2">
              <li className="text-sm hover:translate-x-1 transition">• Workshops</li>
              <li className="text-sm hover:translate-x-1 transition">• Awareness Drives</li>
              <li className="text-sm hover:translate-x-1 transition">• Youth Empowerment</li>
              <li className="text-sm hover:translate-x-1 transition">• Community Outreach</li>
            </ul>
          </div>

          {/* GET INVOLVED */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wider">
              Get Involved
            </h3>

            <p className="text-sm mb-5">
              Want to make a difference in your community?
            </p>

            <a
              href="https://forms.gle/Yu4CdTGJKZx1kJf58"
              target="_blank"
              className="inline-block px-5 py-2 text-sm font-medium border-2 border-black rounded-full 
              hover:bg-black hover:text-white transition-all duration-300"
            >
              Become a Volunteer
            </a>

            <a
              href="mailto:lightsindri@gmail.com"
              className="block mt-5 text-sm italic hover:underline hover:text-black transition"
            >
              📧 lightsindri@gmail.com
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-[1px] bg-black/20"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">

          <span className="text-sm text-center">
            © 2026{" "}
            <Link to="/" className="italic hover:underline">
              LiGHT Sindri
            </Link>
            . Made with ❤️ for community upliftment.
          </span>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.instagram.com/light.sindri"
              className="hover:scale-125 hover:text-pink-600 transition-all duration-300"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://whatsapp.com/channel/0029VaeFHYk7j6g93rk2kz3W"
              className="hover:scale-125 hover:text-green-600 transition-all duration-300"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/light-sindri/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 hover:text-[#0A66C2] transition-all duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}



export default Footer;


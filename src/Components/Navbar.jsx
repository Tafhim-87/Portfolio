"use client";

import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import "@/Components/nav.css";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { TfiAlignLeft } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const pathname = usePathname();

  // Refs for GSAP animations
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  // GSAP animation
  useGSAP(() => {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from(ref1.current, { opacity: 0, y: -30, x: -10 });
    tl.from(
      [ref2.current, ref4.current, ref5.current, ref6.current, ref3.current],
      {
        opacity: 0,
        y: -30,
        x: -10,
        stagger: 0.3,
      }
    );
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setMenuBar((prev) => !prev);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="max-w-[1440px] w-[390px] md:w-[572px] lg:w-[1440px] py-[32px] px-[8px] lg:px-[100px] h-[104px] flex gap-[32px]">
        <div className="flex items-center justify-between w-full relative">
          <h1 ref={ref1} className="text-2xl font-bold">
            Tafhim
          </h1>

          {/* For Desktop */}
          <div className="hidden lg:flex gap-4 justify-center items-center">
            <Link
              ref={ref2}
              className={pathname === "/" ? "active" : ""}
              href="/"
            >
              Home
            </Link>
            <Link
              ref={ref4}
              href="/about-us"
              className={pathname === "/about-us" ? "active" : ""}
            >
              About us
            </Link>
            <Link
              ref={ref5}
              href="/projects"
              className={pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
            <Link
              ref={ref6}
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </div>
          {/* For Desktop */}

          {/* For Mobile */}
          <div
            className={`menuBar lg:hidden fixed top-0  transition-right duration-300 transform ${
              menuBar ? "right-0" : "right-[-100%]"
            } w-[80%] h-[100%] z-10 flex flex-col gap-4 py-[40px] justify-start items-start px-4`}
          >
            <div className="w-full flex justify-start px-2 sm:px-3 md:px-10">
              <FiX onClick={toggleMenu} className="cursor-pointer" size={30} />
            </div>
            <Link
              ref={ref2}
              className={pathname === "/" ? "active-1" : ""}
              onClick={() => {
                setMenuBar((prev) => !prev);
              }}
              href="/"
            >
              Home
            </Link>
            <Link
              ref={ref4}
              href="/about-us"
              onClick={() => {
                setMenuBar((prev) => !prev);
              }}
              className={pathname === "/about-us" ? "active-1" : ""}
            >
              About us
            </Link>
            <Link
              ref={ref5}
              href="/projects"
              onClick={() => {
                setMenuBar((prev) => !prev);
              }}
              className={pathname === "/projects" ? "active-1" : ""}
            >
              Projects
            </Link>
            <Link
              ref={ref6}
              href="/contact"
              onClick={() => {
                setMenuBar((prev) => !prev);
              }}
              className={pathname === "/contact" ? "active-1" : ""}
            >
              Contact
            </Link>

            <Link href="/">
              <button
                ref={ref3}
                className="lg:hidden block mt-[30%] text-[14px] leading-[24px] active:scale-105 bg-transparent border-2 border-white px-[24px] py-2 rounded-full"
              >
                HIRE ME
              </button>
            </Link>
          </div>
          {/* For Mobile */}

          <div className="flex lg:hidden w-full justify-end px-2">
            <TfiAlignLeft onClick={toggleMenu} className="cursor-pointer" />
          </div>

          <Link href="/">
            <button
              ref={ref3}
              className="hidden lg:block text-[14px] leading-[24px] active:scale-105 bg-transparent border-2 border-white px-[24px] py-2 rounded-full"
            >
              HIRE ME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

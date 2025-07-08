"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Experties = () => {
  let data = [
    {
      title: "HTML & CSS",
      disc: "Proficient in structuring and styling web applications with a strong understanding of responsive design principles.",
    },
    {
      title: "Tailwind CSS",
      disc: "Proficient in building fully responsive, mobile-friendly web layouts quickly and efficiently using Tailwind’s utility-first approach.",
    },
    {
      title: "NextJS",
      disc: "A React framework for server-rendered and static web apps. It's great for fast, SEO-friendly websites with an excellent dev experience.",
    },
    {
      title: "GSAP",
      disc: "Expert in creating seamless, high-performance 2d animations that enhance user experience using the GSAP library.",
    },
  ];

  const ref1 = useRef();

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useGSAP(() => {
    if (isDesktop) {
      gsap.from(".card", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 50%",
        },
      });
    } else {
      console.log("its mobile");
    }
  });

  return (
    <div ref={ref1} className="w-full flex items-center justify-center">
      <div className="max-w-[1440px] w-[540px] md:w-[1440px] py-[64px] px-[100px] flex flex-col gap-[32px] ">
        <h1 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold">
          Experties
        </h1>
        <div className="flex flex-wrap gap-[30px] lg:gap-[64px] justify-between">
          {data.map((item, index) => {
            return (
              <div
                className=" card w-[370px] md:w-[588px] flex flex-col gap-[16px]"
                key={index}
              >
                <li className="md:text-[24px] lg:text-[26px] font-semibold md:font-bold">
                  {item.title}
                </li>
                <h3 className="text-[12px] md:text-[20px] lg:text-[22px]">
                  {item.disc}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experties;

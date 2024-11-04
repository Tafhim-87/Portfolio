"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/project-1.png";
import image2 from "@/public/project-2.png";
import image3 from "@/public/project-6.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  let data = [
    {
      image: image1,
      title: "too good co.",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image2,
      title: "Turkey Bazaar",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image3,
      title: "Foodpanda",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://panda-form.vercel.app/",
    },
  ];

  const ref1 = useRef();

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useGSAP(() => {
    if (isDesktop) {
      gsap.from(".card1", {
        x: -200,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ref1.current,
          scrub: 2,
          start: "top 100%",
        },
      });
    } else {
      console.log("its mobile");
    }
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-between items-center py-[64px] px-5 lg:px-[100px] max-w-[1440px] w-[380px] md:w-[780px] lg:w-[1440px]">
        <h1 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold">
          Work
        </h1>
        <Link href={"/projects"}>view all</Link>
      </div>

      {/* Card */}

      <div ref={ref1} className="flex flex-col gap-[32px] ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="card1 relative w-[360px] md:w-[780px] lg:w-[1240px] h-[150px] md:h-[390px] lg:h-[493px] bg-[#CBCBCB]/40 rounded-[40px] p-[10px] lg:p-[32px] flex items-center gap-[15px] lg:gap-[32px] overflow-hidden"
            >
              <div className="w-[150px] h-[115px] bg-[#FF804A] rounded-full absolute blur-[100px] z-[-1px] mt-[15rem] ml-[42rem]"></div>
              <div className="w-[250px] md:w-[572px] h-[110px] md:h-[310px] lg:h-[429px] bg-[#CBCBCB] rounded-[24px] z-[3px] overflow-hidden">
                <Image
                  className="w-[100%] h-[100%] object-contain"
                  src={item.image}
                  alt="link"
                  width={1300}
                  height={1300}
                />
              </div>
              <div className="w-[390px] md:w-[572px] h-[150px] md:h-[390px] lg:h-[429px] flex flex-col justify-center md:justify-between">
                <div className="flex flex-col gap-[16px]">
                  <h1 className="text-[26px] md:text-[38px] lg:text-[40px] font-semibold">
                    {item.title}
                  </h1>
                  <h3 className="text-[12px] md:text-[20px] lg:text-[22px]">
                    {item.disc}
                  </h3>
                  <Link
                    href={`${item.link}`}
                    target="_blank"
                    className="text-[12px] bg-transparent w-[67px] hidden md:flex justify-center items-center active:scale-105 py-[8px] px-[24px] border-[1px] border-[#ffffff] rounded-full"
                  >
                    Web
                  </Link>
                </div>
                <Link
                  href={"/projects"}
                  className="py-[16px] px-[32px] border-none bg-[#ffffff] rounded-full mt-2 md:mt-[32px] w-[184px] md:w-[184px] h-[33px] md:h-[56px] flex items-center justify-center text-[#010208] active:scale-105"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* Card */}
    </div>
  );
};

export default Work;

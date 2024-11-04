"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/project-1.png";
import image2 from "@/public/project-2.png";
import image3 from "@/public/project-6.png";
import image4 from "@/public/project-4.png";
import image5 from "@/public/project-5.png";

const ProjectCards = () => {
  let data = [
    {
      image: image1,
      title: "too good co.",
      disc: "Two Good Co is a business for good. Through the creation of beautiful, high quality food and products, we support, empower and employ women with lived experience of homelessness, domestic violence and complex trauma. By supporting Two Good Co, you are creating opportunities for someone to change their life and rebuild their self-worth and independence, in order to break free from the cycle of homelessness and disadvantage.",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image2,
      title: "Turkey Bazaar",
      disc: "Turkey Bazar is one of the best online shopping stores in Bangladesh which is providing all kinds of Turkish products in Bangladesh. Through this website you can easily buy any kind of  Turkish product from your home. As a Bangladesh e-commerce site, online shopping is increasing day by day all over Bangladesh. In most of the big cities of Bangladesh such as Dhaka, Chittagong, Khulna, Sylhet, Rajshahi, and Barisal online shopping increased rapidly.",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image3,
      title: "Foodpanda",
      disc: "Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. ",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image4,
      title: "VirtualR",
      disc: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image5,
      title: "Acronation",
      disc: "We deliver innovative and impactful digital solutions designed to empower brands, enhance their market presence, and drive sustained business growth. By combining creativity with strategic expertise, we ensure that every solution not only meets but exceeds client expectations, helping businesses thrive in a competitive digital landscape.",
      link: "https://acronation.net/",
    },
  ];

  return (
    <div className="flex flex-col mt-[64px] items-center justify-center w-full">
      {/* Card */}

      <div className="flex flex-col gap-[32px] ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="card1 relative w-[360px] md:w-[780px] lg:w-[1240px]  bg-[#CBCBCB]/40 rounded-[40px] p-[10px] lg:p-[32px] flex items-center gap-[15px] lg:gap-[32px] overflow-hidden"
            >
              <div className="w-[150px] h-[115px] bg-[#FF804A] rounded-full absolute blur-[100px] z-[-1px] mt-[15rem] ml-[42rem]"></div>
              <div className="container h-[110px] md:h-[310px] lg:h-[429px] bg-[#CBCBCB] rounded-[24px] z-[3px] overflow-hidden">
                <Image
                  className="w-[100%] h-[100%] object-cover"
                  src={item.image}
                  alt="link"
                  width={1300}
                  height={1300}
                />
              </div>
              <div className="container overflow-y-auto lg:overflow-hidden  flex flex-col justify-center md:justify-between">
                <div className="flex flex-col gap-[4px] md:gap-[16px] overflow-y-auto lg:overflow-hidden">
                  <h1 className="text-[16px] md:text-[38px] lg:text-[40px] font-semibold">
                    {item.title}
                  </h1>
                  <h3 className="text-[8px] md:text-[20px] lg:text-[22px]">
                    {item.disc}
                  </h3>
                  <Link
                    href={`${item.link}`}
                    target="_blank"
                    className="text-[12px] md:text-[22px] bg-transparent container flex justify-center items-center active:scale-105 py-[8px] md:py-[16px] px-[24px] md:px-[40px] border-[1px] border-[#ffffff] rounded-full hover:bg-[#CBCBCB]/20 transition-all duration-300 ease-in-out"
                  >
                    Web
                  </Link>
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Card */}
    </div>
  );
};

export default ProjectCards;

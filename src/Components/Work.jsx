"use client";

import Link from "next/link";
import image1 from "@/public/seenyor.png";
import image2 from "@/public/bms.png";
import image3 from "@/public/safyzone.png";
import image4 from "@/public/panda.png";
import image5 from "@/public/acronation.png";
import image6 from "@/public/task.png";
import { Card } from "./Card";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "@/Components/hero.css";

const Work = () => {
  let data = [
    {
      image: image1,
      title: "Seenyor",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://seenyor.com/",
    },
    {
      image: image2,
      title: "BMS Robotics",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://bms-robotics.vercel.app/",
    },
    {
      image: image3,
      title: "Safyzone",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://safyzone.vercel.app/",
    },
    {
      image: image4,
      title: "Foodpanda",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image5,
      title: "Acronation",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://acronation.net/",
    },
    {
      image: image6,
      title: "Ai Task Management System",
      disc: "With user-centered approach, the goals was to create an intuitive",
      link: "https://task-management-rho-lilac.vercel.app/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-between items-center py-6 md:py-[64px] px-5 lg:px-[100px] max-w-[1440px] container">
        <h1 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold">
          Projects
        </h1>
        <Link href={"/projects"} className="text-blue-600 hover:underline">
          view all
        </Link>
      </div>

      {/* Card */}
      <div className="hidden md:flex flex-wrap gap-5 justify-center lg:justify-between items-center px-5 container">
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.disc}
            link={item.link}
          />
        ))}
      </div>
      {/* Swiper Coverflow Carousel */}
      <div className="w-full flex md:hidden px-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper max-w-[1200px]"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="w-[300px]">
              <Card
                image={item.image}
                title={item.title}
                description={item.disc}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Card */}
    </div>
  );
};

export default Work;
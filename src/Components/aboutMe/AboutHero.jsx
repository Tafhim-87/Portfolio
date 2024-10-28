import React from "react";
import Image from "next/image";
import profPic from "@/public/tafhimPic.jpg";
import line from "@/public/Vector 4.png";

const AboutHero = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative max-w-[1440px] w-[540px] md:w-[1440px] py-[64px] px-[8px] lg:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-[32px]">
        <Image
          src={line}
          alt="line"
          width={300}
          height={400}
          className="hidden lg:block absolute left-[35rem] z-10"
        />

        <h1 className="text-[24px] md:text-[42px] lg:text-[56px] leading-1.2 lg:leading-[64px] font-bold uppercase text-center lg:text-start w-[370px] md:w-[670px] lg:w-[337px]">
          <span className="text-[#ffffff]/60">HI THERE, This is me</span> Tafhim
          Hasan
        </h1>
        <div className="w-[380px] lg:w-[603px] h-[608px] lg:h-[871px] overflow-hidden rounded-xl shadow-md shadow-slate-700/70">
          <Image
            src={profPic}
            className="grayscale object-cover"
            alt="Tafhim Hasan"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

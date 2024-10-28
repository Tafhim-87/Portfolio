"use client";

import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/public/web person.jpg";
import image2 from "@/public/quote.png";
import icnBtnR from "@/public/Frame.png";
import icnBtnL from "@/public/Frameleft.png";

const Testomonial = () => {
  const [left, setLeft] = useState(0);

  const data = [
    {
      img: image1,
      name: "John Doe",
      userName: "@johndoe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      img: image1,
      name: "John Doe",
      userName: "@johndoe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  function moveRight() {
    setLeft((prevLeft) =>
      prevLeft === (data.length - 1) * -100 ? 0 : prevLeft - 100
    );
  }
  function moveLeft() {
    setLeft((prevLeft) => (prevLeft === 0 ? 0 : prevLeft + 100));
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col gap-[32px] py-[64px] px-5 lg:px-[100px] max-w-[1440px] w-[380px] md:w-[780px] lg:w-[1440px]">
        <h1 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold">
          What they say
        </h1>

        {/* Card for review */}

        <div className="flex w-[380px] md:w-[780px] lg:w-[1220px] overflow-hidden">
          {data.map((elem, indx) => {
            return (
              <div
                key={indx}
                className={`card relative w-[380px] md:w-[780px] lg:w-[1240px] h-[264px] py-[16px] flex items-center gap-2 md:gap-[32px] transition-transform duration-300`}
                style={{ transform: `translateX(${left}%)` }}
              >
                <Image
                  src={image2}
                  className="absolute ml-[165px] md:ml-[313px] lg:ml-[31rem] mb-[12rem] w-[40px] md:w-[80px] lg:w-[100px]"
                  alt="quote"
                  width={100}
                  height={100}
                />
                <div className=" w-[210px] md:w-[498px] gap-[16px] flex mb-[8.3rem]">
                  <Image
                    className="w-[64px] h-[64px] rounded-full object-cover"
                    src={elem.img}
                    alt="link"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h1 className="text-[16px] md:text-[24px] leading-[32px] font-semibold">
                      {elem.name}
                    </h1>
                    <h4 className="text-[16px] md:text-[18px] text-[#ffffff]/40">
                      {elem.userName}
                    </h4>
                  </div>
                </div>
                <div className="w-[250px] md:w-[700px] h-[200px]">
                  <h4 className="text-[14px] md:text-[30px] md:leading-[40px] flex justify-start">
                    {elem.text}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card for review */}

        <div className="flex justify-center gap-[16px] w-full">
          <button onClick={moveLeft} className="py-1 px-2">
            <Image
              className="w-[64px] h-[64px] rounded-full object-cover active:scale-105"
              src={icnBtnL}
              alt="btn"
              width={100}
              height={100}
            />
          </button>
          <button onClick={moveRight} className="py-1 px-2">
            <Image
              className="w-[64px] h-[64px] rounded-full object-cover active:scale-105"
              src={icnBtnR}
              alt="btn"
              width={700}
              height={700}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;

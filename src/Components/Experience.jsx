import React from "react";
import Link from "next/link";

const Experience = () => {
  let data = [
    {
      position: "Frontend Developer",
      company: "Acronation",
      date: "10/24/2024 - running",
      link: "https://acronation.net/",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col gap-[32px] py-[64px] px-5 lg:px-[100px] max-w-[1440px] w-[380px] md:w-[780px] lg:w-[1440px]">
        <h1 className="text-[28px] md:text-[38px] lg:text-[50px] font-bold">
          Experience
        </h1>
        {/* card */}
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="border-b-[1px]  py-[8px] flex justify-between items-center"
            >
              <h1 className="text-[22px] md:text-[28px] lg:text-[32px] leading-[40px] ">
                {item.position}
              </h1>
              <div className="flex flex-col gap-[8px] justify-center items-center">
                <Link href={`${item.link}`} target="_blank">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] leading-[32px]">
                    {item.company}
                  </h3>
                </Link>
                <h5 className="text-[14px] md:text-[16px]">{item.date}</h5>
              </div>
            </div>
          );
        })}
      </div>
      {/* card */}
    </div>
  );
};

export default Experience;

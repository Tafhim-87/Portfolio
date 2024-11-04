"use client";

import React, { useEffect, useRef, useState } from "react";
import image1 from "@/public/web person.jpg";
import Image from "next/image";
import "@/Components/hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const tilt = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(ref1.current, {
      transform: "translateY(100%)",
      duration: 1,
    });
    tl.from(
      ref2.current,
      {
        transform: "translateY(100%)",
        duration: 1,
      },
      "-=0.7"
    );
    tl.from(
      ref3.current,
      {
        transform: "translateY(100%)",
        duration: 1,
      },
      "-=0.7"
    );
    tl.from(
      ref4.current,
      {
        transform: "translateY(100%)",
        duration: 1,
      },
      "-=0.7"
    );
    tl.from(
      ref5.current,
      {
        transform: "translateY(100%)",
        duration: 1,
      },
      "-=0.9"
    );
    tl.from(
      ref6.current,
      {
        transform: "translateY(100%)",
        duration: 1,
      },
      "-=0.9"
    );
    tl.from(
      ref7.current,
      {
        x: 200,
        opacity: 0,
        duration: 1,
      },
      "-=0.9"
    );
  });

  function mouseMoving(e) {
    setxVal(
      e.clientX -
        tilt.current.getBoundingClientRect().x -
        tilt.current.getBoundingClientRect().width / 2
    );
    setyVal(
      -(
        e.clientY -
        tilt.current.getBoundingClientRect().y -
        tilt.current.getBoundingClientRect().height / 2
      )
    );
    tilt.current.style.transform = `rotateX(${yVal / 30}deg) rotateY(${
      xVal / 80
    }deg)`;
  }
  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="w-full h-full flex justify-center items-center py-[76px] lg:py-[100px] px-[100px]"
    >
      <div id="realHead" className="w-[1240px]">
        {/* Hero Title */}

        <div
          ref={tilt}
          id="head"
          className="relative flex items-center flex-col"
        >
          <div className="overflow-hidden">
            <h1
              ref={ref1}
              className="bounding text-[24px] md:text-[42px] lg:text-[64px] leading-1.2 lg:leading-[80px] tracking-widest font-bold lg:font-extrabold uppercase text-center flex items-center justify-center"
            >
              i am a
              <Image
                className="w-[50px] md:w-[80px] lg:w-[128px] h-[32px] md:h-[48px] lg:h-[64px] rounded-full object-cover "
                src={image1}
                alt="link"
                width={700}
                height={700}
              />
              frontend
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={ref2}
              className="bounding text-[24px] md:text-[42px] lg:text-[64px] leading-1.2 lg:leading-[80px] tracking-widest font-bold lg:font-extrabold uppercase text-center flex"
            >
              developer from
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              ref={ref3}
              className="bounding text-[24px] md:text-[42px] lg:text-[64px] leading-1.2 lg:leading-[80px] tracking-widest font-bold lg:font-extrabold uppercase text-center flex"
            >
              bangladesh
            </h1>
          </div>
        </div>
        {/* Hero footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-[112px] container px-[20px] md:px-0 gap-[32px]">
          <div className="flex w-[350px] lg:w-[716px] justify-between items-center">
            <div className="overflow-hidden">
              <h1
                ref={ref4}
                className="bounding text-[14px] md:text-[16px] lg:text-[25px]"
              >
                JavaScript
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                ref={ref5}
                className="bounding text-[14px] md:text-[16px] lg:text-[25px]"
              >
                ReactJs
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                ref={ref6}
                className="bounding text-[14px] md:text-[16px] lg:text-[25px]"
              >
                NextJs
              </h1>
            </div>
          </div>
          <p
            ref={ref7}
            className=" lg:w-[492px] text-center lg:text-start text-[12px] lg:text-[16px] leading-[24px]"
          >
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

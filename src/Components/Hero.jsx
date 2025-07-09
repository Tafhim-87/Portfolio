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
      className="w-full h-full py-16 lg:py-24 px-4 sm:px-6 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Hero Title */}
        <div
          ref={tilt}
          className="relative flex items-center flex-col"
        >
          <div className="overflow-hidden w-full">
            <h1
              ref={ref1}
              className="bounding text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-[80px] tracking-wider font-bold lg:font-extrabold uppercase text-center flex items-center justify-center flex-wrap gap-2"
            >
              i am a
              <Image
                className="w-12 h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-32 lg:h-16 rounded-full object-cover"
                src={image1}
                alt="link"
                width={700}
                height={700}
              />
              frontend
            </h1>
          </div>
          <div className="overflow-hidden w-full">
            <h1
              ref={ref2}
              className="bounding text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-[80px] tracking-wider font-bold lg:font-extrabold uppercase text-center"
            >
              developer from
            </h1>
          </div>
          <div className="overflow-hidden w-full">
            <h1
              ref={ref3}
              className="bounding text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-[80px] tracking-wider font-bold lg:font-extrabold uppercase text-center"
            >
              bangladesh
            </h1>
          </div>
        </div>
        
        {/* Hero footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 gap-6 sm:gap-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full lg:w-auto">
            <div className="overflow-hidden">
              <h1
                ref={ref4}
                className="bounding text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                JavaScript
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                ref={ref5}
                className="bounding text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                ReactJs
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                ref={ref6}
                className="bounding text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                NextJs
              </h1>
            </div>
          </div>
          <p
            ref={ref7}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-center lg:text-left max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed"
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
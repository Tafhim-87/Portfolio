"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Hero from "@/Components/Hero";
import Experties from "@/Components/Experties";
import Work from "@/Components/Work";
import Experience from "@/Components/Experience";
import Testomonial from "@/Components/Testomonial";
import { Card } from "@/Components/Card";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

  return (
    <div className="font-body overflow-x-hidden">
      <Hero />
      <Experties />
      <Work />
      <Experience />
      <Testomonial />
    </div>
  );
};

export default Page;

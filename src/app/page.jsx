"use client";

import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Hero from "@/Components/Hero";
import Experties from "@/Components/Experties";
import Work from "@/Components/Work";
import Experience from "@/Components/Experience";
import Testomonial from "@/Components/Testomonial";

const Page = () => {
  const [showButton, setShowButton] = useState(false);

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

    // Handle scroll for button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-body overflow-x-hidden">
      <Hero />
      <Experties />
      <Work />
      <Experience />
      <Testomonial />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-2 bg-[#05244d62] text-white rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 ${
          showButton ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Page;
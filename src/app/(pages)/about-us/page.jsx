import AboutDisc from "@/Components/aboutMe/AboutDisc";
import AboutHero from "@/Components/aboutMe/AboutHero";
import Experience from "@/Components/Experience";
import Testomonial from "@/Components/Testomonial";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <AboutDisc />
      <Experience />
      <Testomonial />
    </div>
  );
};

export default page;

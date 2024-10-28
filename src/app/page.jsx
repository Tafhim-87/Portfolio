import React from "react";
import Hero from "@/Components/Hero";
import Experties from "@/Components/Experties";
import Work from "@/Components/Work";
import Experience from "@/Components/Experience";
import Testomonial from "@/Components/Testomonial";

const page = () => {
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

export default page;

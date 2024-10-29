import ProjectCards from "@/Components/projects/ProjectCards";
import ProjectHero from "@/Components/projects/ProjectHero";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <ProjectHero />
      <ProjectCards />
    </div>
  );
};

export default page;

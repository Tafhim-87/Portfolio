import React from "react";
import img1 from "@/public/code.jpg";
import Image from "next/image";

const ProjectHero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        className="w-[100vw] h-[362px] object-cover "
        src={img1}
        alt="link"
        width={1200}
        height={1400}
      />
    </div>
  );
};

export default ProjectHero;

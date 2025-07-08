"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import Image from "next/image";

export function Card({ title, description, image, link }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#1f1f1f] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

      <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            alt="3D Card Image"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl mt-4 font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          { description }
        </CardItem>
        
        <div className="flex justify-center items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "@/public/seenyor.png";
import image2 from "@/public/bms.png";
import image3 from "@/public/safyzone.png";
import image4 from "@/public/panda.png";
import image5 from "@/public/acronation.png";
import image6 from "@/public/task.png";
import image7 from "@/public/ModResturent.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProjectCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  
  const data = [
    {
      image: image1,
      title: "Seenyor",
      disc: "With user-centered approach, the goal was to create an intuitive e-commerce platform that enhances the shopping experience.",
      link: "https://seenyor.com/",
    },
    {
      image: image2,
      title: "BMS Robotics",
      disc: "A cutting-edge robotics platform designed to showcase innovative automation solutions for modern industries.",
      link: "https://bms-robotics.vercel.app/",
    },
    {
      image: image3,
      title: "Safyzone",
      disc: "Safety-first community platform connecting users with verified service providers in their neighborhood.",
      link: "https://safyzone.vercel.app/",
    },
    {
      image: image4,
      title: "Foodpanda",
      disc: "Food delivery service redesign focusing on faster ordering and improved restaurant discovery.",
      link: "https://panda-form.vercel.app/",
    },
    {
      image: image5,
      title: "Acronation",
      disc: "Brand identity platform helping businesses establish their unique voice in the digital space.",
      link: "https://acronation.net/",
    },
    {
      image: image6,
      title: "AI Task Management",
      disc: "Smart productivity tool that uses artificial intelligence to optimize your workflow and task prioritization.",
      link: "https://task-management-rho-lilac.vercel.app/",
    },{
      image: image7,
      title: "Modern Restaurant",
      disc: "A sleek and contemporary restaurant website design that highlights the menu, ambiance, and reservation options. With AI integration.",
      link: "https://restaurant-order-tau.vercel.app/",
    },
  ];

  useEffect(() => {
    // Initialize animations
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
            // markers: true, // for debugging
          }
        }
      );
      
      // Image hover effect
      const img = card.querySelector('.project-image');
      gsap.to(img, {
        scale: 1.05,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24"
    >
      <div className="space-y-24 md:space-y-32">
        {data.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="project-card relative group flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            {/* Image container - takes full width on mobile, half on desktop */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                className="project-image w-full h-full object-cover transition-transform duration-700 ease-out"
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Content container */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                {item.title}
              </h2>
              <p className="text-gray-300 mb-6 md:mb-8 text-lg">
                {item.disc}
              </p>
              <div className="flex gap-4">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-t from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br text-white rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
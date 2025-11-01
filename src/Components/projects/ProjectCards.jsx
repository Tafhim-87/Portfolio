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

gsap.registerPlugin(ScrollTrigger);

const ProjectCards = () => {
  const cardsRef = useRef([]);

  const projects = [
    {
      image: image1,
      title: "Seenyor",
      desc: "A **full-stack e-commerce platform** built with **Next.js 14**, **TypeScript**, and **Stripe**. Features **AI search**, **real-time inventory**, and **admin dashboard** with analytics.",
      tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind"],
      live: "https://seenyor.com/",
      code: "https://github.com/tafhim/seenyor",
    },
    {
      image: image2,
      title: "BMS Robotics",
      desc: "Showcase site for **industrial automation**. Built with **React Three Fiber**, **GSAP**, and **Framer Motion**. Includes **3D robot models** and **interactive demos**.",
      tech: ["React", "Three.js", "GSAP", "Vercel"],
      live: "https://bms-robotics.vercel.app/",
      code: "https://github.com/tafhim/bms-robotics",
    },
    {
      image: image3,
      title: "Safyzone",
      desc: "Neighborhood safety app with **verified providers**, **real-time chat**, and **emergency alerts**. Built using **Next.js App Router**, **Supabase**, and **Mapbox GL**.",
      tech: ["Next.js", "Supabase", "Mapbox", "Pusher"],
      live: "https://safyzone.vercel.app/",
      code: "https://github.com/tafhim/safyzone",
    },
    {
      image: image4,
      title: "Foodpanda Redesign",
      desc: "Modern food delivery UI with **smart filters**, **voice search**, and **dark mode**. Built with **React**, **Zustand**, and **Tailwind CSS**.",
      tech: ["React", "Zustand", "Tailwind", "Framer"],
      live: "https://panda-form.vercel.app/",
      code: "https://github.com/tafhim/foodpanda-redesign",
    },
    {
      image: image5,
      title: "Acronation",
      desc: "Brand identity platform with **AI logo generator**, **color palette tool**, and **exportable assets**. Powered by **Node.js**, **TensorFlow.js**, and **MongoDB**.",
      tech: ["Node.js", "MongoDB", "AI", "Express"],
      live: "https://acronation.net/",
      code: "https://github.com/tafhim/acronation",
    },
    {
      image: image6,
      title: "AI Task Manager",
      desc: "Smart productivity app that **auto-prioritizes tasks** using AI. Features **drag & drop**, **team sync**, and **Pomodoro timer**.",
      tech: ["React", "OpenAI", "Firebase", "DND Kit"],
      live: "https://task-management-rho-lilac.vercel.app/",
      code: "https://github.com/tafhim/ai-task-manager",
    },
    {
      image: image7,
      title: "Modern Restaurant",
      desc: "AI-powered restaurant site with **menu generator**, **table booking**, and **dynamic pricing**. Built with **Next.js**, **Resend**, and **PostgreSQL**.",
      tech: ["Next.js", "PostgreSQL", "Resend", "AI"],
      live: "https://restaurant-order-tau.vercel.app/",
      code: "https://github.com/tafhim/restaurant-ai",
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      const img = card.querySelector(".project-img");
      const content = card.querySelector(".project-content");
      const btnLive = card.querySelector(".btn-live");
      const btnCode = card.querySelector(".btn-code");

      // 3D Tilt
      const handleMouse = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotateY: x * 18, rotateX: -y * 18, scale: 1.03, duration: 0.6, ease: "power3.out" });
      };
      const reset = () => gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.6 });

      card.addEventListener("mousemove", handleMouse);
      card.addEventListener("mouseleave", reset);

      // Scroll Animations
      gsap.fromTo(
        [img, content],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );

      // Parallax Zoom
      gsap.to(img, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
      });

      // Magnetic Buttons
      [btnLive, btnCode].forEach((btn) => {
        const move = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
          gsap.to(btn, { x, y, duration: 0.6, ease: "power2.out" });
        };
        const resetBtn = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6 });
        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", resetBtn);
      });

      return () => {
        card.removeEventListener("mousemove", handleMouse);
        card.removeEventListener("mouseleave", reset);
      };
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8 md:space-y-12">
        {projects.map((p, i) => (
          <article
            key={i}
            ref={addToRefs}
            className="group relative bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 
                       backdrop-blur-xl border border-gray-700/60 rounded-3xl p-5 md:p-7 
                       shadow-2xl overflow-hidden
                       [transform-style:preserve-3d] transition-all duration-500"
            style={{ perspective: "1200px" }}
          >
            {/* Gradient Border Glow */}
            <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Image */}
              <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl">
                <Image
                  className="project-img w-full h-full object-cover"
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="project-content space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
                  {p.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gray-800/80 text-indigo-300 rounded-full border border-indigo-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <Link
                    href={p.live}
                    target="_blank"
                    className="btn-live relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-medium text-sm rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all"
                  >
                    Live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                  <Link
                    href={p.code}
                    target="_blank"
                    className="btn-code relative inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800/80 hover:bg-gray-700 text-white font-medium text-sm rounded-full border border-gray-600 hover:border-gray-500 transition-all"
                  >
                    Code
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6.75zM12 11.25a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM12.75 15a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM3.75 7.5h.007v.007H3.75V7.5zm0 4.5h.007v.007H3.75v-.007zm0 4.5h.007v.007H3.75v-.007z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
"use client";

import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { TfiAlignLeft } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Refs for GSAP animations
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const navbarRef = useRef();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation
  useGSAP(() => {
    let tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.from(ref1.current, { 
      opacity: 0, 
      y: -30,
      rotationX: 90,
      transformOrigin: "50% 0%"
    });
    tl.from(
      [ref2.current, ref4.current, ref5.current, ref3.current],
      {
        opacity: 0,
        y: -30,
        stagger: 0.15,
      },
      "-=0.5"
    );

    // Animate navbar background
    tl.from(navbarRef.current, {
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(0,0,0,0)",
      duration: 1.5
    }, 0);
  }, []);

  // Toggle mobile menu with animation
  const toggleMenu = () => {
    if (menuBar) {
      // Closing animation
      gsap.to(".menuBar", {
        right: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setMenuBar(false)
      });
    } else {
      setMenuBar(true);
      // Opening animation
      gsap.fromTo(".menuBar", 
        { right: "-100%" },
        { right: 0, duration: 0.5, ease: "power2.inOut" }
      );
    }
  };

  // Hover animation for nav items
  const handleHover = (element) => {
    gsap.to(element, {
      y: -2,
      color: "#6366f1",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleHoverOut = (element) => {
    gsap.to(element, {
      y: 0,
      color: pathname === element.getAttribute("href") ? "#6366f1" : "#ffffff",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div 
      ref={navbarRef}
      className={`w-full flex items-center justify-center fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/80 backdrop-blur-md py-4 shadow-lg shadow-black/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 h-16 flex">
        <div className="flex items-center justify-between w-full relative">
          {/* Logo with 3D effect */}
          <h1 
            ref={ref1} 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer"
            onMouseEnter={(e) => handleHover(e.target)}
            onMouseLeave={(e) => handleHoverOut(e.target)}
          >
            Tafhim
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 justify-center items-center">
            <Link
              ref={ref2}
              className={`relative py-2 px-1 transition-colors ${
                pathname === "/" ? "text-blue-400" : "text-white"
              }`}
              href="/"
              onMouseEnter={(e) => handleHover(e.target)}
              onMouseLeave={(e) => handleHoverOut(e.target)}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </Link>
            <Link
              ref={ref4}
              href="/about-us"
              className={`relative py-2 px-1 transition-colors ${
                pathname === "/about-us" ? "text-blue-400" : "text-white"
              }`}
              onMouseEnter={(e) => handleHover(e.target)}
              onMouseLeave={(e) => handleHoverOut(e.target)}
            >
              About me
              {pathname === "/about-us" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </Link>
            <Link
              ref={ref5}
              href="/projects"
              className={`relative py-2 px-1 transition-colors ${
                pathname === "/projects" ? "text-blue-400" : "text-white"
              }`}
              onMouseEnter={(e) => handleHover(e.target)}
              onMouseLeave={(e) => handleHoverOut(e.target)}
            >
              Projects
              {pathname === "/projects" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Hire Me Button with glow effect */}
          <Link
            href="https://www.linkedin.com/in/tafhim-hasan-20349a21a/"
            target="_blank"
          >
            <button
              ref={ref3}
              className="hidden lg:block relative text-sm font-medium active:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full overflow-hidden group"
            >
              <span className="relative z-10">HIRE ME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 blur-md group-hover:blur-lg transition-all duration-300 opacity-70 group-hover:opacity-100"></div>
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden w-full justify-end">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <TfiAlignLeft className="text-white" size={20} />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`menuBar lg:hidden fixed top-0 right-0 w-72 h-full z-50 flex flex-col gap-8 py-12 justify-start items-start px-8 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/40`}
            style={{ display: menuBar ? 'flex' : 'none' }}
          >
            <div className="w-full flex justify-between items-center mb-10">
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Tafhim
              </h1>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50"
              >
                <FiX className="text-white" size={20} />
              </button>
            </div>
            
            <Link
              className={`w-full py-4 px-4 rounded-lg transition-all ${
                pathname === "/" 
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                  : "text-white hover:bg-gray-800/50"
              }`}
              onClick={toggleMenu}
              href="/"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`w-full py-4 px-4 rounded-lg transition-all ${
                pathname === "/about-us" 
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                  : "text-white hover:bg-gray-800/50"
              }`}
              onClick={toggleMenu}
            >
              About me
            </Link>
            <Link
              href="/projects"
              className={`w-full py-4 px-4 rounded-lg transition-all ${
                pathname === "/projects" 
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                  : "text-white hover:bg-gray-800/50"
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>

            <Link
              href="https://www.linkedin.com/in/tafhim-hasan-20349a21a/"
              target="_blank"
              className="w-full mt-8"
              onClick={toggleMenu}
            >
              <button className="w-full text-center py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium">
                HIRE ME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
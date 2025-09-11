"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import image1 from "@/public/web person.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTech, setActiveTech] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const tilt = useRef();
  const canvasRef = useRef();
  const particlesRef = useRef([]);
  const techRefs = [useRef(), useRef(), useRef()];

  // Initialize after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse position tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation with Three.js
  useEffect(() => {
    if (!isMounted) return;

    const initParticles = async () => {
      const THREE = await import("three");

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        alpha: true,
        antialias: true
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Create particles
      const particleCount = 100;
      const particles = new THREE.Group();
      scene.add(particles);
      
      const particleGeometry = new THREE.SphereGeometry(0.05, 10, 10);
      const particleMaterial = new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        shininess: 100
      });
      
      for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        
        // Random position
        particle.position.x = (Math.random() - 0.5) * 10;
        particle.position.y = (Math.random() - 0.5) * 10;
        particle.position.z = (Math.random() - 0.5) * 10;
        
        // Random velocity
        particle.userData = {
          velocity: {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
          },
          amplitude: Math.random() * 0.1 + 0.05,
          frequency: Math.random() * 0.1 + 0.01
        };
        
        particles.add(particle);
        particlesRef.current.push(particle);
      }
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0x4f46e5, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
      
      // Position camera
      camera.position.z = 5;
      
      // Animation
      const clock = new THREE.Clock();
      
      const animate = () => {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        // Animate particles
        particlesRef.current.forEach(particle => {
          particle.position.x += Math.sin(elapsedTime * particle.userData.frequency) * particle.userData.amplitude;
          particle.position.y += Math.cos(elapsedTime * particle.userData.frequency) * particle.userData.amplitude;
          particle.position.z += particle.userData.velocity.z;
          
          // Boundary check
          if (Math.abs(particle.position.x) > 5) particle.userData.velocity.x *= -1;
          if (Math.abs(particle.position.y) > 5) particle.userData.velocity.y *= -1;
          if (Math.abs(particle.position.z) > 5) particle.userData.velocity.z *= -1;
        });
        
        // Rotate entire particle system
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    };

    initParticles();
  }, [isMounted]);

  // GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Main text animations
    tl.from(ref1.current, {
      y: "100%",
      duration: 1.2,
      ease: "power3.out"
    });
    tl.from(
      ref2.current,
      {
        y: "100%",
        duration: 1.2,
        ease: "power3.out"
      },
      "-=0.8"
    );
    tl.from(
      ref3.current,
      {
        y: "100%",
        duration: 1.2,
        ease: "power3.out"
      },
      "-=0.8"
    );
    
    // Tech stack animations
    tl.from(
      techRefs.map(ref => ref.current),
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      },
      "-=0.5"
    );
    
    // Description animation
    tl.from(
      ref7.current,
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.5"
    );
  });

  // Mouse tilt effect
  useEffect(() => {
    if (!tilt.current) return;
    
    const x = (mousePosition.x / window.innerWidth - 0.5) * 20;
    const y = -(mousePosition.y / window.innerHeight - 0.5) * 20;
    
    tilt.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateZ(0)`;
  }, [mousePosition]);

  // Tech hover effect
  const handleTechHover = (index) => {
    setActiveTech(index);
    
    // Animate the hovered tech
    gsap.to(techRefs[index].current, {
      scale: 1.1,
      color: "#6366f1",
      duration: 0.3,
      ease: "power2.out"
    });
    
    // Animate other tech items
    techRefs.forEach((ref, i) => {
      if (i !== index && ref.current) {
        gsap.to(ref.current, {
          scale: 0.95,
          color: "#9ca3af",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  const handleTechLeave = () => {
    setActiveTech(null);
    
    // Reset all tech items
    techRefs.forEach(ref => {
      if (ref.current) {
        gsap.to(ref.current, {
          scale: 1,
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <div className="w-full min-h-screen py-16 lg:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 to-[#010208] flex items-center justify-center">
      {/* Animated background particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
      />
      
      {/* Mouse follower glow */}
      <div 
        className="absolute rounded-full pointer-events-none transition-transform duration-300 ease-out"
        style={{
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          left: `${mousePosition.x - 20}vw`,
          top: `${mousePosition.y - 20}vh`,
          transform: "translate(-50%, -50%)"
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Title */}
        <div
          ref={tilt}
          className="relative flex items-center flex-col mb-16 transition-transform duration-300 ease-out"
        >
          <div className="overflow-hidden w-full mb-2">
            <h1
              ref={ref1}
              className="bounding text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight lg:leading-[90px] tracking-tight font-bold uppercase text-center flex items-center justify-center flex-wrap gap-3 text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                i am a
              </span>
              <Image
                className="w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-32 lg:h-20 rounded-full object-cover border-2 border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110"
                src={image1}
                alt="Profile"
                width={700}
                height={700}
              />
              <span className="relative">
                frontend
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              </span>
            </h1>
          </div>
          
          <div className="overflow-hidden w-full mb-2">
            <h1
              ref={ref2}
              className="bounding text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight lg:leading-[90px] tracking-tight font-bold uppercase text-center text-white"
            >
              developer from
            </h1>
          </div>
          
          <div className="overflow-hidden w-full">
            <h1
              ref={ref3}
              className="bounding text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight lg:leading-[90px] tracking-tight font-bold uppercase text-center text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
                bangladesh
              </span>
            </h1>
          </div>
        </div>
        
        {/* Hero footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-28 gap-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full lg:w-auto">
            {["JavaScript", "ReactJs", "NextJs"].map((tech, index) => (
              <div 
                key={index}
                ref={techRefs[index]}
                className="relative overflow-hidden group"
                onMouseEnter={() => handleTechHover(index)}
                onMouseLeave={handleTechLeave}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative z-10 p-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm group-hover:bg-transparent transition-all duration-300">
                  <h1
                    className={`text-lg sm:text-xl md:text-2xl font-medium cursor-pointer transition-all duration-300 ${
                      activeTech === index ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {tech}
                  </h1>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <p
              ref={ref7}
              className="relative text-sm sm:text-base md:text-lg text-center lg:text-left max-w-md lg:max-w-lg xl:max-w-xl leading-relaxed text-gray-300 bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm"
            >
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
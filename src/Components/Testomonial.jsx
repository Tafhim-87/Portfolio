"use client";

import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/public/web person.jpg";
import image3 from "@/public/codevely.png";
import image2 from "@/public/quote.png";
import icnBtnR from "@/public/Frame.png";
import icnBtnL from "@/public/Frameleft.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      img: image3,
      name: "John Doe",
      userName: "@johndoe",
      text: "Working with Tafhim has been a fantastic experience. As a Frontend Developer at Code Vely, he consistently delivered his projects on time and with great attention to detail. His creative thinking and problem-solving approach added real value to our team. Tafhim doesn't just write code—he brings ideas to life with clarity and vision.",
    },
    {
      img: image1,
      name: "Jane Smith",
      userName: "@janesmith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full lg:px-8 py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          What they say
        </h1>

        {/* Testimonial Carousel */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="relative bg-black rounded-xl p-6 md:p-8 lg:p-10 shadow-lg">
                  <Image
                    src={image2}
                    className="absolute top-6 right-6 md:right-8 w-8 md:w-12 opacity-60"
                    alt="quote"
                    width={48}
                    height={48}
                  />
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-lg md:text-xl font-semibold">
                          {testimonial.name}
                        </h2>
                        <p className="text-sm md:text-base text-white/60">
                          {testimonial.userName}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-8 md:mt-12">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <Image
              src={icnBtnL}
              alt="Previous"
              width={48}
              height={48}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <Image
              src={icnBtnR}
              alt="Next"
              width={48}
              height={48}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
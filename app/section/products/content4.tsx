"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const images = [
  "/images/meat1.jpg",
  "/images/meat2.jpg",
  "/images/meat3.jpg",
  "/images/meat4.jpg",
  "/images/meat5.jpg",
];

const imageAnimation: Variants = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, x: -100, scale: 0.95, transition: { duration: 0.6, ease: "easeIn" } },
};

export default function AnimatedGallery() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-16 bg-[#F8F7F4] overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Our Products Gallery
      </h2>

      {/* Carousel container */}
      <motion.div
        ref={carouselRef}
        className="flex gap-6 px-6 py-4 cursor-grab"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        animate={{ x: ["0%", "-50%"] }} // slide from 0% → -50%
        transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }} // continuous
      >
        {/* Duplicate images for seamless loop */}
        {images.concat(images).map((src, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[300px] h-[200px] rounded-xl shadow-lg overflow-hidden"
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, image: "/images/p1.png", text: "Premium Beef Cuts" },
  { id: 2, image: "/images/p2.png", text: "Fresh Chicken Packs" },
  { id: 3, image: "/images/p8.png", text: "Quality Pork Products" },
  { id: 4, image: "/images/p7.png", text: "Affordable Everyday Meat" },
];

export default function ProductsHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">

      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="Ekhaya Meat Products"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white">
        <motion.h1
          key={slides[index].text}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          {slides[index].text}
        </motion.h1>

        <p className="text-lg md:text-xl max-w-lg mb-6">
          Fresh. Affordable. Delivered Daily — Ekhaya Meats brings you the best quality products for your home and business.
        </p>

        <a
          href="/products"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 w-fit rounded-lg font-semibold shadow-lg"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}

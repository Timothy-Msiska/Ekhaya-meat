"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ProductsInfoSection = () => {
  // Variants for text: slide up + slight scale
  const textAnimation: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.6, ease: "easeIn" } },
  };

  // Variants for images: slide up + scale slightly
  const imageAnimation: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 60, scale: 0.9, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <section className="bg-[#F8F7F4] py-20 px-4 md:py-32">
      <div className="relative w-full h-[80vh] overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Left Column: Informational Text */}
        <motion.div
          className="text-center lg:text-left px-4 lg:px-6 lg:max-w-lg h-full flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textAnimation}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="font-serif text-3xl leading-none text-[#D11212]">
              &mdash; &diams; &mdash;
            </span>
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4 text-black">
            Ekhaya Meat Products
          </h2>

          <p className="font-serif italic text-lg mb-6 text-black">
            Explore the variety of meats handled by Ekhaya Meat and understand the care behind every product.
          </p>

          <p className="text-sm leading-relaxed text-black">
            Ekhaya Meat provides detailed information on different meat types, including beef, poultry, pork, and specialty cuts. 
            We focus on transparency, sharing insights about sourcing, handling, and quality standards. 
            Our aim is to educate the public and highlight sustainable and ethical practices in the meat industry.
          </p>
        </motion.div>

        {/* Right Column: Images */}
        <motion.div
          className="relative w-full h-full lg:w-1/2 px-4 lg:px-6 flex items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={imageAnimation}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Decorative Pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='D11212' fill-opacity='1'%3E%3Cpath d='M10 0h20L30 10L20 10L20 0L10 0ZM0 10h10v10h10L10 20L10 30L0 20L0 10ZM10 20h10v10h10v10L20 40L20 30L10 30L10 20Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
              transform: 'scale(1.5)',
            }}
          ></div>

          {/* Main Product Image */}
          <div className="relative w-4/5 h-4/5 mx-auto z-10 shadow-xl rounded-lg overflow-hidden">
            <Image
              src="/images/meat1.jpg"
              alt="Fresh cut of meat"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsInfoSection;

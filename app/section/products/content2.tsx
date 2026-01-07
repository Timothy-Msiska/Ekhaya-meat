"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FarmSplitSection() {

  const sectionRef = useRef(null);

  // Track scroll visibility of section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 0"], 
    // 0 1 = fade in once bottom enters view
    // 1 0 = fade out when top leaves view
  });

  // Fade + slide for left image
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -100]);

  // Fade + slide for right text
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const textX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 100]);

  return (
    <section ref={sectionRef} className="w-full bg-[#F8F7F4] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          style={{
            opacity: imageOpacity,
            x: imageX
          }}
          className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/farm.png"
            alt="Ekhaya Meat Farm"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          style={{
            opacity: textOpacity,
            x: textX
          }}
          className="flex flex-col space-y-5"
        >
          <span className="text-[#D11212] font-semibold tracking-wide">
            OUR FARM • OUR STORY
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Where Ekhaya Meat Comes From
          </h2>

          <p className="text-black text-base leading-relaxed">
            At Ekhaya Meat, our livestock is raised on open, healthy farmlands
            with plenty of space to graze naturally. Our farmers practice
            responsible and ethical care, ensuring every animal lives in a clean,
            stress-free environment.
          </p>

          <p className="text-black text-base leading-relaxed">
            We work directly with trusted local farms that prioritize high-quality
            feed, humane handling, and sustainable farming. This guarantees that
            every cut of meat we handle is fresh, safe, and full of natural flavor.
          </p>

          <ul className="text-black space-y-2">
            <li>• Naturally grazed cattle</li>
            <li>• Ethically raised livestock</li>
            <li>• Clean and monitored farm environments</li>
            <li>• Sustainable farming practices</li>
            <li>• Quality-assured meat selection</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

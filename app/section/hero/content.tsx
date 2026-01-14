"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------ Animations ------------------ */

// Parent animation for stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Card animation
const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

// Text animation (left)
const textVariant = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

// Image animation (right)
const imageVariant = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export default function MethodsSection() {
  const buttonClass =
    "px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#b9952f] transition-colors duration-300";

  // Each card has its OWN link
  const cards = [
    {
      title: "Cattle",
      desc: "Experience the bold, hearty flavor of our premium beef.",
      img: "/images/o1.png",
      link: "/cattle",
    },
    {
      title: "Sheep",
      desc: "Indulge in the rich, succulent taste of our sheep meat.",
      img: "/images/o2.png",
      link: "/sheep",
    },
    {
      title: "Goat",
      desc: "Discover the robust, authentic taste of our goat meat.",
      img: "/images/o-goat.png",
      link: "/goat",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* ---------- Cards Section ---------- */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            className="border border-[#D4AF37] p-6 rounded-md bg-white flex flex-col"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={card.img}
                alt={card.title}
                width={120}
                height={80}
                className="h-auto w-auto"
              />
            </div>

            <h3 className="text-center text-2xl font-bold text-[#0c0c0c] mb-2">
              {card.title}
            </h3>

            <p className="text-center text-gray-700 mb-4">
              {card.desc}
            </p>

            {/* Each card navigates to its own page */}
            <div className="flex justify-center mt-auto">
              <Link href={card.link} className={buttonClass}>
                Explore More
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- Bottom Section ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 px-4 gap-10 items-center">
        {/* Text */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-sm text-[#D4AF37] tracking-widest font-semibold">
            OUR METHODS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0c0c0c] mt-4 leading-tight">
            Pasture Raised <br /> Promise
          </h2>

          <p className="italic text-gray-800 mt-3">
            Animal welfare is of the utmost importance to us.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            That’s why we only work with farms and processors that share our
            passion for good animal husbandry. We promise every animal has been
            raised on lush pastures — naturally, without hormones or antibiotics.
          </p>

          <div className="mt-6">
            <Link href="/methods" className={buttonClass}>
              Explore Our Process
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full h-[400px]"
        >
          <Image
            src="/images/our-m.jpg"
            alt="Pasture raised farming"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

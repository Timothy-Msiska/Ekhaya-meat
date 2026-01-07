"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function FarmTwoSection() {
  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, x: -60, transition: { duration: 0.6, ease: "easeIn" } },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, x: 60, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* TEXT CONTENT ON THE LEFT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={fadeInLeft}
          viewport={{ once: false, amount: 0.2 }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-bold text-red-600">Farm No. 2</h2>

          <p className="text-black mt-3 leading-relaxed">
            Farm No. 2 represents one of the core supply locations for Ekhaya Meat.
            This farm focuses on naturally raised cattle, open-field grazing, and
            healthy animal management.
            <br /><br />
            The wide grass fields and clean environment help maintain strong,
            healthy livestock—ensuring that all meat is fresh, safe, and naturally raised.
          </p>
        </motion.div>

        {/* IMAGE ON THE RIGHT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={fadeInRight}
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full lg:w-1/2 h-[420px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/farm2.png"
            alt="Ekhaya Meat Farm #2"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

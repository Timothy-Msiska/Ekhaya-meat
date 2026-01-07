"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      <Image
        src="/images/farm2.png"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-red-600">Ekhaya Meats</span>
          </h1>
          <p className="text-lg md:text-xl">
            Ekhaya Meats is committed to providing high-quality, safe, and
            responsibly processed meat products. Our dedication to excellence
            ensures every product meets the highest standards for our customers.
          </p>
        </div>
      </div>
    </section>
  );
}

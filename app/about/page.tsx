"use client";

import React from "react";
import EkhayaQualitySection from "@/app/section/about/content";
import EkhayaAd from "../section/about/hero";
import CardsSection from "../section/about/cards";

export default function About() {
  return (
    <main className="w-full">
      <EkhayaAd />
      <EkhayaQualitySection />
      <CardsSection />
    </main>
  );
}

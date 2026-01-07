"use client";

import React from "react";
import Image from "next/image";

const EkhayaQualitySection = () => {
  interface InfoCardProps {
    title: string;
    subtitle: string;
    icon: string;
    position: "top" | "left" | "right" | "bottom";
  }

  const InfoCard = ({ title, subtitle, icon, position }: InfoCardProps) => {
    const positionClasses = {
      top: "col-span-2 lg:col-span-1 mx-auto",
      left: "col-span-1 mt-[-3rem] md:mt-[-5rem] mr-auto",
      right: "col-span-1 ml-auto",
      bottom: "col-span-1 mt-[-3rem] md:mt-[-5rem] ml-0 mr-auto",
    };

    return (
      <div
        className={`p-6 bg-white rounded-xl shadow-lg border-2 border-black transition duration-300 hover:shadow-xl w-full max-w-xs ${positionClasses[position]}`}
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-2xl text-[#002D62]">{icon}</div>
          <h3 className="text-base font-serif font-bold text-gray-700">
            {title}
          </h3>
        </div>
        <p className="text-sm font-sans text-gray-600">{subtitle}</p>
      </div>
    );
  };

  const infoData: InfoCardProps[] = [
    {
      title: "Our Mission",
      subtitle:
        "Ekhaya Meat aims to provide quality meat information and raise awareness about responsible sourcing and animal welfare.",
      icon: "🎯",
      position: "top",
    },
    {
      title: "Sustainable Practices",
      subtitle:
        "We share insights on sustainable farming and ethical practices in the meat industry.",
      icon: "🌱",
      position: "left",
    },
    {
      title: "Community Engagement",
      subtitle:
        "Ekhaya Meat works with local farmers and communities to educate and promote transparency.",
      icon: "🤝",
      position: "right",
    },
    {
      title: "Knowledge Sharing",
      subtitle:
        "We provide educational content about meat production, handling, and safety standards.",
      icon: "📚",
      position: "bottom",
    },
  ];

  return (
    <>
      {/* --- About Section --- */}
      <section className="min-h-screen pt-28 pb-20 px-4 md:px-16 lg:px-24 font-serif bg-[#F8F7F4]">
        {/* --- Main Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Info + Images */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-[#002D62]">
              About Ekhaya Meat
            </h2>

            <p className="text-gray-700 max-w-lg mb-12 leading-relaxed">
              Ekhaya Meat is dedicated to providing accurate information about
              meat sourcing, production, and handling. Our goal is to educate
              the public and raise awareness about responsible practices, animal
              welfare, and community-based farming initiatives.
            </p>

            {/* Image Block */}
            <div className="relative w-full max-w-md h-96">
              <div className="relative w-[85%] h-[85%] border-4 border-white shadow-2xl overflow-hidden">
                <Image
                  src="/images/p4.png"
                  alt="Cows in a pasture under a blue sky"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[60%] h-[70%] border-4 border-white shadow-2xl overflow-hidden">
                <Image
                  src="/images/p1.png"
                  alt="Farmer in the field"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Gold Patterns */}
              <div className="absolute top-[-10px] left-[-10px] w-24 h-24">
                <div className="absolute w-full h-full opacity-30 border-t-4 border-l-4 border-black"></div>
              </div>

              <div className="absolute bottom-[-10px] left-[-10px] w-24 h-24">
                <div className="absolute w-full h-full opacity-30 border-b-4 border-l-4 border-black"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Info Cards */}
          <div className="grid grid-cols-2 gap-4 auto-rows-min max-w-xl mx-auto lg:mx-0 mt-8 lg:mt-0">
            {infoData.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                position={item.position}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EkhayaQualitySection;

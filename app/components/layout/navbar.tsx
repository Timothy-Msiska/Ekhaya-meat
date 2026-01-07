"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/product/" },
  { name: "ABOUT US", href: "/about/" },
  { name: "CONTACT", href: "/contact/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="absolute top-0 w-full z-10 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/yeni-logo.png"
            alt="Ekhaya Meat Logo"
            width={100}
            height={105}
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold tracking-wide pb-2 transition
                ${
                  isActive(link.href)
                    ? "text-white after:w-full"
                    : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                }
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[#D4AF37]
                after:transition-all after:duration-300
              `}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 bg-[#D4AF37] text-white rounded-md p-2 gap-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <nav className="lg:hidden mt-4 max-w-xs mx-auto text-center bg-[#D4AF37] rounded-md p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-white font-semibold pb-1 transition
                ${
                  isActive(link.href)
                    ? "border-b-2 border-white"
                    : "border-b-2 border-transparent hover:border-white/70"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )} 
    </header>
  );
}

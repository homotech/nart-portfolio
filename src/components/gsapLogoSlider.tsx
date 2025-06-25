"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import logos from "@/src/data/logos";
const GsapLogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const handlePause = () => {
    tl.current?.pause();
  };

  const handleResume = () => {
    tl.current?.resume();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1 });

      tl.current.to(".logo-track", {
        xPercent: -50,
        duration: 20,
        ease: "none", // smooth linear scroll
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sliderRef}
      className="overflow-hidden whitespace-nowrap py-6 relative w-full invert"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div className="absolute bg-gradient-to-r inset-y-0 left-0 from-white to-transparent z-10 w-24" />
      <div className="absolute bg-gradient-to-l inset-y-0 right-0 from-white to-transparent z-10 w-24" />
      <div className="flex logo-track w-max gap-12">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.name}
            width={100}
            height={50}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};
export default GsapLogoSlider;

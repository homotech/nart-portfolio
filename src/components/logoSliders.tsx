"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "swiper/css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import logos from "@/src/data/logos";
const LogoSliders = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderVariants: Variants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
    paused: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 0,
        },
      },
    },
  };
  return (
    <div>
      <h1 className="text-2xl font-br-firma-medium tracking-tighter">
        Here are some{" "}
        <Link href="/logofolio" className="underline">
          logos
        </Link>{" "}
        I have designed.
      </h1>

      {/* <Swiper
        spaceBetween={1}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 800, disableOnInteraction: false }}
        modules={[Autoplay]}
        speed={2000}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-24 justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                className="object-contain"
                width={100}
                height={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div
        className="relative w-full overflow-hidden py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
        <motion.div
          ref={sliderRef}
          className="flex items-center gap-8"
          variants={sliderVariants}
          animate={isPaused ? "paused" : "animate"}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-4 w-[150px]">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default LogoSliders;

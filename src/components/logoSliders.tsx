"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BOAA from "@/public/Logos/boaa.svg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
const logos = [
  {
    name: "Logo 1",
    src: BOAA,
  },
  {
    name: "Logo 1",
    src: BOAA,
  },
  {
    name: "Logo 1",
    src: BOAA,
  },
  {
    name: "Logo 1",
    src: BOAA,
  },
];
const LogoSliders = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={2.5}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          {/* <img
            src={logo.src}
            alt={logo.name}
            className="w-28 h-28 object-contain rounded-md border mx-auto"
          /> */}
          <Image
            src={logo.src}
            alt={logo.name}
            className="w-28 h-28 object-contain rounded-md border mx-auto"
            width={112}
            height={112}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default LogoSliders;

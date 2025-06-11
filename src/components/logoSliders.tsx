"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BOAA from "@/public/Logos/boaa.svg";
import FiBeauty from "@/public/Logos/fi-beauty.svg";
import Omoeta from "@/public/Logos/omoeta.svg";
import Payaway from "@/public/Logos/Payaway.svg";
import Tiqeasy from "@/public/Logos/tiqeasy.svg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
const logos = [
  {
    name: "Logo 1",
    src: BOAA,
  },
  {
    name: "Logo 2",
    src: FiBeauty,
  },
  {
    name: "Logo 3",
    src: Omoeta,
  },
  {
    name: "Logo 4",
    src: Payaway,
  },
  {
    name: "Logo 5",
    src: Tiqeasy,
  },
];
const LogoSliders = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={2}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      modules={[Autoplay]}
      speed={800}
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
    </Swiper>
  );
};
export default LogoSliders;

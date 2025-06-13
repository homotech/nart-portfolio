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
import Link from "next/link";
import logos from "@/src/data/logos";
const LogoSliders = () => {
  return (
    <div>
      <h1 className="text-2xl font-br-firma-medium tracking-tighter">
        Here are some{" "}
        <Link href="/logofolio" className="underline">
          logos
        </Link>{" "}
        I have designed.
      </h1>

      <Swiper
        spaceBetween={1}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 300, disableOnInteraction: false }}
        modules={[Autoplay]}
        speed={1000}
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
    </div>
  );
};
export default LogoSliders;

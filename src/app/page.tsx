"use client";
import Image from "next/legacy/image";
import Reviews from "../components/reviews";
import BackToTop from "../components/backToTop";
import SayHello from "../components/sayHello";
import MasonryGrid from "../components/masonarygrid";
import TailwindMasonry from "../components/tailwindMasonry";

export default function Home() {
  return (
    <div className="mt-14 px-4 py-2 md:py-4 md:px-16">
      <TailwindMasonry />
      {/* <MasonryGrid /> */}
      {/* <div className="mx-6">
        <h3 className="chinese-white text-2xl font-br-firma-light text-center">
          Nice to meet you!
        </h3>
        <h1 className="crayola text-5xl font-br-firma-light text-center">
          I'm Daniel.
        </h1>
        <p className="text-white font-br-firma-light text-center">
          Transforming ideas into reality through code,
          <strong className="font-br-firma-regular">
            visual identity, and creative illustration
          </strong>
          , leaving lasting impressions
        </p>
      </div> */}
      {/* Hello World */}
      {/* <Reviews /> */}
      {/* <SayHello /> */}
      <BackToTop />
    </div>
  );
}

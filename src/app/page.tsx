"use client";
import Image from "next/legacy/image";
import Reviews from "../components/reviews";

export default function Home() {
  return (
    <div className="">
      <div className="mx-6">
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
        <Image
          src="/profile-picture.png"
          alt="An Image of Daniel Adonis"
          className="w-full"
          width={1080}
          height={1080}
          layout="responsive"
        />
      </div>
      Hello World
      <Reviews />
    </div>
  );
}

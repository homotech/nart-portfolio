"use client";
import { useState } from "react";
import MyImage from "@/public/profile-picture.webp";
import Image from "next/image";
import MyFiles from "./myFiles";

const AboutMe = () => {
  const [ShowImage, setShowImage] = useState(false);
  const mouseHover = () => {
    setShowImage(true);
    console.log("Mouse Enter");
  };
  const mouseNotHovering = () => {
    setShowImage(false);
    console.log("Mouse Enter");
  };
  return (
    <div className="mb-8 px-4">
      <h1 className="text-3xl font-br-firma-regular tracking-tighter mb-5">
        Hi I&apos;m{" "}
        <span
          onMouseEnter={mouseHover}
          onMouseLeave={mouseNotHovering}
          className="hover:bg-black hover:text-white underline cursor-pointer"
        >
          Daniel Adonis{" "}
          {ShowImage && (
            <Image
              width={500}
              height={500}
              alt="Image of Daniel Adonis"
              src={MyImage}
              className="absolute sm:top-24 md:top-36 md:left-[480px] mt-2 w-64 h-64 rounded-lg  transition-all duration-300"
            />
          )}
        </span>
        , A Graphic Designer and a Frontend Web Developer.
      </h1>
      <p className="text-md font-br-firma-regular tracking-tight mb-5 text-gray-600">
        {/* I am a Graphic Designer and a Web Developer with a passion for creating
        visually stunning and user-friendly digital experiences. My expertise
        lies in crafting unique brand identities, designing engaging websites,
        and developing interactive web applications. I thrive on transforming
        ideas into reality through code, visual identity, and creative
        illustration, leaving lasting impressions. */}
        But most importantly a visual identity designer who has crafted
        identities for 4 years having worked in a wide range of industries
        garnering experiences in these industries, And leaving a mark, making
        the world better, one identity at a time. As one of my favorite quotes
        says, &quot;We learn everyday&quot;, I invest in my skill at every
        chance I get, which makes me an asset to friends, family, and my
        clients.
      </p>
      <MyFiles />
    </div>
  );
};
export default AboutMe;

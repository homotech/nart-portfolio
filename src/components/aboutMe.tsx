"use client";
import { useState } from "react";
import MyImage from "@/public/profile-picture.webp";
import Image from "next/image";

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
    <div className="relative">
      <h1 className="text-3xl font-br-firma-light">
        Hi I'm{" "}
        <span
          onMouseEnter={mouseHover}
          onMouseLeave={mouseNotHovering}
          className="hover:bg-black hover:text-white underline"
        >
          Daniel Adonis{" "}
          {ShowImage && (
            <Image
              width={500}
              height={500}
              alt="Image of Daniel Adonis"
              src={MyImage}
              className="absolute top-24 left-24 mt-2 w-64 h-64 rounded-lg transition-opacity duration-300"
            />
          )}
        </span>
        , A Graphic Designer and a Web Developer.
      </h1>
      <p className="text-md font-br-firma-regular tracking-tight mt-2 text-gray-600">
        {/* I am a Graphic Designer and a Web Developer with a passion for creating
        visually stunning and user-friendly digital experiences. My expertise
        lies in crafting unique brand identities, designing engaging websites,
        and developing interactive web applications. I thrive on transforming
        ideas into reality through code, visual identity, and creative
        illustration, leaving lasting impressions. */}
        But most importantly a visual identity designer who has crafted
        identities for 4 years having worked in a wide range of industries
        garnering experiences in aall facet of desgn, And leaving a mark, making
        the world better, one identity at a time. As one of my favorite quotes
        says, "We learn everyday", I invest in my skill at every chance I get,
        which makes me an asset to friends, family, and my clients.
      </p>
    </div>
  );
};
export default AboutMe;

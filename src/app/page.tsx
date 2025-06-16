// "use client";
import WebDesign from "../components/webDesign";
import AboutMe from "../components/aboutMe";
import GraphicDesign from "../components/graphicDesign";
import GsapLogoSlider from "../components/gsapLogoSlider";
import Link from "next/link";
import MyFiles from "../components/myFiles";

export default function Home() {
  return (
    <div className="overflow-hidden mt-20 px-4 py-2 md:py-4 md:px-16">
      <AboutMe />
      <GraphicDesign />
      <WebDesign />
      {/* <LogoSliders /> */}
      <h1 className="text-2xl font-br-firma-medium tracking-tighter">
        Here are some{" "}
        <Link href="/logofolio" className="underline">
          logos
        </Link>{" "}
        I have designed.
      </h1>
      <GsapLogoSlider />
      <MyFiles />
    </div>
  );
}

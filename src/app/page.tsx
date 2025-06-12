// "use client";
import WebDesign from "../components/webDesign";
import LogoSliders from "../components/logoSliders";
import AboutMe from "../components/aboutMe";
import GraphicDesign from "../components/graphicDesign";

export default function Home() {
  return (
    <div className="overflow-hidden mt-14 px-4 py-2 md:py-4 md:px-16">
      <AboutMe />
      <GraphicDesign />
      <WebDesign />
      <LogoSliders />
    </div>
  );
}

// "use client";
import WebDesign from "../components/webDesign";
import AboutMe from "../components/aboutMe";
import GraphicDesign from "../components/graphicDesign";
import LogoDesigned from "../components/logosDesigned";

export default function Home() {
  return (
    <div className="overflow-hidden mt-20 py-2 md:py-4 md:px-16">
      <AboutMe />
      <GraphicDesign />
      <WebDesign />
      <LogoDesigned />
      {/* <MyFiles /> */}
    </div>
  );
}

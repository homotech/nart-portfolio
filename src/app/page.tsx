// "use client";
import Link from "next/link";
// import BackToTop from "../components/backToTop";
// import TailwindMasonry from "../components/tailwindMasonry";
import WebDesign from "../components/webDesign";
import { projects } from "@/src/data/project";
import LogoSliders from "../components/logoSliders";
import AboutMe from "../components/aboutMe";

export default function Home() {
  return (
    <div className="overflow-hidden mt-14 px-4 py-2 md:py-4 md:px-16">
      <AboutMe />
      <div className="mb-4">
        <h1 className="text-2xl font-br-firma-medium tracking-tighter mb-2 underline">
          Design Projects({projects.length})
        </h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link
                className="text-xl tracking-tighter font-br-firma-medium hover:text-gray-500"
                href={`/projects/${project.id}`}
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <WebDesign />

      <LogoSliders />
      {/* <TailwindMasonry /> */}
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
      {/* <BackToTop /> */}
    </div>
  );
}

// "use client";
import Link from "next/link";
import BackToTop from "../components/backToTop";
import TailwindMasonry from "../components/tailwindMasonry";
import WebDesign from "../components/webDesign";
import Projects from "@/src/data/project.json";

export default function Home() {
  return (
    <div className="overflow-hidden mt-14 px-4 py-2 md:py-4 md:px-16">
      <div>
        <h1 className="text-2xl font-br-firma-medium tracking-tighter ">
          Design Projects
        </h1>
        <ul>
          {Projects.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <WebDesign />
      Just trying to get this thing to work
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

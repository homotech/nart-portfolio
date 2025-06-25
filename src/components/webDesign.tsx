// "use client";
import {
  faArrowLeft,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebProjects from "@/src/data/webprojects";
import Link from "next/link";

const WebDesign = () => {
  const buttonClass =
    "text-md px-4 py-2 w-40 h-12 bg-black text-white hover:mt-[-8px] hover:ml-[8px] border-2 border-black transition-all duration-150 font-br-firma-regular track-tighter flex items-center gap-4";
  const borderedClass =
    "w-40 h-12 border-2 bg-white border-black left-0 absolute z-[-1]";
  return (
    <div className="mb-8 px-4">
      <h1 className="text-4xl font-br-firma-regular tracking-tighter mb-4">
        Coding Projects
      </h1>
      <div className="border-2 border-black p-4 rounded-lg h-[250px]">
        <ul>
          {WebProjects.map((project) => (
            <li className="flex flex-col gap-2 relative" key={project.id}>
              <div className="flex items-center">
                <p className="text-2xl tracking-tighter font-br-firma-semibold flex-grow">
                  {project.projectName}
                </p>{" "}
                <Link
                  href={project.githubRepo}
                  className="hover:opacity-50 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} width={36} height={36} />
                </Link>
              </div>
              <p className=" text-lg font-br-firma-regular">
                {project.projectDescription}
              </p>
              {/* <FontAwesomeIcon width={24} height={24} icon={faChevronRight} /> */}
              <div className="flex gap-4">
                <Link href={project.liveDemo} className={buttonClass}>
                  Live Demo{" "}
                  <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
                </Link>
                <div className={borderedClass}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WebDesign;

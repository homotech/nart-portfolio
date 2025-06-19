// "use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebProjects from "@/src/data/webprojects";
import Link from "next/link";

const WebDesign = () => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-br-firma-regular tracking-tighter mb-2 underline">
        Coding Projects
      </h1>
      <div className="">
        <ul>
          {WebProjects.map((project) => (
            <li className="flex items-center" key={project.id}>
              <p className="text-xl tracking-tighter font-br-firma-medium flex-grow">
                {project.projectName}
              </p>
              {/* <FontAwesomeIcon width={24} height={24} icon={faChevronRight} /> */}
              <div className="flex gap-4">
                <Link
                  href={project.liveDemo}
                  className="text-sm px-4 py-2 hover:bg-black hover:text-white font-br-firma-regular track-tighter bg-gray-100"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.githubRepo}
                  className="text-sm px-4 py-2 hover:bg-black hover:text-white font-br-firma-regular track-tighter bg-gray-100"
                >
                  Github Repo
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default WebDesign;

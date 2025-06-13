// "use client";
import { projects } from "../data/project";
import Link from "next/link";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GraphicDesign = () => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-br-firma-regular tracking-tighter mb-2 underline">
        Design Projects({projects.length})
      </h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="flex items-center">
            <Link
              className="text-xl tracking-tighter font-br-firma-medium hover:text-gray-500 flex-grow"
              href={`/projects/${project.id}`}
            >
              {project.name}
            </Link>{" "}
            <FontAwesomeIcon width={24} height={24} icon={faChevronRight} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GraphicDesign;

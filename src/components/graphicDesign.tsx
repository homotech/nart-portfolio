// "use client";
import { projects } from "../data/project";
import Link from "next/link";
const GraphicDesign = () => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-br-firma-regular tracking-tighter mb-2 underline">
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
  );
};
export default GraphicDesign;

import { projects } from "@/src/data/project";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}
export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = projects.find((project) => project.id === params.projectId);
  if (!project) {
    return (
      <div className="mt-16 w-full h-screen flex item-center align-center flex-col">
        <FontAwesomeIcon icon={faCircleExclamation} />
        <h1>Project not found</h1>
      </div>
    );
  }
  return (
    <div className="mt-20 px-4">
      <h1 className="text-4xl font-br-firma-medium tracking-tighter mb-2">
        {project.name}
      </h1>
      <p className="text-md font-br-firma-regular text-gray-600 tracking-tight mb-2">
        {project.description}
      </p>
      <div className="flex flex-row gap-4 items-center">
        <p className="text-md font-br-firma-regular text-gray-600 tracking-tight">
          {project.year}
        </p>
        <p className="border border-2 border-gray-600 px-2 py-1 rounded-full text-md font-br-firma-regular text-gray-600 tracking-tight">
          {project.type}
        </p>
      </div>
      <div className="mt-4">
        {project.images.map((images, index) => (
          // <div key={index} className="relative w-full aspect-square mb-4">
          <Image
            key={index}
            src={images.src}
            // fill
            alt={`${project.name} Image ${index + 1}`}
            className="w-full rounded-lg mb-4"
            width={images.width}
            height={images.height}
          />
        ))}
      </div>
    </div>
  );
}

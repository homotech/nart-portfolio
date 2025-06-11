import { projects } from "@/src/data/project";
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
      <div className="mt-16">
        <h1>Project not found</h1>
      </div>
    );
  }
  return (
    <div className="mt-16 px-4">
      <h1 className="text-4xl font-br-firma-medium tracking-tighter">
        {project.name}
      </h1>
      <p>{project.description}</p>
      <div className="flex flex-row gap-4">
        <p>{project.year}</p>
        <p>{project.type}</p>
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

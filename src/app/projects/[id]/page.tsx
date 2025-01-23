"use client";
import { db } from "@/firebaseConfig";
import { CircularProgress } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Image from "next/image";
// import { useRouter, useParams } from "next/ro";
import { useEffect, useState } from "react";

interface Params {
  id: string;
}

const ProjectPage = ({ params }: { params: Params }) => {
  // const router = useRouter();
  const id = params.id;
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (id) {
      console.log("Green Light:", id);
      const fetchProjects = async () => {
        try {
          const docRef = doc(db, "test", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            console.log(docSnap.data());
            setProject(docSnap.data());
          } else {
            console.log("No such Document");
          }
        } catch (error) {
          console.error("Error fetching project:", error);
          setErrorMessage("Failed to load project");
        } finally {
          setIsLoading(false);
        }
      };
      fetchProjects();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="mt-16">
        <CircularProgress />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="mt-16">
        <h1>{errorMessage}</h1>
      </div>
    );
  }

  return project ? (
    <div className="mt-16">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.images.map((image) => (
        <div className="relative w-full h-[600px]">
          <Image
            src={image.url}
            layout="fill"
            objectFit="cover"
            alt="Image thumbnail"
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="mt-16">
      <h1>Project not found</h1>
    </div>
  );
};
export default ProjectPage;

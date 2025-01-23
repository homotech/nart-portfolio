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
  const { id } = params;
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (id) {
      console.log("Green Light");
      const fetchProjects = async () => {
        try {
          const docRef = doc(db, "test", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProject(docSnap.data());
          } else {
            console.log("No such Document");
          }
        } catch (error) {
          console.error("Error fetching project:", error);
        } finally {
          setErrorMessage("Failed to load project");
          setIsLoading(false);
        }
      };
      fetchProjects();
    }
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (errorMessage) {
    return (
      <div>
        <h1>{errorMessage}</h1>
      </div>
    );
  }

  return project ? (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.images.map((image) => (
        <div className="relative">
          <Image src={image} layout={fill} objectFit={cover} />
        </div>
      ))}
    </div>
  ) : (
    <h1>Project not found</h1>
  );
};
export default ProjectPage;

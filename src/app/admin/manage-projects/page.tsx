"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  doc,
  getDoc,
  query,
  collection,
  where,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import Loading from "react-loading";
import Link from "next/link";
import { AdminContext } from "../layout";
import { useRouter } from "next/navigation";
import DeleteProject from "@/src/components/deleteProject";
import { CircularProgress } from "@mui/material";

const ManageProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setPublishedProjectsID } = useContext(AdminContext);
  const [activeDialogId, setActiveDialogId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    // const draftsCollection = collection(db, "projects");
    const q = query(
      collection(db, "projects"),
      where("status", "==", "complete")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const draftsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          // ...doc.data(),
          // Add other fields as necessary
        }));
        setProjects(draftsData);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error Fetching drafts in real-time:", error);
        setIsLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const editProject = (id: string) => {
    setPublishedProjectsID(id);
    router.push("/admin/upload-projects");
  };

  const handleDelete = async (id: any) => {
    try {
      const docRef = doc(db, "projects", id);
      await deleteDoc(docRef);
      console.log("Project deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  projects;
  return isLoading ? (
    // <Loading type="spin" color="#000000" height="64" width="64"></Loading>
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  ) : (
    <div>
      <h1>Manage Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div className="flex justify-between gap-4 mb-4" key={index}>
            <Link
              href="#"
              key={project.id}
              className=" w-full block border-2 border-black px-4 py-4"
            >
              {project.title}
            </Link>
            <button className="" onClick={() => editProject(project.id)}>
              Edit
            </button>
            <DeleteProject
              id={project.id}
              SetActiveDialogId={setActiveDialogId}
              isActive={activeDialogId == project.id}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProjects;

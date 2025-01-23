"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  QuerySnapshot,
  doc,
  where,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminContext } from "../layout";
import Loading from "react-loading";
import DeleteProject from "@/src/components/deleteProject";
import { CircularProgress } from "@mui/material";

const DisplayDrafts = () => {
  const { setDraftsID } = useContext(AdminContext);
  interface Draft {
    id: string;
    title: string;
  }

  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeDialogId, setActiveDialogId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    console.log(id);
    setDraftsID(id);
  };

  useEffect(() => {
    // const draftsCollection = collection(db, "projects");
    const q = query(collection(db, "projects"), where("status", "==", "draft"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const draftsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          // ...doc.data(),
          // Add other fields as necessary
        }));
        setDrafts(draftsData);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error Fetching drafts in real-time:", error);
        setIsLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // confirm Delete
  // const confirmDelete =

  // Function to handle the delete
  const handleDelete = async (id: string) => {
    try {
      console.log(id);
      const projectRef = doc(db, "projects", id);
      await deleteDoc(projectRef);
      console.log("Draft deleted successfully!");
    } catch (error) {
      console.error("Error deleting draft:", error);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl">Drafts</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      ) : drafts.length === 0 ? (
        <p>No drafts available</p>
      ) : (
        <ul className="mt-4">
          {drafts.map((draft, index) => (
            <li key={index} className="flex justify-between gap-4 mb-4">
              <Link
                href="/admin/upload-projects"
                onClick={() => handleClick(draft.id)}
                className="w-full block border-2 border-black px-4 py-4"
              >
                {draft.title}
              </Link>
              <DeleteProject
                id={draft.id}
                isActive={activeDialogId === draft.id}
                SetActiveDialogId={setActiveDialogId}
                handleDelete={handleDelete}
              />
              {/* <div>
                {!isDeleteMode ? (
                  <div>
                    <button
                      className="bg-red-500 text-white px-4 py-4"
                      onClick={() => {
                        setIsDeleteMode(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    <button
                      className="bg-red-500 text-white px-4 py-4"
                      onClick={() => handleDelete(draft.id)}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-4"
                      onClick={() => {
                        setIsDeleteMode(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                )}
              </div> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayDrafts;

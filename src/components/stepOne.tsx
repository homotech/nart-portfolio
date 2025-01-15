"use client";
import { ChangeEvent, useContext, useState, useEffect } from "react";
import {
  doc,
  DocumentSnapshot,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { AdminContext } from "../app/admin/layout";
// import { unsubscribe } from "diagnostics_channel";
const inputStyling =
  "block w-full p-4 border border-black rounded-lg font-br-firma-regular focus:outline-none mt-2";

const StepOne = ({
  setUploadStep,
}: {
  setUploadStep: (step: number) => void;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [currentID, setCurrentID] = useState("");
  const { draftsID, publishedProjectsID } = useContext(AdminContext);

  useEffect(() => {
    if (draftsID) {
      setCurrentID(draftsID);
    } else if (publishedProjectsID) {
      setCurrentID(publishedProjectsID);
    }

    if (currentID) {
      setIsLoading(true);
      console.log("This projects exists and the ID is:", currentID);
      const draftsCollection = doc(db, "projects", currentID);
      const unsubscribe = onSnapshot(
        draftsCollection,
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            setFormData({
              title: docSnapshot.data().title || "",
              description: docSnapshot.data().description || "",
              category: docSnapshot.data().category || "",
            });
            setIsLoading(false);
          } else {
            setFormData({
              title: "",
              description: "",
              category: "",
            });
            setIsLoading(false);
            console.error("Drafts not found:", currentID);
          }
        },
        (error) => {
          console.error("Error fetching this draft:", error);
          setFeedback(error.message);
          setIsLoading(false);
        }
      );
      return () => unsubscribe();
    }
  }, [draftsID, publishedProjectsID, currentID]);

  const handleSubmit = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    setIsDone(true);
    try {
      if (!currentID) {
        const newProjectID = `projects-${Date.now()}`;
        // setCurrentID(newProjectID);
        console.log("New draft ID created:", newProjectID);
        await setDoc(doc(db, "projects", newProjectID), {
          ...formData,
          status: "draft",
          createdAt: new Date().toISOString(),
        });
        setCurrentID(newProjectID);
      } else {
        console.log("Using existing ID", currentID);
        await updateDoc(doc(db, "projects", currentID), {
          ...formData,
          createdAt: new Date().toISOString(),
        });
      }
      console.log("Step 1 Data saved successfully!");
      setUploadStep(2);
    } catch (error) {
      console.error("Error saving Step 1 data:", error);
    } finally {
      setIsDone(false);
    }
  };
  if (isLoading) {
    return <div>Loading the drafts</div>;
  }

  return (
    <div>
      {feedback && <p>{feedback}</p>}
      <div className="my-4">
        <label htmlFor="title" className="font-br-firma-medium text-xl">
          What is the projects name?
        </label>
        <input
          className={inputStyling}
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleSubmit}
          placeholder="Enter Project Name"
        />
      </div>
      <div className="my-4">
        <label htmlFor="description" className="font-br-firma-medium text-xl">
          What do you have to say about this project?
        </label>
        <textarea
          name="description"
          id="description"
          className={inputStyling}
          onChange={handleSubmit}
          value={formData.description}
          placeholder="Enter project description"
        ></textarea>
      </div>
      <div className="my-4">
        <label htmlFor="category" className="font-br-firma-medium text-xl">
          What category does this project fit in?
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          className={inputStyling}
          onChange={handleSubmit}
        >
          <option value="Select a category">Select a category</option>
          <option value="Brand Identity">Brand Identity</option>
          <option value="Poster Design">Poster Design</option>
          <option value="Illustration">Illustration</option>
        </select>
      </div>
      <div>
        <button
          type="button"
          onClick={handleNext}
          className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
        >
          {isDone ? "Saving" : "Next"}
        </button>
      </div>
    </div>
  );
};
export default StepOne;

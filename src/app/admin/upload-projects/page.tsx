"use client";

import StepOne from "@/src/components/stepOne";
import StepTwo from "@/src/components/stepTwo";
import StepThree from "@/src/components/stepThree";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";
import DropzoneUploader from "@/src/components/dropzoneUploader";
import Draggable from "@/src/components/draggable";
import DropZone from "@/src/components/dropZone";
import { AdminContext } from "../layout";
import { useRouter } from "next/navigation";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { title } from "process";
import { CircularProgress } from "@mui/material";

const inputStyling =
  "block w-full p-4 border border-black rounded-lg font-br-firma-regular focus:outline-none mt-2";

const UploadProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Collaborators States Management
  const [collaborators, setCollaborators] = useState("Daniel Adonis");
  const [collaboratorsEdit, setCollaboratorsEdit] = useState(false);

  //Projects State Management
  const [projects, setProjects] = useState("Project Title");
  const [projectsEdit, setProjectsEdit] = useState(false);

  //Projects State Management
  const [description, setDescription] = useState("Project Description");
  const [descriptionEdit, setDescriptionEdit] = useState(false);
  // const [formID, setFormID] = useState(null);

  const [projectsStatus, setProjectsStatus] = useState("draft");
  interface Project {
    title: string;
    description: string;
    collaborators: string;
    // Add other properties as needed
  }

  const [project, setProject] = useState<Project | null>(null);

  const router = useRouter();
  const { draftsID, publishedProjectsID, setDraftsID, setPublishedProjectsID } =
    useContext(AdminContext);
  const projectID = draftsID || publishedProjectsID;
  const fetchProjects = async () => {
    const projectsRef = doc(db, "projects", projectID);
    const projectSnapshot = await getDoc(projectsRef);
    if (projectSnapshot.exists()) {
      const fetchedProjects = projectSnapshot.data();
      setProject(fetchedProjects);
      console.log(project);
      // setProjects(project.title);
      return { id: projectSnapshot.id, ...projectSnapshot.data() };
    } else {
      console.log("No Such Project");
    }
  };
  useEffect(() => {
    if (draftsID || publishedProjectsID) {
      console.log("Edit Mode");
      fetchProjects();
    }
    if (project) {
      setIsLoading(false);
    }
  }, [fetchProjects, project, draftsID, publishedProjectsID]);

  // const [uploadStep, setUploadStep] = useState(1);

  const clearContextIDs = () => {
    setDraftsID("");
    setPublishedProjectsID("");
    router.push("/admin");
  };
  if (isLoading) return <CircularProgress />;
  if (!isLoading && project) {
    return (
      <div className="tracking-tight">
        <div>
          <button
            onClick={clearContextIDs}
            className="p-2 w-24 border-2 border-black hover:bg-black hover:text-white"
          >
            Go Back
          </button>
        </div>
        {/* The title  */}
        <div>
          {!projectsEdit ? (
            <div>
              <h1 className="text-4xl font-br-firma-semibold tracking-tight">
                {project.title}
              </h1>
              <button className="" onClick={() => setProjectsEdit(true)}>
                <FontAwesomeIcon icon={faEdit} width={24} />
              </button>
            </div>
          ) : (
            <div>
              <input
                value={project.title}
                onChange={(e) => setProjects(e.target.value)}
                className="border-2 border-black rounded-lg p-2 font-br-firma-regular"
              />{" "}
              <button onClick={() => setProjectsEdit(false)}>
                <FontAwesomeIcon icon={faCheck} width={24} />
              </button>
            </div>
          )}
        </div>

        {/* The Description  */}
        <div>
          {!descriptionEdit ? (
            <div>
              <p>{description}</p>
              <button className="" onClick={() => setDescriptionEdit(true)}>
                <FontAwesomeIcon icon={faEdit} width={24} />
              </button>
            </div>
          ) : (
            <div>
              <textarea
                name=""
                id=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button onClick={() => setDescriptionEdit(false)}>
                <FontAwesomeIcon icon={faCheck} width={24} />
              </button>
            </div>
          )}
        </div>

        {/* <div>
        <p>Create a new project!</p>
        <p>Step {uploadStep} of 3</p>
      </div>

      {uploadStep === 1 && <StepOne setUploadStep={setUploadStep} />}
      {uploadStep === 2 && <StepTwo setUploadStep={setUploadStep} />}
      {uploadStep === 3 && <StepThree setUploadStep={setUploadStep} />} */}
        <div>
          <h1 className="font-br-firma-regular text-xl tracking-tight">
            Collaborators
          </h1>
          {!collaboratorsEdit ? (
            <div>
              <p className="text-sm font-br-firma-regular">
                {project.collaborators}
              </p>
              <button className="" onClick={() => setCollaboratorsEdit(true)}>
                <FontAwesomeIcon icon={faEdit} width={24} />
              </button>
            </div>
          ) : (
            <div>
              <input
                value={project.collaborators}
                onChange={(e) => setCollaborators(e.target.value)}
                className="border-2 border-black rounded-lg p-2 font-br-firma-regular"
              />{" "}
              <button onClick={() => setCollaboratorsEdit(false)}>
                <FontAwesomeIcon icon={faCheck} width={24} />
              </button>
            </div>
          )}
        </div>
        <DropZone />
        {/* <Draggable /> */}
        {/* <DropzoneUploader /> */}
        {/* the save and publish button  */}
        <div>
          <button
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white"
            onClick={() => setProjectsStatus("draft")}
          >
            Save as Draft
          </button>
          <button
            className="px-4 py-2"
            onClick={() => setProjectsStatus("completed")}
          >
            Publish Project
          </button>
        </div>
      </div>
    );
  }
  if (!project)
    return (
      <div className="tracking-tight">
        <div>
          <button
            onClick={clearContextIDs}
            className="p-2 w-24 border-2 border-black hover:bg-black hover:text-white"
          >
            Go Back
          </button>
        </div>
        {/* The title  */}
        <div>
          {!projectsEdit ? (
            <div>
              <h1 className="text-4xl font-br-firma-semibold tracking-tight">
                {projects}
              </h1>
              <button className="" onClick={() => setProjectsEdit(true)}>
                <FontAwesomeIcon icon={faEdit} width={24} />
              </button>
            </div>
          ) : (
            <div>
              <input
                value={projects}
                onChange={(e) => setProjects(e.target.value)}
                className="border-2 border-black rounded-lg p-2 font-br-firma-regular"
              />{" "}
              <button onClick={() => setProjectsEdit(false)}>
                <FontAwesomeIcon icon={faCheck} width={24} />
              </button>
            </div>
          )}
        </div>

        {/* The Description  */}
        <div>
          {!descriptionEdit ? (
            <div>
              <p>{description}</p>
              <button className="" onClick={() => setDescriptionEdit(true)}>
                <FontAwesomeIcon icon={faEdit} width={24} />
              </button>
            </div>
          ) : (
            <div>
              <textarea
                name=""
                id=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <button onClick={() => setDescriptionEdit(false)}>
                <FontAwesomeIcon icon={faCheck} width={24} />
              </button>
            </div>
          )}
        </div>

        {/* <div>
        <p>Create a new project!</p>
        <p>Step {uploadStep} of 3</p>
      </div>

      {uploadStep === 1 && <StepOne setUploadStep={setUploadStep} />}
      {uploadStep === 2 && <StepTwo setUploadStep={setUploadStep} />}
      {uploadStep === 3 && <StepThree setUploadStep={setUploadStep} />} */}
        <div>
          <h1 className="font-br-firma-regular text-xl tracking-tight">
            Collaborators
          </h1>
          {!collaboratorsEdit ? (
            <div>
              <p className="text-sm font-br-firma-regular">{collaborators}</p>
              <button className="" onClick={() => setCollaboratorsEdit(true)}>
                <FontAwesomeIcon icon={faEdit} width={24} />
              </button>
            </div>
          ) : (
            <div>
              <input
                value={collaborators}
                onChange={(e) => setCollaborators(e.target.value)}
                className="border-2 border-black rounded-lg p-2 font-br-firma-regular"
              />{" "}
              <button onClick={() => setCollaboratorsEdit(false)}>
                <FontAwesomeIcon icon={faCheck} width={24} />
              </button>
            </div>
          )}
        </div>
        <DropZone />
        {/* <Draggable /> */}
        {/* <DropzoneUploader /> */}
        {/* the save and publish button  */}
        <div>
          <button
            className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white"
            onClick={() => setProjectsStatus("draft")}
          >
            Save as Draft
          </button>
          <button
            className="px-4 py-2"
            onClick={() => setProjectsStatus("completed")}
          >
            Publish Project
          </button>
        </div>
      </div>
    );
};

export default UploadProjects;

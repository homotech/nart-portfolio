"use client";

import StepOne from "@/src/components/stepOne";
import StepTwo from "@/src/components/stepTwo";
import StepThree from "@/src/components/stepThree";
import { useState } from "react";

const inputStyling =
  "block w-full p-4 border border-black rounded-lg font-br-firma-regular focus:outline-none mt-2";

const UploadProjects = () => {
  const [uploadStep, setUploadStep] = useState(1);
  // const [formID, setFormID] = useState(null);

  //   const validateForm = () => {
  //     let errors = formErrors;
  //     if (!projectTitle.trim()) {
  //       errors.projectTitle = "Please input a Project title";
  //     }
  //     if (!projectDesc.trim()) {
  //       errors.projectDesc = "Please input a Project Description";
  //     }
  //     if (!projectCategory || projectCategory === "Select a category") {
  //       errors.projectCategory = "Please select a category";
  //     }

  //     setFormErrors(errors);
  //     return Object.keys(errors).length === 0;
  //   };

  // if (validateForm()) {
  // setUploadStep((prevStep) => Math.max(3, prevStep - 1));
  // console.log({ projectTitle, projectDesc, projectCategory });
  // }
  // console.log(
  //   formErrors.projectTitle,
  //   formErrors.projectCategory,
  //   formErrors.projectDesc
  // );
  // console.log({ projectTitle, projectDesc, projectCategory });
  // };

  return (
    <div className="">
      <div>
        <p>Create a new project!</p>
        <p>Step {uploadStep} of 3</p>
      </div>

      {uploadStep === 1 && <StepOne setUploadStep={setUploadStep} />}
      {uploadStep === 2 && <StepTwo setUploadStep={setUploadStep} />}
      {uploadStep === 3 && <StepThree setUploadStep={setUploadStep} />}
    </div>
  );
};

export default UploadProjects;

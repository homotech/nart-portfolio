// "use client";
import React, { useState, useCallback, useEffect, useContext } from "react";
import { storage, db } from "../../firebaseConfig";
import {
  arrayUnion,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { AdminContext } from "../app/admin/layout";

interface StepTwoProps {
  formID: string;
  setFormID: React.Dispatch<React.SetStateAction<string>>;
  setUploadStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepTwo: React.FC<StepTwoProps> = ({
  formID,
  setFormID,
  setUploadStep,
}) => {
  const { draftsID, publishedProjectsID } = useContext(AdminContext);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [currentID, setCurrentID] = useState("");
  useEffect(() => {
    if (draftsID) {
      setCurrentID(draftsID);
    } else if (publishedProjectsID) {
      setCurrentID(publishedProjectsID);
    }

    const fetchImageUrls = async () => {
      try {
        const docSnap = await getDoc(doc(db, "projects", currentID));

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log(data.images);
          setUploadedImages(data.images || []);
          // setSelectedImages(data.images || []);
        } else {
          console.log("No such documents");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImageUrls();

    return () => {
      selectedImages.forEach((image) => {
        if ((image as any).preview) URL.revokeObjectURL((image as any).preview);
      });
    };
  }, [selectedImages, currentID]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedImages((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handlePrevious = () => {
    setUploadStep(1);
  };

  // code to go to the next step
  const handleNext = async () => {
    await Promise.all(
      selectedImages.map(async (image) => {
        try {
          const uniqueName = `${Date.now()}-${image.name}`;
          const imageRef = ref(storage, `projects/${currentID}/${uniqueName}`);

          await uploadBytes(imageRef, image);
          const downloadURL = await getDownloadURL(imageRef);

          await updateDoc(doc(db, "projects", draftsID), {
            images: arrayUnion(downloadURL),
          });
        } catch (error) {
          console.error("Error uploading images: ", error);
          alert(error);
        }
      })
    );
    setUploadStep(3);
  };

  //code to display the selected Images
  const selectedImagesPreview = selectedImages.length ? (
    selectedImages.map((file, index) => (
      <Image
        key={index}
        src={(file as any).preview}
        width={200}
        height={200}
        style={{ width: "auto", height: "auto" }}
        alt={`Preview ${index + 1}`}
        className="mb-4 border-4 border-white rounded-lg shadow"
      />
    ))
  ) : (
    <p>No images selected ready for upload</p>
  );

  // Code to display the uploaded images
  const uploadedImagesPreview =
    uploadedImages.length > 0
      ? uploadedImages.map((image, index) => (
          <div
            className="w-32 h-32 relative shadow rounded-lg border-2 border-white"
            key={index}
          >
            <Image
              key={index}
              src={image}
              layout="fill"
              objectFit="cover"
              alt="Uploaded Image"
              className="rounded-lg"
            />
            <button className="px-4 px-2 bg-red-400 text-white text-sm rounded-lg z-50">
              Delete
            </button>
          </div>
        ))
      : null;
  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 my-4"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Drag and drop an image here, or click to select one</p>
        )}
      </div>
      <div className="flex justify-between gap-4">
        <div className="">{selectedImagesPreview}</div>
        {/* This is the list of images that have been uploaded  */}
        <div className="flex justify-between gap-4">
          {uploadedImagesPreview}
        </div>
      </div>

      <button
        type="button"
        onClick={handlePrevious}
        className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default StepTwo;

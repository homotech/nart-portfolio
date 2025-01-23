// "use client";
import React, { useState, useCallback, useEffect, useContext } from "react";
import { storage, db } from "../../firebaseConfig";
import {
  arrayUnion,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
  deleteDoc,
  arrayRemove,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Image from "next/legacy/image";
import { useDropzone } from "react-dropzone";
import { AdminContext } from "../app/admin/layout";
import { CircularProgress } from "@mui/material";

//Clearing the typescript error
interface StepTwoProps {
  formID: string;
  setFormID: React.Dispatch<React.SetStateAction<string>>;
  setUploadStep: React.Dispatch<React.SetStateAction<number>>;
}
interface MoveImageParams {
  index: number;
  direction: number;
}

interface Image {
  imageUrl: string;
  documentId?: string;
}

// StepTwo component
const StepTwo: React.FC<StepTwoProps> = ({
  formID,
  setFormID,
  setUploadStep,
}) => {
  //State declaration
  const { draftsID, publishedProjectsID } = useContext(AdminContext);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [currentID, setCurrentID] = useState("");
  const [uploadingImages, setUploadingImages] = useState(false);

  //function to move the image
  const moveImage = ({ index, direction }: MoveImageParams): void => {
    setSelectedImages((prevImages) => {
      const copy = [...prevImages];
      const [removedImage] = copy.splice(index, 1);
      copy.splice(index + direction, 0, removedImage);
      return copy.map((image, i) => ({ ...image, order: i + 1 }));
    });
  };

  //useEffect to fetch the images
  useEffect(() => {
    if (draftsID) {
      setCurrentID(draftsID);
    } else if (publishedProjectsID) {
      setCurrentID(publishedProjectsID);
    }

    let unsubscribe: any;
    if (currentID) {
      unsubscribe = onSnapshot(doc(db, "projects", currentID), (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUploadedImages(data.images || []);
        }
      });
    }
    const fetchImageUrls = async () => {
      // try {
      //   const docSnap = await getDoc(doc(db, "projects", currentID));
      //   if (docSnap.exists()) {
      //     const data = docSnap.data();
      //     console.log(data.images);
      //     setUploadedImages(data.images || []);
      //     // setSelectedImages(data.images || []);
      //   } else {
      //     console.log("No such documents");
      //   }
      // } catch (error) {
      //   console.error("Error fetching images:", error);
      // }
    };
    // fetchImageUrls();
    return () => {
      if (unsubscribe) unsubscribe();
      selectedImages.forEach((image) => {
        if ((image as any).preview) URL.revokeObjectURL((image as any).preview);
      });
    };
  }, [currentID, uploadedImages]);

  useEffect(() => {
    return () => {
      selectedImages.forEach((image) => {
        if ((image as any).preview) URL.revokeObjectURL((image as any).preview);
      });
    };
  }, [selectedImages]);
  //function to handle the drop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedImages((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file, index) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          order: prevImages.length + index + 1,
        })
      ),
    ]);
  }, []);

  //useDropzone hook
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // code to go to the previous step
  const handlePrevious = () => {
    setUploadStep(1);
  };

  // code to go to the next step
  const handleNext = async () => {
    setUploadingImages(true);
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
    setUploadingImages(false);
  };

  //code to display the selected Images
  const selectedImagesPreview = selectedImages.length ? (
    selectedImages.map((file, index) => (
      <div>
        <Image
          key={index}
          src={(file as any).preview}
          width={200}
          height={200}
          style={{ width: "auto", height: "auto" }}
          alt={`Preview ${index + 1}`}
          className="mb-4 border-4 border-white rounded-lg shadow"
        />
        <button
          disabled={index === 0}
          onClick={() => moveImage({ index, direction: -1 })}
          className={`border-2 border-black px-4 py-2 hover:bg-black hover:text-white `}
        >
          Up
        </button>
        <button
          disabled={index === selectedImages.length - 1}
          onClick={() => moveImage({ index, direction: 1 })}
          className={`border-2 border-black px-4 py-2 hover:bg-black hover:text-white `}
        >
          Down
        </button>
      </div>
    ))
  ) : (
    <p>No images selected ready for upload</p>
  );

  const deleteImage = async ({ imageUrl, documentId }: Image) => {
    try {
      const imagePath = decodeURIComponent(
        imageUrl.split("/o/")[1].split("?")[0]
      );
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
      console.log("Image Deleted Successfully from storage");

      const docRef = doc(db, "projects", documentId);
      await updateDoc(docRef, {
        images: arrayRemove(imageUrl),
      });
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // Code to display the uploaded images
  const uploadedImagesPreview =
    uploadedImages.length > 0
      ? uploadedImages.map((image, index) => (
          <div>
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
            </div>
            <button
              onClick={() =>
                deleteImage({ imageUrl: image, documentId: currentID })
              }
              className=" px-4 px-2 bg-red-400 text-white text-sm absolute rounded-lg z-999"
            >
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
        <div className="">{selectedImagesPreview} </div>
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
        disabled={uploadingImages}
        className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
      >
        {uploadingImages ? <CircularProgress /> : "Next"}
      </button>
    </div>
  );
};

export default StepTwo;

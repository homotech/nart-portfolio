import { useCallback, useState } from "react";
import React from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { db } from "@/firebaseConfig";

const DropZone = () => {
  const [selectedImages, setselectedImages] = useState([]);
  //   console.log("db", db);
  // const [preview, setPreview] = useState(null);
  //   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const onDrop = useCallback((acceptedFiles: any) => {
    setselectedImages(
      acceptedFiles.map((file: any) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
    console.log(selectedImages);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  //   const uploadImages = () => {
  //     await Promise.all(
  //       selectedImages.map((image) => {
  //         const imageRef = ref(storage`posts/${docRef.id}/${image.path}`);
  //       })
  //     );
  //   };

  const selected_images = selectedImages?.map((file) => {
    <div>
      <Image
        src={file.preview}
        width="200"
        height="200"
        style={{ width: "auto", height: "auto" }}
        alt="This is an Alt"
      />
    </div>;
  });

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
      {selected_images}
    </div>
  );
};

export default DropZone;

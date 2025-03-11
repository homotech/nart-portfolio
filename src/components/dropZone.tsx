import {
  faChevronDown,
  faChevronUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import React from "react";
import { useDropzone } from "react-dropzone";

const DropZone = () => {
  const [selectedImages, setSelectedImages] = useState<{ preview: string }[]>(
    []
  );

  const onDrop = useCallback((acceptedFiles: any) => {
    setSelectedImages((prevImages) => [
      ...prevImages,
      ...acceptedFiles.map((file: any) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const moveImage = (direction: string, index: number) => {
    const newImages = [...selectedImages];

    if (direction === "down" && index < selectedImages.length - 1) {
      [newImages[index], newImages[index + 1]] = [
        newImages[index + 1],
        newImages[index],
      ];
      console.log(newImages);
      setSelectedImages(newImages);
    } else if (direction === "up" && index > 0) {
      [newImages[index], newImages[index - 1]] = [
        newImages[index - 1],
        newImages[index],
      ];
      setSelectedImages(newImages);
    } else {
      console.log("This Image is not moveable");
    }
  };

  const deleteImage = (indexToRemove: number) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

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
      <div className="grid md:grid-cols-3 gap-4">
        {selectedImages?.map((file, index) => (
          <div className="relative border-2 border-red-200" key={index}>
            <div className="overflow-hidden rounded-lg relative z-20">
              <img
                src={file.preview}
                // style={{ width: "auto", height: "auto" }}
                alt="This is an Alt"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 absolute z-50 top-0 right-0">
              <button
                onClick={() => moveImage("up", index)}
                className="flex items-center justify-center bg-blue-500 rounded-full w-8 h-8 hover:bg-blue-700 hover:text-white"
              >
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="w-4 h-4 text-white"
                />
              </button>
              <button
                className="flex items-center justify-center bg-blue-500 rounded-full w-8 h-8 hover:bg-blue-700 hover:text-white"
                onClick={() => moveImage("down", index)}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-4 h-4 text-white"
                />
              </button>
              <button
                className="flex items-center justify-center bg-red-500 rounded-full w-8 h-8"
                onClick={() => deleteImage(index)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="w-4 h-4 text-white"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropZone;

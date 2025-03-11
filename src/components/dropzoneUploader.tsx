import { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { ReactSortable } from "react-sortablejs";

interface ItemTypes {
  id: number;
  preview: string;
}

const DropzoneUploader = () => {
  const [images, setImages] = useState<ItemTypes[]>([]);
  const idCounter = useRef(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prevImages) => {
      const newImages = acceptedFiles.map((file) => ({
        id: idCounter.current++,
        preview: URL.createObjectURL(file),
      }));
      return [...prevImages, ...newImages];
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });
  return (
    <div className="p-4 border border-dashed border-gray-400 rounded-lg">
      <div
        {...getRootProps()}
        className="p-10 text-center cursor-pointer bg-gray-100"
      >
        <input {...getInputProps()} />
        <p>Drag & Drop some images here, or click to select files</p>
      </div>
      <ReactSortable
        list={images}
        setList={setImages}
        animation={200}
        className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {images.map((file) => (
          <div key={file.id} className="relative">
            <img
              src={file.preview}
              alt="Images Alt"
              className="w-full  object-cover rounded"
            />
          </div>
        ))}
      </ReactSortable>

      <button
        onClick={() => {
          console.log(images);
        }}
      >
        Show me
      </button>
    </div>
  );
};
export default DropzoneUploader;

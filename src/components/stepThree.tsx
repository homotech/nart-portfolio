import Image from "next/legacy/image";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { AdminContext } from "../app/admin/layout";

interface StepThreeProps {
  formID: string;
  setUploadStep: (step: number) => void;
}

const StepThree = ({ formID, setUploadStep }: StepThreeProps) => {
  const router = useRouter();
  const { draftsID, publishedProjectsID } = useContext(AdminContext);
  const [currentID, setCurrentID] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // setIsLoading(true);
    if (draftsID) {
      setCurrentID(draftsID);
    } else if (publishedProjectsID) {
      setCurrentID(publishedProjectsID);
    }

    if (currentID) {
      const draftsDocRef = doc(db, "projects", currentID);
      const unsubscribe = onSnapshot(
        draftsDocRef,
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setImages(data.images || []); // Assuming images are stored as an array of URLs
            setThumbnail(data.thumbnail);
          }
          setIsLoading(false);
        },
        (error) => {
          console.error("Error fetching images in real-time:", error);
          setIsLoading(false);
          setFeedback(error.message);
        }
      );
      return () => unsubscribe();
    }
  }, [draftsID, publishedProjectsID, currentID]);

  const handleThumbnailSubmit = async () => {
    if (!thumbnail) {
      alert("Please select a thumbnail before submitting!");
      return;
    }

    try {
      const draftsDocRef = doc(db, "projects", currentID);
      await updateDoc(draftsDocRef, { thumbnail, status: "complete" });
      router.push("/admin/dashboard");
      // alert("Thumbnail submitted successfully!");
    } catch (error) {
      console.error("Error updating thumbnail:", error);
      // setFeedback(error.message);
    }
  };

  const handlePrevious = () => {
    setUploadStep(2);
  };

  if (isLoading) {
    console.log(isLoading);
    return <p>Loading images...</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setThumbnail(image)}
            className={`cursor-pointer p-2 ${
              thumbnail === image ? "border-2 border-blue-500" : "border"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail Option ${index + 1}`}
              width={200}
              height={200}
              style={{ width: "auto", height: "auto" }}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevious}
        className="mt-4 border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
      >
        Add more images
      </button>
      <button
        onClick={handleThumbnailSubmit}
        className="mt-4 border-2 border-black px-4 py-2 hover:bg-black hover:text-white"
      >
        Submit Thumbnail
      </button>
    </div>
  );
};

export default StepThree;

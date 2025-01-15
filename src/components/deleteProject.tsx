import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebaseConfig";

interface DeleteProjectProps {
  id: string;
  SetActiveDialogId: React.Dispatch<React.SetStateAction<string | null>>;
  isActive: boolean;
  handleDelete: (id: string) => void;
}
const DeleteProject: React.FC<DeleteProjectProps> = ({
  id,
  SetActiveDialogId,
  isActive,
  handleDelete,
}) => {
  const [isConfirming, setIsConfirming] = useState(false);

  return (
    <div>
      {!isActive ? (
        <div>
          <button
            className="bg-red-500 text-white px-4 py-4"
            onClick={() => {
              SetActiveDialogId(id);
              //   setIsConfirming(true);
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            className="bg-red-500 text-white px-4 py-4"
            onClick={() => {
              handleDelete(id);
              SetActiveDialogId(null);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-500 text-white px-4 py-4"
            onClick={() => {
              //   setIsConfirming(false);
              SetActiveDialogId(null);
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};
export default DeleteProject;

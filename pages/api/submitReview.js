import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
export default async function (req, res) {
  if (req.method === "POST") {
    try {
      const { projectId, rating, feedback } = req.body;
      console.log("Starting to process request ...............");
      await addDoc(collection(db, "reviews"), {
        projectId,
        rating,
        feedback,
        createdAt: new Date(),
      });
      console.log("Review submitted successfully");
      res.status(200).json({ message: "Review submitted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to subnit review", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

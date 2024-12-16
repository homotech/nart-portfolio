import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviews = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json({ reviews });
    } catch (error) {
      res.status(500).json({ error: "Error fetching reviews" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

import { firestore } from "@/firebaseConfig";
export default async function GetCompleteTests(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    console.log("Fetching results");
    const snapshot = await firestore
      .collection("tests")
      .where("status", "==", "complete")
      .get();

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const { projectId, rating, feedback } = req.body;
    res.status(200).json({ message: "Review submitted!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

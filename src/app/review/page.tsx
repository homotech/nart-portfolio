"use client";
import { useState } from "react";

export default function Review() {
  const [projectId, setProjectId] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  //   Function that handles the submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("api/submitReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId, rating, feedback }),
      });
      if (res.ok) {
        setMessage("Review submitted successfully");
        setProjectId("");
        setRating("");
        setFeedback("");
      } else {
        setMessage("Error submitting review.");
      }
    } catch (error) {
      setMessage("Error Submitting Review");
    }
  };
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Submit a Review</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Please rate the whole project on a scale of 1-5</label>
          <input
            type="number"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            Do you have anything to say about the whole project? (Optional)
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

import { useState, useEffect } from "react";

interface Review {
  id: string;
  projectId: string;
  rating: number;
  feedback: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/getReviews");
        const data = await res.json();
        console.log("fetching the reviews data", data);
        setReviews(data.reviews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };
    fetchReviews();
    console.log(reviews);
  }, []);
  if (loading) {
    return <p>Loading reviews........</p>;
  }
  return (
    <div>
      <h1>Projects reviews</h1>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li
              key={review.id}
              className="border border-off-black border-radius-4"
            >
              <h1 className="text-crayola text-xl">{review.projectId}</h1>
              <br />
              <strong>Rating:</strong>
              {review.rating}
              <br />
              <strong>Feedback:</strong>
              {review.feedback}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../component/MyReviewCard";
import { AuthContext } from "../contexts/UserContext";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://koni-s-kitchen-server-side.vercel.app/reviews?key=userEmail&value=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        setLoading(false);
      });
  }, [user, reload]);
  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center space-x-2">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-400"></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {reviews.map((review) => (
              <MyReviewCard
                key={review._id}
                setReload={setReload}
                review={review}
              ></MyReviewCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyReviews;

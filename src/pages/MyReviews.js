import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../component/MyReviewCard";
import { AuthContext } from "../contexts/UserContext";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://koni-s-kitchen-server-side.vercel.app/reviews?key=userEmail&value=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [user, reload]);
  return (
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
  );
};

export default MyReviews;

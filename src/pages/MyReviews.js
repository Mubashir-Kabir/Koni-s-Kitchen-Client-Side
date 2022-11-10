import React, { useContext, useEffect, useState } from "react";
import MyReviewCard from "../component/MyReviewCard";
import { AuthContext } from "../contexts/UserContext";
import useTitle from "../hooks/useTitle";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useTitle("My Reviews");

  useEffect(() => {
    fetch(
      `https://koni-s-kitchen-server-side.vercel.app/reviews/private?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
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
      ) : reviews.length ? (
        <div className="my-12 mx-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            {reviews.map((review) => (
              <MyReviewCard
                key={review._id}
                setReload={setReload}
                review={review}
              ></MyReviewCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-80 flex justify-center items-center">
          <h2 className="bg-gray-200 text-2xl font-semibold rounded-2xl px-6 py-3">
            You did't post any reviews yet...
          </h2>
        </div>
      )}
    </>
  );
};

export default MyReviews;

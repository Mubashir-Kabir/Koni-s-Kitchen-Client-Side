import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../component/ReviewCard";
import ServiceDetailsComponent from "../component/ServiceDetailsComponent";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  const { _id } = service;
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(
      `https://koni-s-kitchen-server-side.vercel.app/reviews?key=postId&value=${_id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [reload]);
  let left = true;
  return (
    <div>
      <ServiceDetailsComponent
        setReload={setReload}
        service={service}
      ></ServiceDetailsComponent>
      <div className="px-2 lg:px-20">
        {reviews.map((review) => (
          <div
            key={review._id}
            className={left ? "flex justify-end" : "flex justify-start"}
          >
            <ReviewCard review={review}></ReviewCard>
            {(left = !left)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;

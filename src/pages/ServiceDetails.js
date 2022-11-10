import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../component/ReviewCard";
import ServiceDetailsComponent from "../component/ServiceDetailsComponent";
import useTitle from "../hooks/useTitle";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  console.log(service);

  const { _id, name } = service;
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(false);

  useTitle(name);

  let left = false;

  useEffect(() => {
    fetch(
      `https://koni-s-kitchen-server-side.vercel.app/reviews/public?id=${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setReviews(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [reload, _id]);

  return (
    <div>
      <ServiceDetailsComponent
        setReload={setReload}
        service={service}
      ></ServiceDetailsComponent>
      <div className="my-12 border-b">
        <h3 className="text-4xl font-semibold">All Reviews</h3>
      </div>
      <div className="px-2 lg:px-20 mb-6">
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

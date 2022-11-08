import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { thumbnail, name, info, price, _id } = service;
  let details;
  if (info.length > 100) {
    details = `${info.slice(0, 100)}. . .`;
  } else {
    details = info;
  }
  return (
    <div>
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={thumbnail}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>
      <p className="text-gray-700 text-left">{details}</p>
      <div className="flex justify-between items-center mt-3">
        <p className="text-left ">
          <span className="bg-cyan-400 px-4 py-2 rounded-md">Price:</span>{" "}
          <span className="text-xl text-red-600 font-semibold">${price}</span>
        </p>
        <button className="px-6 py-3 bg-cyan-400 rounded-md">
          <Link to={`../services/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

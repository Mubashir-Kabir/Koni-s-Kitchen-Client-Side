import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { thumbnail, name, info, price, _id, img } = service;
  let details;
  if (info?.length > 100) {
    details = `${info.slice(0, 100)}. . .`;
  } else {
    details = info;
  }
  return (
    <div className="bg-gray-200 rounded-lg">
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            className="object-cover w-full h-56 mb-2 rounded-t-lg shadow-lg md:h-64 xl:h-80 hover:cursor-pointer"
            src={thumbnail}
            alt=""
          />
        </PhotoView>
      </PhotoProvider>

      <div className="p-6">
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </p>
        <p className="text-gray-700 text-left">{details}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-left ">
            <span className="bg-yellow-300 px-4 py-2 rounded-md">Price:</span>{" "}
            <span className="text-xl italic text-cyan-500 font-semibold">
              ${price}
            </span>
          </p>
          <Link to={`../services/${_id}`}>
            <button className="px-6 py-3 bg-yellow-300 rounded-md hover:bg-yellow-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

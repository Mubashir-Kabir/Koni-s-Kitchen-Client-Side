import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  const { userImg, UserName, reviewMessage, rating, timeObj } = review;
  return (
    <div className="container bg-gray-200 my-5 shadow-xl flex flex-col w-full max-w-3xl divide-y rounded-lg divide-gray-300 bg-yellow-300-50 text-left text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={userImg}
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{UserName}</h4>
            <span className="text-xs text-gray-600">
              {(timeObj + "")?.split("T")[0]}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-yellow-500">
          <AiOutlineStar className="text-2xl fill-current"></AiOutlineStar>
          <span className="text-xl font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-600">
        <p className=" max-w-lg">{reviewMessage}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

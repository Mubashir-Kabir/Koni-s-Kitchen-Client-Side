import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const ServiceDetailsComponent = ({ service }) => {
  const { img, name, info, price } = service;
  const { user } = useContext(AuthContext);
  return (
    <section className="bg-yellow-300  border-b-2 text-gray-800">
      <div className="container flex flex-col mx-auto lg:flex-row items-center">
        <div>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-96 xl:h-80"
            src={img}
            alt=""
          />
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leading-none">{name}</h2>
          <p className="mt-4 text-sm text-justify">{info}</p>
          <p className="mb-8 text-left mt-2">
            <span>And I Charge </span>
            <span className="text-xl italic font-semibold">${price}</span>
          </p>
          {user?.uid ? (
            <button className=" px-10 py-3 text-lg font-medium rounded-3xl bg-cyan-400 text-gray-50 hover:bg-cyan-600">
              Add Review
            </button>
          ) : (
            <button className=" px-10 py-3 text-lg font-medium rounded-3xl bg-cyan-400 text-gray-50 hover:bg-cyan-600">
              Log In to Review
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsComponent;

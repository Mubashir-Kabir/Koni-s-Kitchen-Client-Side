import React from "react";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <section className="  text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-semibold">Difference between SQL and NoSQL</h3>
            <p className="mt-1 text-gray-600 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-semibold">
              What is JWT, and how does it work?
            </h3>
            <p className="mt-1 text-gray-600 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-semibold">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="mt-1 text-gray-600 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-semibold">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="mt-1 text-gray-600 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
              fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum
              voluptatem consequatur ratione, doloremque debitis? Fuga labore
              omnis minima, quisquam delectus culpa!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

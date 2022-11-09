import React from "react";

const State = () => {
  return (
    <div>
      <section className="p-6  text-gray-800">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl text-cyan-400 font-bold leading-none lg:text-6xl">
              5K+
            </p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl text-cyan-400 font-bold leading-none lg:text-6xl">
              3+
            </p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl text-cyan-400 font-bold leading-none lg:text-6xl">
              2+
            </p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default State;

import React from "react";

const CallToAction = () => {
  return (
    <div>
      <section className="py-6 max-w-3xl rounded-md mx-auto my-5 lg:my-20 bg-yellow-300 text-red-700">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
          <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
            Hey there, have you any query?
          </h1>
          <button className="px-8 py-3 text-lg font-semibold rounded bg-cyan-400 text-gray-50 hover:bg-cyan-600">
            Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;

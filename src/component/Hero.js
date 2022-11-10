import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative my-6 lg:my-20">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-cyan-400">
        <svg
          className="absolute inset-x-0 -bottom-1 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Help me <br className="hidden md:block" />
                to give my customers better services
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Tasty,delicious homemade food is the destination for every food
                lover.Food makes life live worthy and those who makes the food
                is always greater than all.
              </p>
              <Link
                to="/blogs"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-200">
                <h1 className="text-5xl font-extrabold text-gray-900">
                  Get Update
                </h1>
                <p className="my-8">
                  To get in touch with me and to know about newest services. So
                  that You can give me review.
                </p>
                <form
                  action=""
                  className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
                >
                  <div>
                    <label htmlFor="name" className="text-sm sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full p-2 rounded-md focus:ring focus:ring-violet-600 border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm sr-only">Email address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="w-full p-2 rounded-md focus:ring focus:ring-violet-600 border-gray-300"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full py-3 font-semibold rounded bg-cyan-400 text-gray-50"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

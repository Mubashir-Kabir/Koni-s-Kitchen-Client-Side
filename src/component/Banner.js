import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../utilities/foodAnimation.json";

const Banner = () => {
  return (
    <section className="bg-gray-200 text-gray-800 container mx-auto lg:my-10 rounded-md">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
        <div className="hidden  lg:flex items-center justify-center p-6 mt-8 lg:mt-0 ">
          <Lottie
            className="hidden lg:block "
            animationData={animation}
            loop={true}
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Koni's
            <span className="text-yellow-300"> Kitchen</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Give me your precious reviews so that we can find out faults,lacks
            and drawbacks.Make services better and can adore your choices.Keep
            them for your better experience.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end">
            <Link
              to="/services"
              className="px-8 py-3 text-lg font-semibold rounded bg-cyan-400 text-gray-50 hover:bg-cyan-600"
            >
              Review Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

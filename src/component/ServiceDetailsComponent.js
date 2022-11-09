import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { notifySuccess } from "../utilities/sharedFunctions";

const ServiceDetailsComponent = ({ service, setReload }) => {
  const { img, name, info, price, _id } = service;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  const resultHandler = (result) => {
    if (result.status) {
      notifySuccess("Your Review posted Successfully");
      setReload((current) => !current);
    }
  };

  const handleTextArea = (e) => {
    if (e.target.value.length < 10) {
      setMessage("");
      setErr("Minimum 10 characters ");
      return;
    }
    setErr("");
    setMessage(e.target.value);
  };

  const postReview = () => {
    if (!message) {
      return setErr("Please give a feedback first");
    }
    setErr("");
    setIsOpen(!isOpen);

    const review = {
      UserName: user?.displayName,
      postId: _id,
      reviewMessage: message,
      userEmail: user.email,
      userImg: user?.photoURL,
      serviceName: name,
      serviceImg: img,
    };
    fetch("https://koni-s-kitchen-server-side.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => resultHandler(data));
  };

  return (
    <section className="bg-gray-200 relative border-b-2 text-gray-800">
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
            <span className="text-xl italic font-semibold text-red-500">
              ${price}
            </span>
          </p>
          {user?.uid ? (
            !isOpen && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" px-10 py-3 text-lg font-medium rounded-3xl bg-cyan-400 text-gray-50 hover:bg-cyan-600"
              >
                Add Review
              </button>
            )
          ) : (
            <Link to="/log-in" state={{ from: location }} replace>
              <button className=" px-10 py-3 text-lg font-medium rounded-3xl bg-cyan-400 text-gray-50 hover:bg-cyan-600">
                Log In to Review
              </button>
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="lg:absolute lg:top-3 mx-3 lg:right-3">
          <div className="flex flex-col max-w-lg p-8 shadow-2xl rounded-xl lg:p-12 bg-gray-200 text-gray-800 relative">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className=" bg-gray-300 px-4 py-2 rounded-full absolute top-2 right-2 text-xl font-semibold hover:cursor-pointer hover:bg-yellow-300"
            >
              X
            </p>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Your opinion matters!
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <button
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-500"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-10 h-10 text-gray-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  onChange={handleTextArea}
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
                ></textarea>
                <p className="text-red-500">{err}</p>
                <button
                  onClick={postReview}
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-cyan-400 hover:bg-cyan-600"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-sm text-cyan-500 hover:text-cyan-600"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceDetailsComponent;

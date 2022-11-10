import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { notifySuccess } from "../utilities/sharedFunctions";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { BsStarFill } from "react-icons/bs";

const ServiceDetailsComponent = ({ service, setReload }) => {
  // console.log(service);
  const { img, name, info, price, _id } = service;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [rating, setRating] = useState(3);
  let one, two, three, four, five;
  if (rating === 1) {
    one = true;
    two = false;
    three = false;
    four = false;
    five = false;
  }
  if (rating === 2) {
    one = true;
    two = true;
    three = false;
    four = false;
    five = false;
  }
  if (rating === 3) {
    one = true;
    two = true;
    three = true;
    four = false;
    five = false;
  }
  if (rating === 4) {
    one = true;
    two = true;
    three = true;
    four = true;
    five = false;
  }
  if (rating === 5) {
    one = true;
    two = true;
    three = true;
    four = true;
    five = true;
  }

  const resultHandler = (data) => {
    if (data.status) {
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

    //trying start
    const current = new Date();
    const timeObj = current.toISOString();

    //trying end

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
      timeObj,
      rating,
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
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-96 xl:h-80 hover:cursor-pointer"
                src={img}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leading-none">{name}</h2>
          <p className="mt-4 text-sm text-justify">{info}</p>
          <p className="mb-8 text-left mt-2">
            <span>And I Charge </span>
            <span className="text-xl italic font-semibold text-cyan-500">
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
                    onClick={() => {
                      setRating(1);
                    }}
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
                  >
                    <BsStarFill
                      className={
                        one
                          ? "text-3xl text-yellow-400"
                          : " text-3xl text-gray-500"
                      }
                    ></BsStarFill>
                  </button>
                  <button
                    onClick={() => setRating(2)}
                    type="button"
                    title="Rate 2 stars"
                    aria-label="Rate 2 stars"
                  >
                    <BsStarFill
                      className={
                        two
                          ? "text-3xl text-yellow-400"
                          : " text-3xl text-gray-500"
                      }
                    ></BsStarFill>
                  </button>
                  <button
                    onClick={() => setRating(3)}
                    type="button"
                    title="Rate 3 stars"
                    aria-label="Rate 3 stars"
                  >
                    <BsStarFill
                      className={
                        three
                          ? "text-3xl text-yellow-400"
                          : " text-3xl text-gray-500"
                      }
                    ></BsStarFill>
                  </button>
                  <button
                    onClick={() => setRating(4)}
                    type="button"
                    title="Rate 4 stars"
                    aria-label="Rate 4 stars"
                  >
                    <BsStarFill
                      className={
                        four
                          ? "text-3xl text-yellow-400"
                          : " text-3xl text-gray-500"
                      }
                    ></BsStarFill>
                  </button>
                  <button
                    onClick={() => setRating(5)}
                    type="button"
                    title="Rate 5 stars"
                    aria-label="Rate 5 stars"
                  >
                    <BsStarFill
                      className={
                        five
                          ? "text-3xl text-yellow-400"
                          : " text-3xl text-gray-500"
                      }
                    ></BsStarFill>
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  onChange={handleTextArea}
                  rows="3"
                  placeholder="Your review..."
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

import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/UserContext";
import { notifyError, notifySuccess } from "../utilities/sharedFunctions";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";

const MyReviewCard = ({ review, setReload }) => {
  const { serviceName, serviceImg, reviewMessage, _id, timeObj, rating } =
    review;

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState(reviewMessage);
  const [err, setErr] = useState("");
  const { user } = useContext(AuthContext);
  const { displayName, photoURL, email } = user;

  const [userRating, setUserRating] = useState(rating);
  let one, two, three, four, five;
  if (userRating === 1) {
    one = true;
    two = false;
    three = false;
    four = false;
    five = false;
  }
  if (userRating === 2) {
    one = true;
    two = true;
    three = false;
    four = false;
    five = false;
  }
  if (userRating === 3) {
    one = true;
    two = true;
    three = true;
    four = false;
    five = false;
  }
  if (userRating === 4) {
    one = true;
    two = true;
    three = true;
    four = true;
    five = false;
  }
  if (userRating === 5) {
    one = true;
    two = true;
    three = true;
    four = true;
    five = true;
  }

  // console.log(timeObj.toLocaleDateString("en-GB"));

  const handleTextArea = (e) => {
    if (e.target.value.length < 10) {
      setMessage("");
      setErr("Minimum 10 characters ");
      return;
    }
    setErr("");
    setMessage(e.target.value);
  };
  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`https://koni-s-kitchen-server-side.vercel.app/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setReload((current) => !current);
          return notifySuccess("Deleted Successfully");
        }
        return notifyError("Something went wrong please try again");
      });
  };
  const resultHandler = (result) => {
    if (result.status) {
      notifySuccess("Review Updated Successfully");
      setReload((current) => !current);
    }
  };
  const updateReview = () => {
    if (!message) {
      return setErr("Please give a feedback first");
    }
    setErr("");
    const review = {
      UserName: displayName,
      reviewMessage: message,
      userEmail: email,
      userImg: photoURL,
      serviceName,
      serviceImg,
      rating: userRating,
    };
    setIsOpen(!isOpen);

    fetch(`https://koni-s-kitchen-server-side.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => resultHandler(data));
  };

  return (
    <div className="relative">
      {modal ? (
        <div className="absolute top-0 rounded-lg bg-yellow-300 p-8 shadow-2xl">
          <h2 className="text-lg font-bold">
            Are you sure you want to Delete?
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Doing that will remove this review from everywhere, are you 100%
            sure it's OK?
          </p>

          <div className="mt-8 flex items-center justify-end text-xs">
            <button
              onClick={handleDelete}
              type="button"
              className="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={() => setModal(!modal)}
              type="button"
              className="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
            >
              No, go back
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container text-left flex flex-col w-full max-w-xl p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-200 text-gray-800">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={serviceImg}
                alt=""
                className="object-cover w-20 h-20 rounded bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{serviceName}</h4>
              <span className="text-xs text-gray-600">
                {(timeObj + "")?.split("T")[0]}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <AiOutlineStar className="text-2xl"></AiOutlineStar>
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-600">
          <p>{reviewMessage}</p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="py-2 px-6 rounded bg-yellow-300 hover:bg-yellow-200"
            >
              Edit
            </button>
            <button
              onClick={() => setModal(!modal)}
              className="py-2 px-6 rounded bg-yellow-300 hover:bg-yellow-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute lg:top-0 z-10 ">
          <div className="flex flex-col  max-w-lg p-8 shadow-2xl rounded-xl lg:p-12 bg-gray-200 text-gray-800 relative">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className=" bg-gray-300  px-4 py-2 rounded-full absolute top-2 right-2 text-xl font-semibold hover:cursor-pointer hover:bg-yellow-300"
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
                    onClick={() => setUserRating(1)}
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
                    onClick={() => setUserRating(2)}
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
                    onClick={() => setUserRating(3)}
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
                    onClick={() => setUserRating(4)}
                    type="button"
                    title="Rate 1 stars"
                    aria-label="Rate 1 stars"
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
                    onClick={() => setUserRating(5)}
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
                  defaultValue={reviewMessage}
                  onChange={handleTextArea}
                  rows="3"
                  placeholder="Message..."
                  className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"
                ></textarea>
                <p className="text-red-500">{err}</p>
                <button
                  onClick={updateReview}
                  type="button"
                  className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-cyan-400 hover:bg-cyan-600"
                >
                  Update
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
    </div>
  );
};

export default MyReviewCard;

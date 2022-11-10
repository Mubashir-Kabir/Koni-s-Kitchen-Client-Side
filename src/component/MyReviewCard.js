import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/UserContext";
import { notifyError, notifySuccess } from "../utilities/sharedFunctions";

const MyReviewCard = ({ review, setReload }) => {
  const { serviceName, serviceImg, reviewMessage, _id } = review;
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const { user } = useContext(AuthContext);
  const { displayName, photoURL, email } = user;

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
      // postId: _id,
      reviewMessage: message,
      userEmail: email,
      userImg: photoURL,
      serviceName,
      serviceImg,
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
              <span className="text-xs text-gray-600">2 days ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">4.5</span>
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

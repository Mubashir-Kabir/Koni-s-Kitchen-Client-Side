import React, { useState } from "react";
import { notifyError, notifySuccess } from "../utilities/sharedFunctions";

const ServiceAddForm = () => {
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  //validate name. name cant't be empty
  const nameValidation = (e) => {
    if (e.target.value === "") {
      setErr("Please give a name");
      return;
    }
    if (!/.{4,}/.test(e.target.value)) {
      setErr("Too short");
      return;
    }
    setErr("");
    setName(e.target.value);
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

  //price validation
  const priceValidate = (e) => {
    if (e.target.value === "") {
      setErr("Please give a price");
      return;
    }
    if (!/^[0-9]*$/.test(e.target.value)) {
      setErr("Price can only be digits");
      return;
    }
    setErr("");
    setPrice(e.target.value);
  };

  //photo url validation
  const urlValidation = (e) => {
    if (e.target.value === "") {
      return;
    }
    if (
      !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
        e.target.value
      )
    ) {
      setErr("URL must be starts with HTTP or HTTPS");
      return;
    }
    setErr("");
    setUrl(e.target.value);
  };
  //after create new service
  const notifyHandle = (data) => {
    if (data.status) {
      notifySuccess("Service added Successfully");
    } else {
      notifyError("Something went Wrong, Service could't added");
    }
  };

  //add service
  const addService = (e) => {
    e.preventDefault();
    if (name && url && price && message) {
      const current = new Date();
      const timeObj = current.toISOString();

      setErr("");
      const service = {
        img: url,
        info: message,
        name,
        price,
        thumbnail: url,
        timeObj,
      };
      e.target.reset();
      fetch(`https://koni-s-kitchen-server-side.vercel.app/services`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => notifyHandle(data));
    }
    setErr("Please Fill all the field");
  };

  return (
    <div>
      <div className="w-full p-8 space-y-3 rounded-xl bg-gray-200 shadow-md text-gray-800">
        <h1 className="text-red-500">{err}</h1>

        <h1 className="text-2xl font-bold text-center">Add Service</h1>

        {/* Add new service form */}
        <form
          onSubmit={addService}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              required
              onChange={nameValidation}
              type="text"
              name="name"
              id="name"
              placeholder="Name of your service"
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-yellow-300"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              onChange={urlValidation}
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="link of your picture "
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-yellow-300"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              required
              onChange={priceValidate}
              type="price"
              name="price"
              id="price"
              placeholder="What you Charge for the service?"
              className="w-full px-4 py-3 rounded-md border-gray-300  text-gray-800 focus:border-yellow-300"
            />
          </div>
          <div className="">
            <textarea
              onChange={handleTextArea}
              rows="3"
              //   cols="50"
              placeholder="Message..."
              className="p-4 w-full rounded-md resize-none text-gray-800 "
            ></textarea>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-md text-gray-50 bg-cyan-400 hover:bg-cyan-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceAddForm;

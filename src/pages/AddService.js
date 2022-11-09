import React from "react";
import ServiceAddForm from "../component/ServiceAddForm";
import Lottie from "lottie-react";
import animation from "../utilities/addServiceAnimation.json";

const AddService = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-10 px-3 lg:px-20 justify-between items-center">
      <ServiceAddForm></ServiceAddForm>
      <Lottie
        className="hidden lg:block"
        animationData={animation}
        loop={true}
      />
    </div>
  );
};

export default AddService;

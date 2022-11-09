import React from "react";
import RegisterForm from "../component/RegisterForm";
import Lottie from "lottie-react";
import animation from "../utilities/registerAnimation.json";

const Register = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-10 px-3 lg:px-20 justify-between items-center">
      <Lottie
        className="hidden lg:block"
        animationData={animation}
        loop={true}
      />
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default Register;

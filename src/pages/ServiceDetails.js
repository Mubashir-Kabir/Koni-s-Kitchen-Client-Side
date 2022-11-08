import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceDetailsComponent from "../component/ServiceDetailsComponent";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  const { name } = service;
  return (
    <div>
      <ServiceDetailsComponent service={service}></ServiceDetailsComponent>
    </div>
  );
};

export default ServiceDetails;

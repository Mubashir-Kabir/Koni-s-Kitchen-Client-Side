import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import ServiceCard from "../component/ServiceCard";
import State from "../component/State";
import useTitle from "../hooks/useTitle";

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useTitle("Home");

  useEffect(() => {
    fetch("https://koni-s-kitchen-server-side.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      {loading ? (
        <div className="flex h-screen items-center justify-center space-x-2">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-400"></div>
        </div>
      ) : (
        <>
          <div className="grid mx-3 gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8  lg:mx-20 my-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
          <Link
            to="/services"
            className="text-xl text-cyan-500 hover:underline hover:text-cyan-600"
          >
            See More..
          </Link>
        </>
      )}
      <Hero></Hero>
      <State></State>
    </div>
  );
};

export default Home;

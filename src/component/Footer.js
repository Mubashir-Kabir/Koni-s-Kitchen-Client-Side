import { NavLink } from "react-router-dom";
import logo from "../utilities/logo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto bg-yellow-300 sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
      <div className="grid gap-10 text-left row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <NavLink
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="w-16" src={logo} alt="" />

            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Koni's Kitchen
            </span>
          </NavLink>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Services are the mirror of a businessman. Good service attracts
              customers,make them feel friendly and set a better mindset between
              people.I always try to do the best efforts for my customers.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="My phone"
              title="My phone"
              className="transition-colors duration-300 text-cyan-500 hover:text-cyan-600"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:Koni@lorem.mail"
              aria-label="My email"
              title="My email"
              className="transition-colors duration-300 text-cyan-500 hover:text-cyan-600"
            >
              Koni@lorem.mail
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My address"
              title="My address"
              className="transition-colors duration-300 text-cyan-500 hover:text-cyan-600"
            >
              Some Where Road, No Where
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-cyan-500"
            >
              <BsFacebook className="text-2xl"></BsFacebook>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-cyan-500"
            >
              <BsInstagram className="text-2xl"></BsInstagram>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-cyan-500"
            >
              <BsTwitter className="text-2xl"></BsTwitter>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            You can follow me for more update
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022 . All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-cyan-500"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-cyan-500"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-cyan-500"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
